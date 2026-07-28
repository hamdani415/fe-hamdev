import axiosInstance from "@/libs/axios";


export const uploadImage = async(

    invitationId:number,

    file:File

)=>{


    const formData =
        new FormData();


    formData.append(
        "image",
        file
    );


    const {data} =
        await axiosInstance.post(

            `/upload/${invitationId}`,

            formData,

            {

                headers:{
                    "Content-Type":
                    "multipart/form-data"
                }

            }

        );



    return data;

};