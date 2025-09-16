import Buscador from "@/components/jobs/hero/Buscador";
import Sidebar from "@/components/jobs/sidebar/Sidebar";
import { JOBS } from "@/constants/Jobs";
import type { IJob } from "@/types/Jobs";
import { useState } from "react";
import DetailsJob from "@/components/jobs/DetailsJob";

export default function DashboardView() {
  const [selectedJob, setSelectedJob] = useState<IJob>(JOBS[0]);

  const handleJobSelected = (job: IJob) => {
    console.log("Job selected:", job);
    setSelectedJob(job);
  };

  return (
    <>
      <div className='bg-primary-50  shadow-md'>
        <div className='max-w-screen-2xl mx-auto'>
          <Buscador />
        </div>
      </div>
      <div
        className='max-w-screen-2xl mx-auto transition-all duration-300 h-[calc(100vh-138px)]'
        id='mi-ancla'
      >
        <div className='max-w-screen-xl m-auto h-full md:flex md:gap-4 py-8 px-4'>
          <aside className='w-1/4'>
            <Sidebar jobs={JOBS} fnJobSelected={handleJobSelected} />
          </aside>

          <DetailsJob job={selectedJob} />
        </div>
      </div>
    </>
  );
}
