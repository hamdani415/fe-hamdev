"use client";


import { useEffect,useState } from "react";


import {
    Gallery,
    getGallery,
    createGallery,
    deleteGallery
} from "@/services/gallery.service";


import {
    uploadImage
} from "@/services/upload.service";



export const useGallery = (

    invitationId:number

)=>{


    const [gallery,setGallery]
    = useState<Gallery[]>([]);



    const [loading,setLoading]
    = useState(true);



    useEffect(()=>{

        fetchGallery();

    },[]);



    const fetchGallery = async()=>{

        try{

            const data =
                await getGallery(
                    invitationId
                );


            setGallery(data);


        }finally{

            setLoading(false);

        }

    };




    const addImage = async(
        file:File
    )=>{


        // upload cloudinary

        const upload =
            await uploadImage(
                invitationId,
                file
            );



        // simpan database

        const result =
            await createGallery(

                invitationId,

                {
                    image:upload.url,

                    sortOrder:
                    gallery.length

                }

            );



        setGallery([
            ...gallery,
            result
        ]);


    };





    const removeImage = async(
        id:number
    )=>{


        await deleteGallery(id);


        setGallery(

            gallery.filter(
                item =>
                item.id !== id
            )

        );


    };




    return {

        gallery,

        loading,

        addImage,

        removeImage

    };


};