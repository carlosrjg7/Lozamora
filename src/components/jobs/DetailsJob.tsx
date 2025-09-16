import type { IJob } from "@/types/Jobs";
import {
  BellAlertIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  FlagIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import SimpleBar from "simplebar-react";

interface DetailsJobProps {
  job: IJob;
}

export default function DetailsJob({ job }: DetailsJobProps) {
  return (
    <section className='hidden md:block relative w-full border border-gray-200 rounded-2xl flex-1 p-5 text-font'>
      <SimpleBar className='h-full pr-4 pb-30'>
        <div className='flex justify-between items-center mb-4'>
          <img src={job.logo} className='rounded-2xl' alt='logo' />
          <span>
            <EllipsisVerticalIcon className='h-8 w-8 text-gray-600 cursor-pointer' />
          </span>
        </div>
        <div className='border-b border-gray-200 mb-4 pb-4 '>
          <h3 className='text-2xl font-bold font-poppins leading-8'>
            {job.title}
          </h3>
          <div className='flex flex-row gap-4 justify-between items-baseline-last my-4'>
            <div className='basis-2/3'>
              <p className='text-lg text-primary-600 font-semibold leading-8 font-poppins'>
                {job.company}
              </p>
              <p className='text-base text-font leading-8 font-roboto'>
                {job.location}
              </p>
              <p className='text-base text-font leading-8 font-roboto'>
                Empresa Verificada
              </p>
            </div>
            <div className='flex-1'>
              <div className='flex flex-row justify-between gap-4 mx-auto my-1'>
                <button
                  type='button'
                  className='flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-500 font-semibold rounded-full p-2'
                  onClick={() => alert("Aplicar a la oferta de trabajo")}
                >
                  <ShareIcon className='h-8 w-8 mx-auto' />
                </button>
                <button
                  type='button'
                  className='flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-500 font-semibold rounded-full px-2'
                  onClick={() => alert("Aplicar a la oferta de trabajo")}
                >
                  <HeartIcon className='h-8 w-8 mx-auto' />
                </button>
                <button
                  type='button'
                  className='w-full bg-primary-600 text-white font-poppins rounded-2xl px-5 py-2'
                  onClick={() => alert("Aplicar a la oferta de trabajo")}
                >
                  Postularme
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-6'>
          <ul>
            <li className='w-fit flex flex-row items-center gap-4 mr-4 mb-2 px-3 py-1 text-font font-light text-sm font-poppins'>
              <BriefcaseIcon className='h-5 w-5 mx-auto' />
              {job.contractType}
            </li>
            <li className='w-fit flex flex-row items-center gap-4 mr-4 mb-2 px-3 py-1 text-font font-light text-sm font-poppins'>
              <BuildingOfficeIcon className='h-5 w-5 mx-auto' />
              {job.modality}
            </li>
            <li className='w-fit flex flex-row items-center gap-4 mr-4 mb-2 px-3 py-1 text-font font-light text-sm font-poppins'>
              <ClockIcon className='h-5 w-5 mx-auto' />
              {job.time}
            </li>
          </ul>
        </div>

        <div>
          <p className='w-full text-wrap whitespace-pre-line font-roboto font-light'>
            {job.details}
          </p>
          <p className='font-bold mt-4 font-roboto text-base'>
            Requerimientos:{" "}
          </p>
          <ul className='list-disc list-inside mt-2 mb-6 font-roboto font-light'>
            {job.requirements.map((req, index) => (
              <li
                key={index}
                className='text-font font-roboto leading-normal text-base'
              >
                {req}
              </li>
            ))}
          </ul>
        </div>
      </SimpleBar>
      <div className='w-full absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 rounded-b-2xl'>
        <div className='w-full md:w-1/2 flex flex-row justify-between gap-4 mx-auto my-1'>
          <button
            type='button'
            className='flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-500 font-semibold rounded-full p-2'
            onClick={() => alert("Aplicar a la oferta de trabajo")}
          >
            <ShareIcon className='h-8 w-8 mx-auto' />
          </button>
          <button
            type='button'
            className='flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-500 font-semibold rounded-full px-2'
            onClick={() => alert("Aplicar a la oferta de trabajo")}
          >
            <HeartIcon className='h-8 w-8 mx-auto' />
          </button>
          <button
            type='button'
            className='w-full bg-primary-600 text-white font-poppins font-semibold rounded-2xl px-10 py-2'
            onClick={() => alert("Aplicar a la oferta de trabajo")}
          >
            Postularme
          </button>
        </div>
        <div className='w-full flex flex-row gap-16 justify-center mx-auto pt-4 text-xs'>
          <span className='text-font font-light cursor-pointer'>
            <FlagIcon className='h-4 w-4 inline-block mr-1' />
            Denunciar empleo
          </span>
          <span className='text-font font-light cursor-pointer'>
            <BellAlertIcon className='h-4 w-4 inline-block mr-1' />
            Recibir ofertas similares
          </span>
        </div>
      </div>
    </section>
  );
}
