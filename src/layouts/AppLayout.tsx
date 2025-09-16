import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./header/Header";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function AppLayout() {
  return (
    <div>
      <SimpleBar className='h-screen'>
        <Header />
        <section className='w-full mx-auto'>
          <Outlet />
        </section>
      </SimpleBar>
      <footer className='py-5 block'>
        <p className='text-center font-gray-200 text-sm font-roboto'>
          &copy; {new Date().getFullYear()} Grupo Lozamora - Todos los derechos
          reservados.
        </p>
      </footer>

      <ToastContainer />
    </div>
  );
}
