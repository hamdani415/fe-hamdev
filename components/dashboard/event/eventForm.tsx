"use client";

import { useEffect, useState } from "react";
import { useEvent } from "@/hooks/useEvent";


export default function EventForm({
    invitationId
}:{
    invitationId:number;
}) {


    const {
        event,
        loading,
        saveEvent
    } = useEvent(invitationId);



    const [form,setForm] = useState({

        akadDate:"",
        akadTime:"",
        akadLocation:"",

        resepsiDate:"",
        resepsiTime:"",
        resepsiLocation:"",

        maps:"",
        mapsEmbed:"",

    });



    useEffect(()=>{

        if(event){

            setForm({

                akadDate:
                    event.akadDate
                    .slice(0,16),

                akadTime:
                    event.akadTime,

                akadLocation:
                    event.akadLocation,


                resepsiDate:
                    event.resepsiDate
                    .slice(0,16),

                resepsiTime:
                    event.resepsiTime,

                resepsiLocation:
                    event.resepsiLocation,


                maps:
                    event.maps ?? "",

                mapsEmbed:
                    event.mapsEmbed ?? "",

            });

        }

    },[event]);



    const handleChange = (
        e:React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    )=>{

        setForm({

            ...form,

            [e.target.name]:
            e.target.value

        });

    };



    const submit = async()=>{


        await saveEvent({

            ...form,

            akadDate:
            new Date(form.akadDate)
            .toISOString(),


            resepsiDate:
            new Date(form.resepsiDate)
            .toISOString(),

        });


        alert(
            "Data acara berhasil disimpan"
        );


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
            space-y-10
        ">


            {/* AKAD */}

            <Section title="Akad Nikah">


                <Input
                    label="Tanggal & Waktu"
                    type="datetime-local"
                    name="akadDate"
                    value={form.akadDate}
                    onChange={handleChange}
                />


                <Input
                    label="Jam"
                    name="akadTime"
                    value={form.akadTime}
                    onChange={handleChange}
                />


                <Input
                    label="Lokasi"
                    name="akadLocation"
                    value={form.akadLocation}
                    onChange={handleChange}
                />


            </Section>



            {/* RESEPSI */}


            <Section title="Resepsi">


                <Input
                    label="Tanggal & Waktu"
                    type="datetime-local"
                    name="resepsiDate"
                    value={form.resepsiDate}
                    onChange={handleChange}
                />


                <Input
                    label="Jam"
                    name="resepsiTime"
                    value={form.resepsiTime}
                    onChange={handleChange}
                />


                <Input
                    label="Lokasi"
                    name="resepsiLocation"
                    value={form.resepsiLocation}
                    onChange={handleChange}
                />


            </Section>



            {/* MAPS */}

            <Section title="Google Maps">


                <Input
                    label="Maps URL"
                    name="maps"
                    value={form.maps}
                    onChange={handleChange}
                />



                <div>

                    <label className="text-sm font-medium">
                        Embed Maps
                    </label>


                    <textarea

                    name="mapsEmbed"

                    value={form.mapsEmbed}

                    onChange={handleChange}

                    className="
                    mt-2
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    min-h-32
                    "

                    />

                </div>


            </Section>




            <button

            onClick={submit}

            className="
            bg-black
            text-white
            px-8
            py-3
            rounded-xl
            "

            >

                Simpan Acara

            </button>



        </div>

    );

}





function Section({
    title,
    children
}:{
    title:string;
    children:React.ReactNode;
}){

    return (

        <div className="space-y-5">

            <h2 className="
                text-xl
                font-bold
            ">
                {title}
            </h2>


            <div className="
                grid
                md:grid-cols-2
                gap-5
            ">

                {children}

            </div>


        </div>

    );

}





function Input({
    label,
    ...props
}:{
    label:string;
} & React.InputHTMLAttributes<HTMLInputElement>){

    return (

        <div>

            <label className="
                text-sm
                font-medium
            ">
                {label}
            </label>


            <input

            {...props}

            className="
            mt-2
            w-full
            border
            rounded-xl
            px-4
            py-3
            "

            />


        </div>

    );

}