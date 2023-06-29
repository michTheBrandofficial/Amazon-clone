import { Img } from 'nixix/hoc';
import { Link } from 'nixix/router';
import SearchBar from './SearchBar';
import Accounts from './Accounts';
import Navbar from './Navbar';
import refs from 'utils/refs';
import { Amazon } from 'assets/images';
import { MenuIcon } from 'assets/icons';

export default function Header() {

  return (
    <header className="z-[40] w-full sticky top-0 ">
      <section className="flex flex-wrap sm:flex-nowrap bg-amazon_blue-light items-center px-3  py-2 justify-between sm:bg-amazon_blue">
        <div className="flex items-center justify-between">
          <div
            on:click={() => {
              refs.sidebar.current.classList.replace('hidden', 'flex');
            }}
            className="sm:hidden cursor-pointer"
          >
            <MenuIcon size={36} />
          </div>
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Link to="/">
              <Img
                src={Amazon}
                className="w-24 h-7 sm:w-32 sm:h-8 cursor-pointer object-contain"
              />
            </Link>
          </div>
        </div>

        <SearchBar />
        <Accounts />
      </section>
      <Navbar />
    </header>
  );
}
