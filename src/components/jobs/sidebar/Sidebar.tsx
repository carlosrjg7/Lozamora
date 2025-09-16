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
    if (currentJobIndex === 0) return;
    setCurrentJobIndex((prevIndex) => Math.max(prevIndex - 1, 0));

    //  -- si es pantalla mobile no se ejecuta esta función --
    // (se coloco esta validación solo para evitar confunsion de la funcionalidad de ver detalles),
    // en mobile debe ser un paginado. queda pendiente desarrollarla
    if (window.innerWidth < 640) return;
    fnJobSelected(jobs[currentJobIndex - 1]);
  };

  const handleNext = () => {
    if (currentJobIndex < jobs.length - 1) {
      setCurrentJobIndex((prevIndex) =>
        Math.min(prevIndex + 1, jobs.length - 1)
      );

      if (window.innerWidth < 640) return;
      fnJobSelected(jobs[currentJobIndex + 1]);
    }
  };

  const handleCardClick = (index: number) => {
    setCurrentJobIndex(index);
    fnJobSelected(jobs[index]);
  };

  return (
    <div className='flex flex-col h-full relative'>
      <SimpleBar className='h-full pb-14 min-w-1/3'>
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
      <div className='absolute bottom-0 w-full flex justify-between gap-4 px-3 pb-4 bg-white py-2'>
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
