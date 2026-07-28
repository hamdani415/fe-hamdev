"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Upload, Save } from "lucide-react";

import { uploadImage } from "@/services/upload.service";
import { updateInvitation } from "@/services/invitation.service";
import { useInvitationDetail } from "@/hooks/useInvitationDetail";


interface Props {
    invitationId:number;
}



export default function InvitationSettingForm({

    invitationId

}:Props){


    const {
        invitation,
        loading:loadingData

    } = useInvitationDetail(invitationId);



    const [loading,setLoading] =
        useState(false);



    const [form,setForm] = useState({

        coverImage:"",
        quote:"",
        musicFile:"/music/musik1.mp3",
        musicTitle:"Perfect",

    });



    const [file,setFile] =
        useState<File | null>(null);




    useEffect(()=>{


        if(invitation){


            setForm({

                coverImage:
                invitation.coverImage ?? "",


                quote:
                invitation.quote ?? "",


                musicFile:
                invitation.musicFile ??
                "/music/musik1.mp3",


                musicTitle:
                invitation.musicTitle ??
                "",

            });


        }


    },[invitation]);






    const handleFile = (

        e:React.ChangeEvent<HTMLInputElement>

    )=>{


        const selected =
            e.target.files?.[0];


        if(!selected) return;



        setFile(selected);



        setForm({

            ...form,

            coverImage:
            URL.createObjectURL(selected)

        });


    };







    const save = async()=>{


        try{


            setLoading(true);



            let imageUrl =
                form.coverImage;




            if(file){


                const result =
                    await uploadImage(

                        invitationId,

                        file

                    );


                imageUrl =
                    result.url;


            }





            await updateInvitation(

                invitationId,

                {

                    coverImage:imageUrl,

                    quote:form.quote,

                    musicFile:form.musicFile,

                    musicTitle:form.musicTitle

                }

            );



            alert(
                "Setting berhasil disimpan"
            );



        }

        catch(error){


            console.log(error);


            alert(
                "Gagal menyimpan"
            );


        }

        finally{


            setLoading(false);


        }


    };







    if(loadingData){


        return (

            <p>
                Loading...
            </p>

        );

    }







    return (


        <div className="
        bg-white
        border
        rounded-2xl
        p-8
        space-y-8
        ">


            <div>


                <h1 className="
                text-3xl
                font-bold
                ">

                    Invitation Setting

                </h1>



                <p className="
                text-gray-500
                mt-2
                ">

                    Atur cover dan tampilan awal undangan

                </p>


            </div>








            {/* COVER IMAGE */}



            <div>


                <label className="
                font-medium
                ">

                    Cover Image

                </label>




                <label className="
                mt-3
                h-72
                rounded-2xl
                border
                flex
                items-center
                justify-center
                overflow-hidden
                cursor-pointer
                ">



                    {

                    form.coverImage ?



                    <Image

                        src={form.coverImage}

                        width={600}

                        height={600}

                        alt="cover"

                        className="
                        w-full
                        h-full
                        object-cover
                        "

                    />



                    :



                    <div className="
                    flex
                    flex-col
                    items-center
                    text-gray-400
                    ">


                        <Upload/>


                        Upload Cover


                    </div>


                    }




                    <input

                    hidden

                    type="file"

                    accept="image/*"

                    onChange={handleFile}

                    />


                </label>


            </div>









            {/* QUOTE */}




            <div>


                <label className="
                font-medium
                ">

                    Quote

                </label>



                <textarea


                value={form.quote}



                onChange={(e)=>

                    setForm({

                        ...form,

                        quote:e.target.value

                    })

                }



                rows={5}



                className="
                mt-2
                w-full
                border
                rounded-xl
                p-4
                "

                placeholder="
                Masukkan quote undangan
                "


                />



            </div>









            {/* MUSIC */}





            <div className="
            grid
            md:grid-cols-2
            gap-5
            ">



                <div>


                    <label>

                        Music File

                    </label>



                    <input


                    value={form.musicFile}



                    onChange={(e)=>

                        setForm({

                            ...form,

                            musicFile:
                            e.target.value

                        })

                    }



                    className="
                    mt-2
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    "


                    />


                </div>







                <div>


                    <label>

                        Music Title

                    </label>



                    <input


                    value={form.musicTitle}



                    onChange={(e)=>

                        setForm({

                            ...form,

                            musicTitle:
                            e.target.value

                        })

                    }



                    className="
                    mt-2
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    "


                    />


                </div>




            </div>









            <button


            onClick={save}


            disabled={loading}



            className="
            bg-black
            text-white
            px-6
            py-3
            rounded-xl
            flex
            items-center
            gap-2
            "


            >


                <Save size={18}/>



                {

                loading

                ?

                "Menyimpan..."

                :

                "Simpan Setting"

                }


            </button>





        </div>


    );

}