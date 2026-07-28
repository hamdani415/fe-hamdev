"use client";


import { useEffect, useState } from "react";

import {
    Event,
    EventInput,
    getEvent,
    createEvent,
    updateEvent
} from "@/services/event.service";



export const useEvent = (
    invitationId:number
)=>{


    const [event,setEvent]
    = useState<Event|null>(null);


    const [loading,setLoading]
    = useState(true);



    useEffect(()=>{

        fetchEvent();

    },[]);



    const fetchEvent = async()=>{

        try{

            const data =
                await getEvent(invitationId);


            setEvent(data);


        }catch{

            setEvent(null);

        }
        finally{

            setLoading(false);

        }

    };



    const saveEvent = async(
        body:EventInput
    )=>{


        let result;


        if(event){

            result =
            await updateEvent(
                invitationId,
                body
            );


        }else{

            result =
            await createEvent(
                invitationId,
                body
            );

        }


        setEvent(result);


    };



    return {
        event,
        loading,
        saveEvent
    };

};