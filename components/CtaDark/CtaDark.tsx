import Link from "next/link";
import { Reveal } from "../Reveal";

export function CtaDark() {
  return (
    <div className="px-6 my-20 md:mt-36">
      <div className="max-w-7xl px-4 py-6 mx-auto border-transparent bg-gradient-to-r from-slate-200 to-slate-400 dark:bg-radialBlack md:px-16 md:py-12 shadow-dark rounded-3xl">
        <div className="grid items-center md:grid-cols-2">
          <div className="my-8">
            <Reveal>
              <h3 className="text-3xl text-blue dark:text-white font-bold">
                Ven a probar nuestros servicios
              </h3>
            </Reveal>
            <Reveal>
              <p className="dark:text-primaryDark text-grayDark">
                Todo lo que necesitas para tu negocio, en un solo lugar.{" "}
              </p>
            </Reveal>
          </div>

          <Link
            href="#contact"
            className="px-4 py-3 mx-auto text-white rounded-md dark:bg-blueRadial bg-primary hover:bg-blue"
          >
            <Reveal>Empieza ahora</Reveal>
          </Link>
        </div>
      </div>
    </div>
  );
}
