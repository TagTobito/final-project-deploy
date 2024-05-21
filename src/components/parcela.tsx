'use client'
import Image from "next/image";
import { useState } from "react";
import Home  from "@/app/page"; // Import the 'estadosParcelas' variable correctly
interface ParcelaProps {
    estado: string;
    pos : number;
}

export default function Parcela({ estado }: ParcelaProps, {pos} : ParcelaProps) {
    const [Estado, setEstado] = useState(estado); // Utiliza estado directamente, ya que se recibe como un prop
    let fondo;
    const [open, setOpen] = useState(false);
    let css = open ? "z-10 bg-white text-black absolute" : "hidden"
    switch (Estado) {
        case "Vacio":
            fondo = "/Parcela-vacia.png";
            break;
        case "Urbano":
            fondo = "/Centro-urbano.png";
            break;
        case "Granja":
            fondo = "/Parcela-granja.png";
            break;
        case "Aserradero":
            fondo = "/Parcela-aserradero.png";
            break;
        case "Cantera":
            fondo = "/Parcela-cantera.png";
            break;
        case "Mina":
            fondo = "/Parcela-mina.png";
            break;
        case "Cuartel":
            fondo = "/Parcela-cuartel.png";
            break;
    }
    const handleClick = () => {
        if(Estado !== "Urbano"){
        setOpen(true);}
    };

    const handleGranja = () => {
        setEstado("Granja")
        setOpen(false)
    }
    const handleMina = () => {
        setEstado("Mina")
        setOpen(false)
    }
    const handleCantera = () => {
        setEstado("Cantera")
        setOpen(false)
    }
    const handleAserradero = () => {
        setEstado("Aserradero")
        setOpen(false)
    }
    const handleCuartel = () => {
        setEstado("Cuartel")
        setOpen(false)
    }
    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-customDarkGray bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-customYellow border-4 border-customDarkGray p-8 px-10 rounded-lg shadow-lg">
                            <h3 className="text-center text-customDarkGray font-bold mb-4 text-xl">EDIFICIOS</h3>
                            <ul className="text-center">
                                <li className="bg-customFarmColor border-2 border-customDarkGray rounded p-2 mb-2 flex items-center">
                                    <Image
                                        src="/icono-granja.png"
                                        alt="Icono granja"
                                        height={40}
                                        width={40}
                                        quality={100}
                                    />
                                    <button className="text-customDarkGray text-lg font-semibold" onClick={handleGranja}>Granja</button>
                                </li>
                                <li className="bg-customMineColor border-2 border-customDarkGray rounded p-2 mb-2 flex items-center">
                                    <Image
                                        src="/icono-mina.png"
                                        alt="Icono mina"
                                        height={40}
                                        width={40}
                                        quality={100}
                                    />
                                    <button className="text-customDarkGray text-lg font-semibold" onClick={handleMina}>Mina</button>
                                </li>
                                <li className="bg-customQuarryColor border-2 border-customDarkGray rounded p-2 mb-2 flex items-center">
                                    <Image
                                        src="/icono-cantera.png"
                                        alt="Icono cantera"
                                        height={40}
                                        width={40}
                                        quality={100}
                                    />
                                    <button className="text-customDarkGray text-lg font-semibold" onClick={handleCantera}>Cantera</button>
                                </li>
                                <li className="bg-customSawmillColor border-2 border-customDarkGray rounded p-2 mb-2 flex items-center">
                                    <Image
                                        src="/icono-aserradero.png"
                                        alt="Icono aserradero"
                                        height={40}
                                        width={40}
                                        quality={100}
                                    />
                                    <button className="text-customDarkGray text-lg font-semibold" onClick={handleAserradero}>Aserradero</button>
                                </li>
                                <li className="bg-customBarracksColor border-2 border-customDarkGray rounded p-2 mb-2 flex items-center">
                                    <Image
                                        src="/icono-cuartel.png"
                                        alt="Icono cuartel"
                                        height={40}
                                        width={40}
                                        quality={100}
                                    />
                                    <button className="text-customDarkGray text-lg font-semibold" onClick={handleCuartel}>Cuartel</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <button className="transition-transform duration-300 ease-in-out transform hover:scale-105 -mx-0.5" onClick={handleClick}>
                <Image src={fondo} alt="Botón Parcela Vacía" width={100} height={100} />
            </button>
        </>
    );
}