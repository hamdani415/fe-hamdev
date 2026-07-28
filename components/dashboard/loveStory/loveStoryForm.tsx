"use client";


import {
    useState
} from "react";


import {
    Save
} from "lucide-react";


import {
    useLoveStory
} from "@/hooks/useLoveStory";



interface Props{

    invitationId:number;

}



export default function LoveStoryForm({

    invitationId

}:Props){



    const {
        stories,
        addStory,
        removeStory

    } = useLoveStory(invitationId);




    const [form,setForm]=useState({

        title:"",

        date:"",

        description:""

    });





    const save=async()=>{


        await addStory(form);


        setForm({

            title:"",

            date:"",

            description:""

        });


    };





    return (

        <div className="
        bg-white
        border
        rounded-2xl
        p-8
        space-y-8
        ">


            <h1 className="
            text-3xl
            font-bold
            ">
                Love Story
            </h1>



            <input

            placeholder="Judul cerita"

            value={form.title}

            onChange={
                e=>setForm({
                    ...form,
                    title:e.target.value
                })
            }

            className="
            border
            rounded-xl
            px-4
            py-3
            w-full
            "

            />



            <input

            placeholder="Tahun / tanggal"

            value={form.date}

            onChange={
                e=>setForm({
                    ...form,
                    date:e.target.value
                })
            }

            className="
            border
            rounded-xl
            px-4
            py-3
            w-full
            "

            />



            <textarea

            placeholder="Cerita"

            value={form.description}

            onChange={
                e=>setForm({
                    ...form,
                    description:e.target.value
                })
            }

            className="
            border
            rounded-xl
            px-4
            py-3
            w-full
            "

            />




            <button

            onClick={save}

            className="
            bg-black
            text-white
            px-6
            py-3
            rounded-xl
            flex
            gap-2
            "

            >

                <Save size={18}/>

                Simpan


            </button>





            <div className="space-y-4">


            {
            stories.map(item=>(

                <div

                key={item.id}

                className="
                border
                rounded-xl
                p-5
                flex
                justify-between
                "

                >

                    <div>

                        <h3 className="
                        font-bold
                        ">
                            {item.title}
                        </h3>


                        <p>
                            {item.date}
                        </p>


                        <p className="
                        text-gray-500
                        ">
                            {item.description}
                        </p>

                    </div>


                    <button

                    onClick={()=>removeStory(item.id)}

                    className="
                    text-red-500
                    "
                    
                    >
                        Hapus
                    </button>


                </div>

            ))
            }


            </div>


        </div>

    );

}