import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  ClockIcon,
  HeartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import type { IJob } from "@/types/Jobs";
import SimpleBar from "simplebar-react";

interface BottomSheetModalProps {
  job: IJob;
  show: boolean;
  fnClose: (close: boolean) => void;
}

export default function ModalJobDetails({
  job,
  show,
  fnClose,
}: BottomSheetModalProps) {
  // const [open, setOpen] = useState(false);

  return (
    <div className='block md:hidden'>
      <AnimatePresence>
        {show && (
          <>
            <motion.div
              className='fixed inset-0 bg-black/40 backdrop-blur-sm'
              onClick={() => fnClose(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className='fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl p-4'
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <div className='flex justify-between items-start'>
                <div className='logo min-w-[50px]'>
                  <img src={job.logo} className='rounded-2xl h-10' alt='logo' />
                </div>
                <h2 className='text-lg font-semibold'>{job.title}</h2>
                <motion.button
                  whileTap={{ scale: 0.8, rotate: 90 }}
                  onClick={() => fnClose(false)}
                  className='p-2 rounded-full hover:bg-gray-100'
                >
                  <XMarkIcon className='w-5 h-5' />
                </motion.button>
              </div>

              <div className='mt-4 text-font font-roboto'>
                <div className='border-b border-gray-200 pb-4'>
                  <p className='font-poppins text-base text-primary-600'>
                    {job.company}
                  </p>
                  <p className='mt-2 font-roboto'>{job.location}</p>
                </div>
                <SimpleBar className='h-100 pr-4 pb-4'>
                  <div className='mb-6 mt-4'>
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
                  <p className='mt-4'>{job.details}</p>
                  <p className='font-bold mt-4 font-roboto text-base'>
                    Requerimientos:{" "}
                  </p>
                  <ul className='list-disc list-inside mt-2 mb-6 font-roboto'>
                    {job.requirements.map((req, index) => (
                      <li
                        key={index}
                        className='text-font font-roboto leading-normal text-base'
                      >
                        {req}
                      </li>
                    ))}
                  </ul>
                </SimpleBar>
                <div className='flex flex-row justify-between gap-4 mx-auto my-4 border-t pt-4 border-gray-200'>
                  <button
                    type='button'
                    className='w-full bg-primary-600 text-white font-poppins rounded-2xl px-5 py-2'
                    onClick={() => alert("Aplicar a la oferta de trabajo")}
                  >
                    Postularme
                  </button>
                  <button
                    type='button'
                    className='flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-500 font-semibold rounded-full px-2'
                    onClick={() => alert("Aplicar a la oferta de trabajo")}
                  >
                    <HeartIcon className='h-8 w-8 mx-auto' />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
