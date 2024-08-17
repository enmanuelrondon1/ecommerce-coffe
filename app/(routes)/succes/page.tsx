"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24 ">
      <div className="flex flex-col-reverse gap-2 sm:flex-row ">
        <div className="flex justify-center md:min-w-[400px] ">
          <Image
            src="/sucess.jpg"
            alt="Succes"
            width={250}
            height={500}
            className="rounded-lg "
          />
        </div>
        <div className="text-justify">
          <h1 className="text-3xl ">Gracias por tu compra</h1>
          <p className="my-3 ">
            En breve, nuestroe equipo pondra manos a la obra para seleccionar
            los granos mas frescos y preparar tu envio con cuidado y dedicacion.
            Mientras tanto, sientate relajate y deja que la anticipacion del
            delicioso aroma del cafe recien hecho te envuelva{" "}
          </p>
          <p className="my-3">
            Gracias de nuevo por confiar en nosotros para satisfacer tu amor por
            el cafe. Estamos deseando que pruebes nuestros exquisitos sabores
          </p>
          <p className="my-3 ">Disfruta del cafe!</p>

          <Button className="my-3" onClick={() => router.push("/")}>
            Volver a la tienda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
