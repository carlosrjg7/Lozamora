import type { IJob } from "@/types/Jobs";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import SimpleBar from "simplebar-react";

interface DetailsJobProps {
  job: IJob;
}

export default function DetailsJob({ job }: DetailsJobProps) {
  return (
    <section className='border border-gray-200 rounded-2xl flex-1 pl-5 pt-5 pb-5 text-font'>
      <SimpleBar className='h-full pr-4'>
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
          <div>
            <p className='text-lg text-primary-600 font-semibold leading-8'>
              {job.company}
            </p>
            <p className='text-sm text-font leading-8'>{job.location}</p>
            <p className='text-sm text-font leading-8'>Empresa Verificada</p>
          </div>
        </div>
        <div>
          <p className='w-full text-wrap'>{job.details}</p>
        </div>
      </SimpleBar>
      <div>footer</div>
    </section>
  );
}
