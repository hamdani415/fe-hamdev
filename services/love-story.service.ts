import axiosInstance from "@/libs/axios";


export interface LoveStoryInput {

    title:string;

    date:string;

    description:string;

}



export const getLoveStories = async(
    invitationId:number
)=>{


    const {data} =
        await axiosInstance.get(
            `/lovestory/${invitationId}`
        );


    return data.data;

};



export const createLoveStory = async(

    invitationId:number,

    body:LoveStoryInput

)=>{


    const {data} =
        await axiosInstance.post(

            `/lovestory/${invitationId}`,

            body

        );


    return data.data;

};



export const updateLoveStory = async(

    id:number,

    body:LoveStoryInput

)=>{


    const {data}=

        await axiosInstance.put(

            `/lovestory/${id}`,

            body

        );


    return data.data;

};



export const deleteLoveStory = async(

    id:number

)=>{


    const {data}=

        await axiosInstance.delete(

            `/lovestory/${id}`

        );


    return data;

};