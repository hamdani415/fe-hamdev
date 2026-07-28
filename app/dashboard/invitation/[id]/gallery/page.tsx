"use client";


import { useParams } from "next/navigation";

import GalleryForm from "@/components/dashboard/gallery/galleryform";


export default function GalleryPage(){


    const params =
        useParams();



    return (

        <div>


            <h1 className="
                text-3xl
                font-bold
                mb-8
            ">

                Gallery

            </h1>



            <GalleryForm

                invitationId={
                    Number(params.id)
                }

            />


        </div>

    );

}