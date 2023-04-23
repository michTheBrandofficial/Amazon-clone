import { Amazon } from '@assets/images';
import { Img } from 'nixix';
import SearchBar from './SearchBar';
import Accounts from './Accounts';
import Navbar from './Navbar';
import refs from '@utils/refs';



export default function Header({
  userLogged
}: {userLogged: UserLogged['userLogged']}) {
  return (
    <header>
      <section className="flex flex-wrap sm:flex-nowrap bg-amazon_blue-light items-center px-3  py-2 justify-between sm:bg-amazon_blue">
        <div className='flex items-center justify-between' >
          <Img
            src="assets/menu.svg"
            className="w-8 h-9 sm:hidden cursor-pointer"
            on:click={() => {
              refs.sidebar.current.classList.remove('hidden') 
            }}
          />
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Img
              src={Amazon}
              className="w-24 h-7 sm:w-32 sm:h-8 cursor-pointer object-contain"
            />
          </div>
        </div>

        <SearchBar />
        <Accounts userLogged={userLogged} />
      </section>

      <Navbar />
    </header>
  );
}
