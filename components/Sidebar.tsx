import { X, UserIcon, HomeIcon } from '@assets/icons';
import refs from '@utils/refs';
import { username } from '@utils/stores';
import { signIn } from 'apis/auth';
import { Link } from 'nixix/router';

export default function Sidebar() {
  return (
    // add hidden class to this comp
    <section
      bind:ref={refs.sidebar}
      className="w-full min-h-full fixed backdrop-opacity-10 backdrop-invert bg-black/80 transition duration-700 ease-in-out z-50 hidden"
    >
      <section className="w-10/12 min-h-full bg-white font-EmberBdLt cursor-pointer">
        <section className="w-full h-36 p-5 flex flex-col justify-between text-white bg-amazon_blue-light">
          <div className="w-full flex justify-end items-center" on:click={signIn}>
            <p>{username.firstName}</p>
            <UserIcon  size={32} />
          </div>
          <div className="font-Ember text-xl">
            <p>Browse</p>
            <p className="text-2xl">Amazon</p>
          </div>
        </section>
        <section className="w-full h-fit p-5  flex justify-between font-EmberBd text-xl">
          <p>Amazon Home</p>
          <HomeIcon size={28} stroke='black' />
        </section>
        <section className="w-full h-fit px-5 pb-5  flex justify-between font-EmberBd text-xl">
          <Link to='/orders'>
          <p>Orders</p>
          </Link>
        </section>
        <hr className="border-2 border-gray-400" />
        <section className="w-full h-fit space-y-5 px-5 py-3 flex flex-col justify-between font-EmberBd text-xl">
          <p>Trending</p>
          <p className="font-Ember text-base">Movers & Shakers</p>
        </section>
        <hr className="border-2 border-gray-400" />
        <section className="w-full h-fit space-y-5 px-5 py-3 flex flex-col justify-between font-Ember text-base">
          <p className="font-EmberBd text-xl">Top Departments</p>
          <p>Home</p>
          <p>Health & Household</p>
          <p>Books</p>
          <p>PC</p>
          {/* <hr className='border-1' /> */}
        </section>
      </section>
      <div className="flex-grow h-24 flex justify-center items-center">
        <div className="w-fit cursor-pointer"
          on:click={() => {
            refs.sidebar.current.classList.add('hidden');
          }} >
            <X stroke='white' stroke:width={1} size={48} />
          </div>
      </div>
    </section>
  );
}
