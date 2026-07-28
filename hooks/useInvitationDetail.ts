"use client";


import { useEffect, useState } from "react";
import {
    getInvitationById
} from "@/services/invitation.service";


export const useInvitationDetail = (
    id:number
)=>{


    const [invitation,setInvitation] =
        useState<any>(null);


    const [loading,setLoading] =
        useState(true);



    const fetchInvitation = async()=>{

        try{

            const data =
                await getInvitationById(id);


            setInvitation(data);

        }

        finally{

            setLoading(false);

        }

    };



    useEffect(()=>{

        if(id){

            fetchInvitation();

        }

    },[id]);



    return {

        invitation,

        loading,

        fetchInvitation

    };

};