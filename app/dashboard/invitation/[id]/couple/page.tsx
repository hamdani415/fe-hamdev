"use client";


import { useParams } from "next/navigation";

import CoupleForm from "@/components/dashboard/couple/coupleForm";


export default function CouplePage(){


    const {id} =
        useParams();



    return (

        <CoupleForm

            invitationId={
                Number(id)
            }

        />

    );

}