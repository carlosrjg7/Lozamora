import Buscador from "@/components/jobs/hero/Buscador";
import Sidebar from "@/components/jobs/sidebar/Sidebar";
import { JOBS } from "@/constants/Jobs";
import type { IJob } from "@/types/Jobs";
import { useState } from "react";
import DetailsJob from "@/components/jobs/DetailsJob";
import ModalJobDetails from "@/components/jobs/utils/ModalJobDetails";

export default function DashboardView() {
  const [selectedJob, setSelectedJob] = useState<IJob>(JOBS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleJobSelected = (job: IJob) => {
    console.log("Job selected:", job);
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = (close: boolean) => {
    setIsModalOpen(close);
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
          <aside className='w-full md:w-1/3 lg:w-1/4'>
            <Sidebar jobs={JOBS} fnJobSelected={handleJobSelected} />
          </aside>

          <DetailsJob job={selectedJob} />

          <ModalJobDetails
            job={selectedJob}
            show={isModalOpen}
            fnClose={handleCloseModal}
          />
        </div>
      </div>
    </>
  );
}
