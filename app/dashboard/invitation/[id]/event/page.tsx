"use client";


import { useParams } from "next/navigation";
import EventForm from "@/components/dashboard/event/eventForm";


export default function EventPage(){


    const params = useParams();


    return (

        <div>

            <h1 className="text-3xl font-bold mb-8">
                Data Acara
            </h1>


            <EventForm
                invitationId={
                    Number(params.id)
                }
            />


        </div>

    );

}