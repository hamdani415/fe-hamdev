"use client";


import { useState } from "react";
import { useCreateInvitation } 
from "@/hooks/useCreateInvitation";


const templates = [

    {
        id:1,
        name:"Aurora"
    },

    {
        id:2,
        name:"Sakura"
    },

    {
        id:3,
        name:"ocean"
    },
    {
        id:4,
        name:"noir"
    }

];


export default function CreateInvitationForm(){


    const {
        create,
        loading,
        error
    } = useCreateInvitation();



    const [templateId,setTemplateId]
    = useState(1);


    const [slug,setSlug]
    = useState("");



    return (

        <div className="
            bg-white
            border
            rounded-2xl
            p-8
            max-w-xl
        ">


            <div className="space-y-6">


                <div>

                    <label className="font-medium">
                        Pilih Template
                    </label>


                    <div className="grid grid-cols-3 gap-3 mt-3">

                        {templates.map(item=>(

                            <button

                            key={item.id}

                            onClick={()=>
                                setTemplateId(item.id)
                            }

                            className={`
                            border
                            rounded-xl
                            py-4
                            ${
                            templateId === item.id
                            ?
                            "bg-black text-white"
                            :
                            ""
                            }
                            `}
                            >

                                {item.name}

                            </button>

                        ))}


                    </div>

                </div>



                <div>

                    <label className="font-medium">
                        Slug
                    </label>


                    <input

                    value={slug}

                    onChange={(e)=>
                        setSlug(e.target.value)
                    }

                    placeholder="
                    contoh:
                    hamdani-salsa
                    "

                    className="
                    w-full
                    mt-2
                    border
                    rounded-xl
                    px-4
                    py-3
                    "

                    />

                </div>



                {
                    error &&
                    <p className="text-red-500">
                        {error}
                    </p>
                }



                <button

                disabled={loading}

                onClick={()=>
                    create(
                        templateId,
                        slug
                    )
                }

                className="
                w-full
                bg-black
                text-white
                py-3
                rounded-xl
                "

                >

                    {
                        loading
                        ?
                        "Membuat..."
                        :
                        "Buat Invitation"
                    }


                </button>



            </div>


        </div>

    );

}