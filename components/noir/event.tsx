"use client";

import {
    CalendarDays,
    Clock3,
    MapPin
} from "lucide-react";

import {
    useEffect,
    useState
} from "react";

import FadeUp from "../ui/fadeUp";


type EventProps = {

    akadDate: string;

    akadTime: string;

    akadLocation: string;


    resepsiTime: string;

    resepsiLocation: string;


    maps: string;

    mapsEmbed: string;

};


export default function Event({

    akadDate,

    akadTime,

    akadLocation,

    resepsiTime,

    resepsiLocation,

    maps,

    mapsEmbed

}: EventProps) {


    const target = new Date(akadDate).getTime();


    const [time,setTime] = useState({

        days:0,

        hours:0,

        minutes:0,

        seconds:0,

    });



    useEffect(()=>{


        const interval = setInterval(()=>{


            const distance = target - Date.now();



            if(distance <= 0) return;



            setTime({

                days:Math.floor(
                    distance /
                    (1000*60*60*24)
                ),


                hours:Math.floor(
                    (distance %
                    (1000*60*60*24))
                    /
                    (1000*60*60)
                ),


                minutes:Math.floor(
                    (distance %
                    (1000*60*60))
                    /
                    (1000*60)
                ),


                seconds:Math.floor(
                    (distance %
                    (1000*60))
                    /
                    1000
                ),

            });



        },1000);



        return ()=>clearInterval(interval);


    },[target]);





    return (

<section
id="event"
className="
relative
overflow-hidden
bg-black
py-24
text-white
"
>


<div className="
absolute
left-0
top-0
h-96
w-96
rounded-full
bg-yellow-500/10
blur-[150px]
"/>



<FadeUp>


<div className="
mx-auto
max-w-6xl
px-6
">


{/* TITLE */}

<div className="text-center">


<p className="
text-xs
uppercase
tracking-[0.5em]
text-yellow-500
">

Wedding Event

</p>


<h2 className="
mt-4
font-serif
text-5xl
">

Save The Date

</h2>



<div className="
mx-auto
mt-6
h-px
w-24
bg-yellow-500
"/>


</div>





{/* COUNTDOWN */}


<div className="
mt-16
grid
grid-cols-2
gap-5
md:grid-cols-4
">


{
[
["Hari",time.days],
["Jam",time.hours],
["Menit",time.minutes],
["Detik",time.seconds],

].map(([label,value])=>(


<div
key={label}
className="
rounded-3xl
border
border-yellow-500/20
bg-white/5
p-8
text-center
backdrop-blur-xl
"
>


<h3 className="
text-5xl
font-bold
text-yellow-500
">

{value}

</h3>


<p className="
mt-3
text-gray-400
">

{label}

</p>


</div>


))


}


</div>





{/* EVENT CARD */}


<div className="
mt-20
grid
gap-10
md:grid-cols-2
">



<div className="
rounded-[32px]
border
border-yellow-500/20
bg-[#111]
p-10
">


<CalendarDays
className="
mx-auto
text-yellow-500
"
size={40}
/>



<h3 className="
mt-5
text-center
font-serif
text-3xl
">

Akad Nikah

</h3>



<div className="
mt-8
space-y-5
text-gray-300
">


<div className="flex gap-3">

<Clock3/>

<span>
{akadTime}
</span>

</div>



<div className="flex gap-3">

<MapPin/>

<span>
{akadLocation}
</span>

</div>


</div>


</div>





<div className="
rounded-[32px]
border
border-yellow-500/20
bg-[#111]
p-10
">


<CalendarDays
className="
mx-auto
text-yellow-500
"
size={40}
/>



<h3 className="
mt-5
text-center
font-serif
text-3xl
">

Resepsi

</h3>



<div className="
mt-8
space-y-5
text-gray-300
">


<div className="flex gap-3">

<Clock3/>

<span>
{resepsiTime}
</span>

</div>



<div className="flex gap-3">

<MapPin/>

<span>
{resepsiLocation}
</span>

</div>


</div>


</div>


</div>






{/* MAP */}


<div className="
mt-24
">


<div className="text-center">


<p className="
text-xs
uppercase
tracking-[0.5em]
text-yellow-500
">

Wedding Location

</p>


<h2 className="
mt-4
font-serif
text-4xl
">

Lokasi Acara

</h2>


</div>




<div className="
mt-10
overflow-hidden
rounded-[30px]
border
border-yellow-500/20
">


<iframe

src={mapsEmbed}

width="100%"

height="420"

loading="lazy"

className=""

allowFullScreen

referrerPolicy="no-referrer-when-downgrade"

/>


</div>




<div className="
mt-10
flex
justify-center
">


<a

href={maps}

target="_blank"

className="
rounded-full
bg-yellow-500
px-8
py-4
font-medium
text-black
transition
hover:bg-transparent
hover:text-yellow-500
border
border-yellow-500
"

>

📍 Buka Google Maps

</a>


</div>



</div>


</div>


</FadeUp>


</section>


    );

}