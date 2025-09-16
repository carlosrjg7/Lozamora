import type { IJob } from "@/types/Jobs";
import {
  EllipsisVerticalIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import SimpleBar from "simplebar-react";

interface DetailsJobProps {
  job: IJob;
}

export default function DetailsJob({ job }: DetailsJobProps) {
  return (
    <section className='relative w-full border border-gray-200 rounded-2xl flex-1 p-5 text-font'>
      <SimpleBar className='h-full pr-4 pb-20'>
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
              <p className='text-lg text-primary-600 font-semibold leading-8'>
                {job.company}
              </p>
              <p className='text-sm text-font leading-8'>{job.location}</p>
              <p className='text-sm text-font leading-8'>Empresa Verificada</p>
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
        <div>
          <p className='w-full text-wrap whitespace-pre-line'>{job.details}</p>
          <p className='w-full text-wrap whitespace-pre-line'>{job.details}</p>
        </div>
      </SimpleBar>
      <div className='w-full absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 rounded-b-2xl'>
        <div className='w-1/2 flex flex-row justify-between gap-4 mx-auto my-1'>
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
      </div>
    </section>
  );
}
