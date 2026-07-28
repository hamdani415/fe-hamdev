import InvitationSettingForm from "@/components/dashboard/invitation/invitationSettingForm";


export default async function SettingPage({

    params

}:{

    params: Promise<{
        id:string
    }>

}){


    const { id } = await params;



    return (

        <InvitationSettingForm

            invitationId={
                Number(id)
            }

        />

    );

}