import axiosInstance from "@/libs/axios";


export interface Gallery {

    id:number;

    invitationId:number;

    image:string;

    sortOrder:number;

}



interface GalleryResponse {

    data:Gallery[];

}



export const getGallery = async(
    invitationId:number
)=>{

    const {data} =
        await axiosInstance.get<GalleryResponse>(
            `/gallery/${invitationId}`
        );


    return data.data;

};



export const createGallery = async(

    invitationId:number,

    body:{
        image:string;
        sortOrder?:number;
    }

)=>{


    const {data} =
        await axiosInstance.post(
            `/gallery/${invitationId}`,
            body
        );


    return data.data;

};



export const deleteGallery = async(

    id:number

)=>{


    const {data} =
        await axiosInstance.delete(
            `/gallery/${id}`
        );


    return data;

};