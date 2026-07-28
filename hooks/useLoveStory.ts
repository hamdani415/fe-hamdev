"use client";


import { useEffect,useState } from "react";

import {
    getLoveStories,
    createLoveStory,
    deleteLoveStory
} from "@/services/love-story.service";


import { LoveStory } from "@/types/love-story";



export const useLoveStory = (
    invitationId:number
)=>{


    const [stories,setStories]=
        useState<LoveStory[]>([]);


    const [loading,setLoading]=
        useState(true);



    const fetchStories=async()=>{


        try{

            const data =
                await getLoveStories(
                    invitationId
                );


            setStories(data);


        }

        finally{

            setLoading(false);

        }


    };




    useEffect(()=>{

        fetchStories();

    },[]);





    const addStory=async(
        body:any
    )=>{


        await createLoveStory(
            invitationId,
            body
        );


        fetchStories();

    };





    const removeStory=async(
        id:number
    )=>{


        await deleteLoveStory(id);


        fetchStories();


    };





    return {

        stories,

        loading,

        addStory,

        removeStory,

        fetchStories

    };


};