import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <Popover className=''>
      <Popover.Button className='inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg outline-0'>
        <MagnifyingGlassIcon className='w-8 h-8 text-white ' />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='absolute right-0 z-10 mt-5 flex min-w-full lg:max-w-min lg:justify-end'>
          <div className='w-full lg:w-56 shrink rounded-xl bg-white p-4 mx-2 mb-2 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5'>
            <p className='text-center'>Hola: Usuario</p>
            <Link to='/profile' className='block p-2 hover:text-purple-950'>
              Mi Perfil
            </Link>
            <Link to='/' className='block p-2 hover:text-purple-950'>
              Mis Postulaciones
            </Link>
            <button
              className='block p-2 hover:text-purple-950'
              type='button'
              onClick={() => {}}
            >
              Cerrar Sesión
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
