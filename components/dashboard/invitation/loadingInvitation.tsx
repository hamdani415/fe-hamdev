export default function LoadingInvitation() {

    return (

        <div className="space-y-5">

            {[...Array(4)].map((_, i) => (

                <div
                    key={i}
                    className="h-44 rounded-2xl bg-gray-100 animate-pulse"
                />

            ))}

        </div>

    );

}