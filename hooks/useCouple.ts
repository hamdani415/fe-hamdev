"use client";


import { useEffect,useState } from "react";

import {
    Couple,
    getCouple,
    createCouple,
    updateCouple
} from "@/services/couple.service";

import {
    uploadImage
} from "@/services/upload.service";



export const useCouple = (

    invitationId:number

)=>{


    const [couple,setCouple]
    = useState<Couple | null>(null);



    const [loading,setLoading]
    = useState(true);



    useEffect(()=>{

        fetchCouple();

    },[]);



    const fetchCouple = async()=>{


        const data =
            await getCouple(
                invitationId
            );


        setCouple(data);


        setLoading(false);

    };




    const saveCouple = async(

        form:any

    )=>{


        let groomPhoto =
            form.groomPhoto;


        let bridePhoto =
            form.bridePhoto;



        if(form.groomFile){

            const upload =
                await uploadImage(

                    invitationId,

                    form.groomFile

                );


            groomPhoto =
                upload.url;

        }



        if(form.brideFile){

            const upload =
                await uploadImage(

                    invitationId,

                    form.brideFile

                );


            bridePhoto =
                upload.url;

        }



        const body={

            groomName:
            form.groomName,

            groomFather:
            form.groomFather,

            groomMother:
            form.groomMother,

            groomPhoto,

            groomInstagram:
            form.groomInstagram,



            brideName:
            form.brideName,

            brideFather:
            form.brideFather,

            brideMother:
            form.brideMother,

            bridePhoto,

            brideInstagram:
            form.brideInstagram,

        };



        let result;


        if(couple){

            result =
            await updateCouple(

                invitationId,

                body

            );


        }else{


            result =
            await createCouple(

                invitationId,

                body

            );

        }



        setCouple(result);


    };



    return {

        couple,

        loading,

        saveCouple

    };

};