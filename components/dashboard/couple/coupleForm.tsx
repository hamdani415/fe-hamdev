"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Upload, Save } from "lucide-react";

import { useCouple } from "@/hooks/useCouple";


interface Props {
    invitationId: number;
}


interface FormState {

    groomName: string;
    groomFather: string;
    groomMother: string;
    groomPhoto: string | null;
    groomInstagram: string;
    groomFile: File | null;


    brideName: string;
    brideFather: string;
    brideMother: string;
    bridePhoto: string | null;
    brideInstagram: string;
    brideFile: File | null;

}



export default function CoupleForm({

    invitationId

}: Props) {


    const {
        couple,
        loading,
        saveCouple

    } = useCouple(invitationId);



    const [form,setForm] = useState<FormState>({

        groomName:"",
        groomFather:"",
        groomMother:"",
        groomPhoto:null,
        groomInstagram:"",
        groomFile:null,


        brideName:"",
        brideFather:"",
        brideMother:"",
        bridePhoto:null,
        brideInstagram:"",
        brideFile:null,

    });



    useEffect(()=>{

        if(couple){

            setForm({

                groomName: couple.groomName,
                groomFather: couple.groomFather,
                groomMother: couple.groomMother,
                groomPhoto: couple.groomPhoto,
                groomInstagram: couple.groomInstagram ?? "",
                groomFile:null,


                brideName: couple.brideName,
                brideFather: couple.brideFather,
                brideMother: couple.brideMother,
                bridePhoto: couple.bridePhoto,
                brideInstagram: couple.brideInstagram ?? "",
                brideFile:null,

            });

        }

    },[couple]);




    const handleChange = (
        e:React.ChangeEvent<HTMLInputElement>
    )=>{


        setForm(prev=>({

            ...prev,

            [e.target.name]:
            e.target.value

        }));

    };





    const handleFile = (

        e:React.ChangeEvent<HTMLInputElement>,

        type:"groom"|"bride"

    )=>{


        const file =
            e.target.files?.[0];


        if(!file) return;



        setForm(prev=>({

            ...prev,


            [`${type}File`]:file,


            [`${type}Photo`]:
            URL.createObjectURL(file)


        }));

    };





    const submit = async()=>{


        await saveCouple(form);


        alert(
            "Data mempelai berhasil disimpan"
        );


    };





    if(loading){

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
            space-y-10
        ">


            <h1 className="
                text-3xl
                font-bold
            ">

                Data Mempelai

            </h1>




            <div className="
                grid
                md:grid-cols-2
                gap-8
            ">


                <div className="
                    border
                    rounded-2xl
                    p-6
                    space-y-5
                ">


                    <h2 className="
                        text-xl
                        font-semibold
                    ">

                        Pengantin Pria

                    </h2>



                    <PhotoUpload

                        preview={form.groomPhoto}

                        onChange={(e)=>
                            handleFile(
                                e,
                                "groom"
                            )
                        }

                    />



                    <Input
                        label="Nama"
                        name="groomName"
                        value={form.groomName}
                        onChange={handleChange}
                    />

                    <Input
                        label="Nama Ayah"
                        name="groomFather"
                        value={form.groomFather}
                        onChange={handleChange}
                    />


                    <Input
                        label="Nama Ibu"
                        name="groomMother"
                        value={form.groomMother}
                        onChange={handleChange}
                    />


                    <Input
                        label="Instagram"
                        name="groomInstagram"
                        value={form.groomInstagram}
                        onChange={handleChange}
                    />


                </div>





                <div className="
                    border
                    rounded-2xl
                    p-6
                    space-y-5
                ">


                    <h2 className="
                        text-xl
                        font-semibold
                    ">

                        Pengantin Wanita

                    </h2>



                    <PhotoUpload

                        preview={form.bridePhoto}

                        onChange={(e)=>
                            handleFile(
                                e,
                                "bride"
                            )
                        }

                    />



                    <Input
                        label="Nama"
                        name="brideName"
                        value={form.brideName}
                        onChange={handleChange}
                    />

                    <Input
                        label="Nama Ayah"
                        name="brideFather"
                        value={form.brideFather}
                        onChange={handleChange}
                    />

                    <Input
                        label="Nama Ibu"
                        name="brideMother"
                        value={form.brideMother}
                        onChange={handleChange}
                    />


                    <Input
                        label="Instagram"
                        name="brideInstagram"
                        value={form.brideInstagram}
                        onChange={handleChange}
                    />


                </div>


            </div>




            <button

                onClick={submit}

                className="
                flex
                items-center
                gap-2
                bg-black
                text-white
                px-6
                py-3
                rounded-xl
                "

            >

                <Save size={18}/>

                Simpan

            </button>



        </div>

    );

}







interface InputProps {

    label:string;
    name:string;
    value:string;
    onChange:
    (e:React.ChangeEvent<HTMLInputElement>)=>void;

}



function Input({

    label,
    ...props

}:InputProps){


    return (

        <div className="space-y-2">


            <label className="text-sm text-gray-500">

                {label}

            </label>


            <input

                {...props}

                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                "

            />


        </div>

    );

}






interface PhotoUploadProps {

    preview:string | null;

    onChange:
    (e:React.ChangeEvent<HTMLInputElement>)=>void;

}



function PhotoUpload({

    preview,

    onChange

}:PhotoUploadProps){


    return (

        <label className="
            cursor-pointer
            block
        ">


            <div className="
                h-64
                rounded-2xl
                border
                overflow-hidden
                flex
                items-center
                justify-center
                bg-gray-50
            ">


                {
                    preview ?

                    <Image

                        src={preview}

                        width={400}

                        height={400}

                        alt="photo"

                        className="
                        w-full
                        h-full
                        object-cover
                        "

                    />


                    :


                    <div className="
                        text-gray-400
                        flex
                        flex-col
                        items-center
                        gap-2
                    ">

                        <Upload/>

                        Upload Foto

                    </div>

                }


            </div>



            <input

                hidden

                type="file"

                accept="image/*"

                onChange={onChange}

            />


        </label>

    );

}