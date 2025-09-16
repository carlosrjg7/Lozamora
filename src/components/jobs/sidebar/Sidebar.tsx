import SimpleBar from "simplebar-react";
import Card from "../utils/Card";
import type { IJob } from "@/types/Jobs";
import { useState } from "react";

interface SidebarProps {
  jobs: IJob[];
  fnJobSelected: (job: IJob) => void;
}

export default function Sidebar({ jobs, fnJobSelected }: SidebarProps) {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentJobIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    fnJobSelected(jobs[currentJobIndex - 1]);
  };

  const handleNext = () => {
    // comprobar que no se pasa del último índice
    if (currentJobIndex < jobs.length - 1) {
      setCurrentJobIndex((prevIndex) =>
        Math.min(prevIndex + 1, jobs.length - 1)
      );
      fnJobSelected(jobs[currentJobIndex + 1]);
    }
  };

  const handleCardClick = (index: number) => {
    setCurrentJobIndex(index);
    fnJobSelected(jobs[index]);
  };

  return (
    <div className='flex flex-col h-full relative'>
      <SimpleBar className='h-full pb-14'>
        <div className='h-[calc(100% - 50px)]'>
          {jobs.map((job: IJob, index) => (
            <Card
              key={job.id}
              job={job}
              active={currentJobIndex === index}
              fnCallback={() => handleCardClick(index)}
            />
          ))}
        </div>
      </SimpleBar>
      <div className='absolute bottom-0 w-full flex justify-between gap-4 px-3 bg-white py-2'>
        <button
          type='button'
          className='w-full bg-primary-200 text-font font-semibold font-poppins text-xs rounded-2xl px-4 py-2'
          onClick={handlePrevious}
        >
          Anterior
        </button>
        <button
          type='button'
          className='w-full bg-primary-500 text-white font-semibold font-poppins text-xs rounded-2xl px-4 py-2'
          onClick={handleNext}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
