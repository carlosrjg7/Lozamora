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
        <div className=''>
          <h3 className='text-2xl font-bold font-poppins'>{job.title}</h3>
          <p className='w-full text-wrap'>{job.details}</p>
        </div>
      </SimpleBar>
      <div>footer</div>
    </section>
  );
}
