"use client";

import { useEffect, useState } from "react";
import { getDashboard } from "@/services/dasboard.service";

export const useDashboard = () => {

    const [loading, setLoading] =
        useState(true);

    const [dashboard, setDashboard] =
        useState<any>();

    useEffect(() => {

        fetchDashboard();

    }, []);

    const fetchDashboard =
        async () => {

            try {

                const data =
                    await getDashboard();

                setDashboard(data);

            } finally {

                setLoading(false);

            }

        };

    return {

        dashboard,

        loading

    };

};