"use client";

import { motion } from "framer-motion";
import { Copy, Gift as GiftIcon, MapPin, Check } from "lucide-react";
import { useState } from "react";


interface Props {

    bank: string;

    accountNumber: string;

    accountName: string;

    address?: string;

}



export default function Gift({

    bank,

    accountNumber,

    accountName,

    address,

}: Props) {


    const [copied, setCopied] = useState(false);



    const copy = () => {

        navigator.clipboard.writeText(accountNumber);

        setCopied(true);


        setTimeout(() => {

            setCopied(false);

        },2000);

    };




    return (

        <section id="gift" className="
            relative
            overflow-hidden
            bg-black
            py-24
            text-white
        ">


            {/* Glow */}

            <div className="
                absolute
                left-0
                top-0
                h-80
                w-80
                rounded-full
                bg-yellow-500/5
                blur-[150px]
            "/>


            <div className="
                absolute
                bottom-0
                right-0
                h-80
                w-80
                rounded-full
                bg-yellow-500/5
                blur-[150px]
            "/>



            <div className="
                container
                mx-auto
                max-w-4xl
                px-6
            ">


                {/* Header */}

                <motion.div

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}

                    className="
                        text-center
                    "

                >


                    <GiftIcon

                        size={50}

                        className="
                            mx-auto
                            text-yellow-500
                        "

                    />



                    <p className="
                        mt-6
                        text-xs
                        uppercase
                        tracking-[0.45em]
                        text-yellow-500
                    ">

                        Wedding Gift

                    </p>



                    <h2 className="
                        mt-5
                        font-serif
                        text-5xl
                    ">

                        Wedding Gift

                    </h2>



                    <div className="
                        mx-auto
                        mt-6
                        h-px
                        w-24
                        bg-yellow-500
                    "/>



                    <p className="
                        mx-auto
                        mt-8
                        max-w-xl
                        text-center
                        leading-8
                        text-gray-400
                    ">

                        Kehadiran serta doa restu Bapak/Ibu/Saudara/i
                        merupakan hadiah terindah bagi kami.
                        Namun apabila ingin memberikan tanda kasih,
                        dapat melalui informasi berikut.


                    </p>


                </motion.div>





                {/* Rekening */}


                <motion.div

                    initial={{
                        opacity:0,
                        y:40
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}


                    className="
                        mt-16
                        rounded-3xl
                        border
                        border-yellow-500/20
                        bg-[#101010]
                        p-10
                        text-center
                    "

                >


                    <h3 className="
                        font-serif
                        text-3xl
                        text-yellow-500
                    ">

                        {bank}

                    </h3>



                    <p className="
                        mt-8
                        break-all
                        text-3xl
                        font-semibold
                        tracking-widest
                        md:text-4xl
                    ">

                        {accountNumber}

                    </p>




                    <p className="
                        mt-4
                        text-gray-400
                    ">

                        a.n {accountName}

                    </p>




                    <button

                        onClick={copy}

                        className="
                            mx-auto
                            mt-10
                            flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-yellow-500
                            bg-yellow-500
                            px-8
                            py-4
                            font-medium
                            text-black
                            transition
                            hover:bg-transparent
                            hover:text-yellow-500
                        "

                    >


                        {
                            copied
                            ?
                            <Check size={18}/>
                            :
                            <Copy size={18}/>
                        }


                        {
                            copied
                            ?
                            "Berhasil Disalin"
                            :
                            "Salin Nomor Rekening"
                        }


                    </button>



                </motion.div>






                {/* Alamat Kado */}


                {
                    address && (


                    <motion.div

                        initial={{
                            opacity:0,
                            y:40
                        }}

                        whileInView={{
                            opacity:1,
                            y:0
                        }}

                        viewport={{
                            once:true
                        }}


                        className="
                            mt-10
                            rounded-3xl
                            border
                            border-yellow-500/20
                            bg-[#101010]
                            p-10
                            text-center
                        "

                    >


                        <MapPin

                            size={42}

                            className="
                                mx-auto
                                text-yellow-500
                            "

                        />



                        <h3 className="
                            mt-6
                            font-serif
                            text-3xl
                            text-yellow-500
                        ">

                            Kirim Kado

                        </h3>




                        <p className="
                            mx-auto
                            mt-8
                            max-w-xl
                            whitespace-pre-line
                            text-center
                            leading-8
                            text-gray-300
                        ">

                            {address}

                        </p>


                    </motion.div>


                    )
                }



            </div>


        </section>

    );

}