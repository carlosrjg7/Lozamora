import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { FunnelIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Select from "./components/Select";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Buscador() {
  const [hideTexts, setHideTexts] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 74) setHideTexts(true);
      if (window.scrollY < 74) setHideTexts(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='layout-grid'>
      <section className='col-start-1 col-end-5 md:col-start-2 md:col-end-8 lg:col-start-2 lg:col-end-12 py-8'>
        <AnimatePresence>
          {!hideTexts && (
            <motion.div
              layout
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3 }}
              className='mb-4 text-center md:text-left space-y-2 motionDiv'
            >
              <span className='text-font font-roboto leading-normal'>
                Trabajos remotos
              </span>
              <h1 className='text-primary-500 font-poppins font-bold text-3xl leading-normal md:text-4xl lg:text-5xl'>
                Talentos Perú
              </h1>
              <p className='text-font font-roboto leading-normal text-sm md:text-base lg:text-lg'>
                Encuentra tu proximo trabajo en empresas como{" "}
                <span className='font-bold text-primary-600'>
                  Grupo Lozamora
                </span>
                ,<span className='font-bold text-primary-600'>Google</span>,{" "}
                <span className='font-bold text-primary-600'>Intercorp</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <form className='mt-4 flex flex-col gap-4 md:flex-row md:gap-0'>
          <div className='relative md:basis-3/5'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
            </span>
            <input
              type='text'
              placeholder='Buscar por palabra clave'
              className='w-full flex-grow bg-white text-font font-poppins border border-gray-300 md:border-r-0 rounded-2xl md:rounded-r-none pl-10 pr-4 py-2 md:py-3 focus:outline-none focus:ring-2 md:focus:ring-0 focus:ring-primary-500'
            />
          </div>

          <div className='relative md:basis-1/3'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <MapPinIcon className='h-5 w-5 text-gray-400' />
            </span>
            <input
              type='text'
              placeholder='Ubicación'
              className='w-full flex-grow bg-white text-font font-poppins border border-gray-300 rounded-2xl md:rounded-none pl-10 pr-4 py-2 md:py-3 focus:outline-none focus:ring-2 md:focus:ring-0 focus:ring-primary-500'
            />
          </div>

          <div className='flex flex-row gap-2 mt-2 md:mt-0 md:gap-0 md:flex-1'>
            <button className='bg-primary-200 text-primary-600 font-poppins rounded-2xl md:rounded-none md:hidden px-4 py-2 hover:bg-gray-300 transition-colors duration-300'>
              <FunnelIcon className='h-5 w-5' />
            </button>
            <button
              type='submit'
              className='flex-1 bg-primary-500 text-white font-poppins font-semibold rounded-2xl md:rounded-l-none px-4 py-2 hover:bg-primary-600 transition-colors duration-300'
            >
              <span className='md:hidden'>Buscar</span>
              <span className='hidden md:inline'>
                <MagnifyingGlassIcon className='h-5 w-5 inline-block mr-2' />
              </span>
            </button>
          </div>
        </form>
        <div className='hidden md:flex flex-row gap-2 md:gap-4 justify-center lg:justify-start mt-5'>
          <Select
            options={[
              { label: "Modalidad", value: "Modalidad" },
              { label: "Remoto", value: "Remoto" },
              { label: "Presencial", value: "Presencial" },
            ]}
          />
          <Select
            options={[
              { label: "Categoría", value: "Categoría" },
              { label: "Desarrollo", value: "Desarrollo" },
              { label: "Diseño", value: "Diseño" },
            ]}
          />
          <Select
            options={[
              { label: "Jornada", value: "Jornada" },
              { label: "Tiempo completo", value: "Tiempo completo" },
              { label: "Part time", value: "Part time" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
