"use client";

import {
    House,
    Heart,
    CalendarDays,
    Images,
    Gift,
    MessageCircle
} from "lucide-react";


const menus = [

    {
        icon: House,
        id: "home",
    },

    {
        icon: Heart,
        id: "couple",
    },

    {
        icon: CalendarDays,
        id: "event",
    },

    {
        icon: Images,
        id: "gallery",
    },

    {
        icon: Gift,
        id: "gift",
    },

    {
        icon: MessageCircle,
        id: "rsvp",
    },

];



export default function BottomNavbar() {


    const scrollTo = (id:string)=>{

        const element = document.getElementById(id);


        if(!element) return;


        element.scrollIntoView({

            behavior:"smooth",

            block:"start",

        });

    };



    return (

        <nav

            className="
                fixed
                bottom-5
                left-1/2
                z-50
                flex
                -translate-x-1/2
                gap-2
                rounded-full
                border
                border-yellow-500/20
                bg-black/80
                p-3
                backdrop-blur-xl

                md:hidden
            "

        >


            {
                menus.map((menu)=>{


                    const Icon = menu.icon;


                    return (

                        <button

                            key={menu.id}

                            onClick={()=>scrollTo(menu.id)}

                            className="
                                rounded-full
                                p-3
                                text-yellow-500
                                transition

                                hover:bg-yellow-500
                                hover:text-black
                            "

                        >

                            <Icon
                                size={20}
                            />


                        </button>

                    );


                })
            }


        </nav>

    );

}