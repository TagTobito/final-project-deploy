"use client";
import Image from "next/image";

const Recursos = () => {
    var wood = 0;
    var gold = 0;
    var food = 0;
    var stone = 0;
    var tropes = 0;
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-customYellow border-t-2 border-customDarkGray p-4 flex justify-center">
            <ul className="text-center flex gap-4">
                <li className="bg-customMineColor border-2 border-customDarkGray rounded p-2 flex items-center">
                    <Image
                        src="/icono-mina.png"
                        alt="Icono mina"
                        height={40}
                        width={40}
                        quality={100}
                    />
                    <h1 className="text-customDarkGray text-lg font-semibold px-3 border-l-2 border-customDarkGray">{gold}</h1>
                </li>
                <li className="bg-customFarmColor border-2 border-customDarkGray rounded p-2 flex items-center">
                    <Image
                        src="/icono-granja.png"
                        alt="Icono granja"
                        height={40}
                        width={40}
                        quality={100}
                    />
                    <h1 className="text-customDarkGray text-lg font-semibold px-3 border-l-2 border-customDarkGray">{food}</h1>
                </li>
                <li className="bg-customQuarryColor border-2 border-customDarkGray rounded p-2  flex items-center">
                    <Image
                        src="/icono-cantera.png"
                        alt="Icono cantera"
                        height={40}
                        width={40}
                        quality={100}
                    />
                    <h1 className="text-customDarkGray text-lg font-semibold px-3 border-l-2 border-customDarkGray">{stone}</h1>
                </li>
                <li className="bg-customSawmillColor border-2 border-customDarkGray rounded p-2 flex items-center">
                    <Image
                        src="/icono-aserradero.png"
                        alt="Icono aserradero"
                        height={40}
                        width={40}
                        quality={100}
                    />
                    <h1 className="text-customDarkGray text-lg font-semibold px-3 border-l-2 border-customDarkGray">{wood}</h1>
                </li>
                <li className="bg-customBarracksColor border-2 border-customDarkGray rounded p-2 flex items-center">
                    <Image
                        src="/icono-cuartel.png"
                        alt="Icono cuartel"
                        height={40}
                        width={40}
                        quality={100}
                    />
                    <h1 className="text-customDarkGray text-lg font-semibold px-3 border-l-2 border-customDarkGray">{tropes}</h1>
                </li>
            </ul>
        </div>
    );
};

export default Recursos;