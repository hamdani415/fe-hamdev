import axiosInstance from "@/libs/axios";


export interface Couple {

    id:number;

    invitationId:number;

    groomName:string;
    groomFather:string;
    groomMother:string;
    groomPhoto:string | null;
    groomInstagram:string | null;


    brideName:string;
    brideFather:string;
    brideMother:string;
    bridePhoto:string | null;
    brideInstagram:string | null;

}



interface CoupleResponse {

    data:Couple | null;

}



export const getCouple = async(
    invitationId:number
)=>{

    const {data} =
        await axiosInstance.get<CoupleResponse>(
            `/couple/${invitationId}`
        );


    return data.data;

};



export const createCouple = async(

    invitationId:number,

    body:Omit<Couple,"id"|"invitationId">

)=>{


    const {data} =
        await axiosInstance.post(

            `/couple/${invitationId}`,

            body

        );


    return data.data;

};



export const updateCouple = async(

    invitationId:number,

    body:Partial<Couple>

)=>{


    const {data} =
        await axiosInstance.put(

            `/couple/${invitationId}`,

            body

        );


    return data.data;

};