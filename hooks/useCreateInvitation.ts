"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import { createInvitation } from "@/services/invitation.service";


export const useCreateInvitation = () => {

  const router = useRouter();

  const [loading,setLoading] =
    useState(false);

  const [error,setError] =
    useState("");


  const create = async (
    templateId:number,
    slug:string
  ) => {


    try {

      setLoading(true);
      setError("");


      const invitation =
        await createInvitation({
          templateId,
          slug
        });


      router.push(
        `/dashboard/invitation/${invitation.id}`
      );


    } catch(err:any){

      setError(
        err.response?.data?.message ??
        "Gagal membuat invitation"
      );

    } finally {

      setLoading(false);

    }

  };


  return {
    create,
    loading,
    error
  };

};