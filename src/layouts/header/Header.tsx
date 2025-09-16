import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='w-full bg-primary-500 sticky top-0 z-50 shadow-md'>
      <div className='max-w-screen-2xl flex justify-between items-center p-4 relative m-auto'>
        <div className=''>
          <Link to='/'>
            <Logo />
          </Link>
        </div>

        <NavMenu />
      </div>
    </header>
  );
}
