import axiosInstance from "@/libs/axios";

interface LoginResponse {
  message: string;
  token: string;
}

export const loginService = async (body: {
  email: string;
  password: string;
}) => {

  const { data } = await axiosInstance.post<LoginResponse>(
    "/auth/login",
    body
  );

  return data;
};