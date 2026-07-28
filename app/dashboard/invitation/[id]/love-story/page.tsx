import LoveStoryForm from "@/components/dashboard/loveStory/loveStoryForm";


export default async function Page({

params

}:{

params:Promise<{
    id:string
}>

}){


const {id}=await params;



return (

    <LoveStoryForm

    invitationId={
        Number(id)
    }

    />

);


}