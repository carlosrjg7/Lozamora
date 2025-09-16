import type { IJob } from "@/types/Jobs";

interface CardProps {
  key: number;
  job: IJob;
  active?: boolean;
  fnCallback: () => void;
}

export default function Card({ job, active = false, fnCallback }: CardProps) {
  return (
    <article
      data-id={job.id}
      className={` rounded-2xl p-4 flex flex-col mb-4 w-full ${
        active
          ? "border-2 border-primary-100 bg-primary-50 "
          : "border border-gray-200"
      }`}
      onClick={() => {
        console.log(`Card ${job.id} clicked ${job.title}`);
        fnCallback();
      }}
    >
      <h3 className='font-poppins font-semibold'>{job.title}</h3>
      <p className='text-font mb-2 text-base'>{job.company}</p>
      <p className='text-font mb-2 text-base'>{job.location}</p>
      <small className='text-sm text-font font-light'>{job.modality}</small>
      <small className='text-xs text-gray-400 font-light'>{job.posted}</small>
    </article>
  );
}
