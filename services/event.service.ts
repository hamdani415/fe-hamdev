import axiosInstance from "@/libs/axios";


export interface Event {

    id:number;

    invitationId:number;

    akadDate:string;
    akadTime:string;
    akadLocation:string;


    resepsiDate:string;
    resepsiTime:string;
    resepsiLocation:string;


    maps:string | null;
    mapsEmbed:string | null;

}



export interface EventInput {

    akadDate:string;
    akadTime:string;
    akadLocation:string;


    resepsiDate:string;
    resepsiTime:string;
    resepsiLocation:string;


    maps?:string;
    mapsEmbed?:string;

}



interface EventResponse {

    data:Event;

}



export const getEvent = async(
    invitationId:number
)=>{

    const {data} =
        await axiosInstance.get<EventResponse>(
            `/event/${invitationId}`
        );


    return data.data;

};



export const createEvent = async(
    invitationId:number,
    body:EventInput
)=>{

    const {data} =
        await axiosInstance.post<EventResponse>(
            `/event/${invitationId}`,
            body
        );


    return data.data;

};



export const updateEvent = async(
    invitationId:number,
    body:EventInput
)=>{

    const {data} =
        await axiosInstance.put<EventResponse>(
            `/event/${invitationId}`,
            body
        );


    return data.data;

};