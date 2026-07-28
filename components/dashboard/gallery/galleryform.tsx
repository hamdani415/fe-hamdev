"use client";

import { useRef } from "react";
import Image from "next/image";
import { Upload, Trash2 } from "lucide-react";

import { useGallery } from "@/hooks/useGallery";


export default function GalleryForm({

    invitationId

}:{
    invitationId:number;
}) {


    const {
        gallery,
        loading,
        addImage,
        removeImage
    } = useGallery(invitationId);



    const inputRef = useRef<HTMLInputElement>(null);



    const handleUpload = async(
        e:React.ChangeEvent<HTMLInputElement>
    )=>{


        const file =
            e.target.files?.[0];


        if(!file) return;



        await addImage(file);



        e.target.value = "";

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
            space-y-8
        ">


            {/* Upload Button */}


            <div>


                <input

                    ref={inputRef}

                    type="file"

                    accept="image/*"

                    hidden

                    onChange={handleUpload}

                />



                <button

                    onClick={() =>
                        inputRef.current?.click()
                    }

                    className="
                    flex
                    items-center
                    gap-2
                    bg-black
                    text-white
                    px-5
                    py-3
                    rounded-xl
                    "

                >

                    <Upload size={18}/>

                    Tambah Foto


                </button>


            </div>





            {/* Gallery */}


            {
                gallery.length === 0 ?

                (

                    <div className="
                        text-center
                        py-20
                        text-gray-400
                    ">

                        Belum ada foto

                    </div>

                )

                :

                (

                    <div className="
                        grid
                        md:grid-cols-3
                        gap-5
                    ">


                    {
                        gallery.map((item)=>(

                            <div

                            key={item.id}

                            className="
                            relative
                            group
                            overflow-hidden
                            rounded-2xl
                            border
                            "

                            >


                                <Image

                                    src={item.image}

                                    alt="gallery"

                                    width={500}

                                    height={500}

                                    className="
                                    w-full
                                    h-64
                                    object-cover
                                    "

                                />



                                <button

                                    onClick={() =>
                                        removeImage(
                                            item.id
                                        )
                                    }


                                    className="
                                    absolute
                                    top-3
                                    right-3
                                    bg-white
                                    p-2
                                    rounded-full
                                    opacity-0
                                    group-hover:opacity-100
                                    transition
                                    "

                                >

                                    <Trash2
                                        size={18}
                                        className="text-red-500"
                                    />


                                </button>



                            </div>


                        ))

                    }


                    </div>

                )

            }



        </div>

    );

}