"use client";

import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginService } from "@/services/auth.service";

export const useLogin = () => {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const login = async (
        email: string,
        password: string
    ) => {

        try {

            setLoading(true);

            setError("");

            const result = await loginService({
                email,
                password,
            });

            localStorage.setItem(
                "token",
                result.token
            );

            router.replace("/dashboard/invitation");
        } catch (err) {

            if (err instanceof AxiosError) {

                setError(
                    err.response?.data?.message ??
                    "Email atau Password salah"
                );

            }

        } finally {

            setLoading(false);

        }

    };

    return {
        login,
        loading,
        error,
    };

};