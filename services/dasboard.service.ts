import axiosInstance from "@/libs/axios";

export const getDashboard = async () => {

    const { data } =
        await axiosInstance.get(
            "/invitation"
        );

    return data.data;

};