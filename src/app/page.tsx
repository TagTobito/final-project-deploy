import Image from "next/image";

export default function Home() {
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
        <div className="flex items-center flex-col ">
          <div className="flex">
            <div className="-my-7">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
            <div className="-mx-1 -my-7">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
            <div className="-my-7">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
            <div className="-mx-1">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
            <div className="-mx-1">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex">
            <div className="-my-7">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
            <div className="-mx-1 -my-7">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
            <div className="-my-7">
              <Image
                src="/centro-urbano.png"
                alt="Botón Centro Urbano"
                width={100}
                height={100}
              />
            </div>
            <div  className="-mx-1 -my-7">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
            <div className="-my-7">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex">
            <div className="-mx-1">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
            <div className="">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
            <div  className="-mx-1 ">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
            <div className="">
              <Image
                src="/parcela-vacia.png"
                alt="Botón Parcela Vacía"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex">
              <div className="-mx-1 -mt-7">
                <Image
                  src="/parcela-vacia.png"
                  alt="Botón Parcela Vacía"
                  width={100}
                  height={100}
                />
              </div>
              <div className="-mt-7">
                <Image
                  src="/parcela-vacia.png"
                  alt="Botón Parcela Vacía"
                  width={100}
                  height={100}
                />
              </div>
              <div className="-mx-1 -mt-7">
                <Image
                  src="/parcela-vacia.png"
                  alt="Botón Parcela Vacía"
                  width={100}
                  height={100}
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}