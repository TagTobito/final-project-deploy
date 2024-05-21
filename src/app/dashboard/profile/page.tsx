"use client";
import Image from "next/image";
import Parcela from "@/components/parcela";
import CantidadRecursos from "@/components/cantidad-recursos";

import { useSession, signOut } from "next-auth/react";

function ProfilePage() {
    const { data: session, status } = useSession();

    console.log(session, status);

    const estadosParcelas = [
        "Vacio", "Vacio", "Vacio", 
        "Vacio", "Vacio", "Vacio", "Vacio",
        "Vacio", "Vacio", "Urbano", "Vacio",
        "Vacio", "Vacio", "Vacio", "Vacio",
        "Vacio", "Vacio", "Vacio", "Vacio"
        ];
        
        return (
            <div className="relative h-screen">
            <Image
                src="/fondo-azul.png"
                alt="Fondo azul"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                <div className="flex items-center flex-col gap-y-1">
                {/* Asignar cada elemento de la lista a las parcelas */}
                <div className="flex -mb-8">
                    {estadosParcelas.slice(0, 3).map((estado, index) => (
                    <Parcela key={index} estado={estado} pos={index} />
                    ))}
                </div>
                <div className="flex">
                    {estadosParcelas.slice(3, 7).map((estado, index) => (
                    <Parcela key={index} estado={estado} pos={index} />
                    ))}
                </div>
                <div className="flex -my-8">
                    {estadosParcelas.slice(7, 12).map((estado, index) => (
                    <Parcela key={index} estado={estado} pos={index} />
                    ))}
                </div>
                <div className="flex">
                    {estadosParcelas.slice(12, 16).map((estado, index) => (
                    <Parcela key={index} estado={estado} pos={index} />
                    ))}
                </div>
                <div className="flex -mt-8">
                    {estadosParcelas.slice(16, 19).map((estado, index) => (
                    <Parcela key={index} estado={estado} pos={index} />
                    ))}
                </div>
                </div>
            </div>
            <div>
                <CantidadRecursos />
            </div>
            </div>
        );
}

export default ProfilePage;