"use client";

import { Heart, Globe } from "lucide-react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";


interface FooterProps {

    groom: string;

    bride: string;

}



export default function Footer({
    groom,
    bride,
}: FooterProps) {


    return (

        <footer className="
        border-t 
        border-yellow-500/20 
        bg-black 
        text-white
        ">


            <div className="
            mx-auto 
            max-w-5xl 
            px-6 
            py-20 
            text-center
            ">


                <h2 className="
                font-serif 
                text-5xl
                ">
                    Thank You
                </h2>



                <p className="
                mx-auto 
                mt-6 
                max-w-xl 
                leading-8 
                text-gray-400
                ">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                    Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
                    pada hari bahagia kami.
                </p>




                <div className="my-10 flex justify-center">

                    <div className="
                    flex 
                    h-16 
                    w-16 
                    items-center 
                    justify-center 
                    rounded-full 
                    bg-yellow-500
                    shadow-lg
                    ">

                        <Heart
                            fill="black"
                            color="black"
                            size={30}
                        />

                    </div>

                </div>





                <h3 className="
                font-serif 
                text-4xl
                ">
                    {groom}
                </h3>


                <p className="
                my-2 
                text-xl 
                text-yellow-500
                ">
                    &
                </p>


                <h3 className="
                font-serif 
                text-4xl
                ">
                    {bride}
                </h3>





                <div className="
                mx-auto 
                my-12 
                h-px 
                w-32 
                bg-yellow-500
                "/>





                <p className="
                text-sm 
                uppercase 
                tracking-[4px] 
                text-yellow-500
                ">
                    Crafted with ❤ by
                </p>


                <h4 className="
                mt-3 
                text-3xl 
                font-bold
                text-yellow-500
                ">
                    HAMDEV
                </h4>


                <p className="mt-2 text-gray-500">
                    Digital Invitation Studio
                </p>





                <div className="mt-8 flex justify-center gap-5">


                    <Link
                        href="https://instagram.com/hamdev.id"
                        target="_blank"
                        className="
                        flex 
                        h-12 
                        w-12 
                        items-center 
                        justify-center 
                        rounded-full 
                        border 
                        border-yellow-500/30
                        "
                    >

                        <FaInstagram
                            size={20}
                            className="text-yellow-500"
                        />

                    </Link>




                    <Link
                        href="https://hamdev.my.id"
                        target="_blank"
                        className="
                        flex 
                        h-12 
                        w-12 
                        items-center 
                        justify-center 
                        rounded-full 
                        border 
                        border-yellow-500/30
                        "
                    >

                        <Globe
                            size={20}
                            className="text-yellow-500"
                        />

                    </Link>


                </div>




                <p className="
                mt-12 
                text-sm 
                text-gray-500
                ">
                    © {new Date().getFullYear()} HAMDEV. All Rights Reserved.
                </p>



            </div>


        </footer>

    );

}