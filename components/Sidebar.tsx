import refs from '@utils/refs';
import { Img } from 'nixix';

localStorage.setItem('userId', JSON.stringify({
  username: {
    firstName: 'Charles',
    lastName: 'Somto'
  }
}))

export default function Sidebar({userLogged}) {
  return (
    // add hidden class to this comp
    <section
      bind:ref={refs.sidebar}
      className="w-full min-h-full flex backdrop-opacity-10 backdrop-invert bg-black/80 transition duration-700 ease-in-out absolute z-100 sm:hidden hidden"
    >
      <section className="w-10/12 min-h-full bg-white font-EmberBdLt cursor-pointer">
        <section className="w-full h-36 p-5 flex flex-col justify-between text-white bg-amazon_blue-light">
          <div className="w-full flex justify-end items-center">
            <p>{ userLogged.username === undefined ? 'Sign in' : userLogged.username.firstName }</p>
            <Img src="assets/user.svg" className="w-8 h-8" />
          </div>
          <div className="font-Ember text-xl">
            <p>Browse</p>
            <p className="text-2xl">Amazon</p>
          </div>
        </section>
        <section className="w-full h-fit p-5  flex justify-between font-EmberBd text-xl">
          <p>Amazon Home</p>
          <Img src="/assets/home.svg" className="w-7 h-7" />
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
      <div className='flex-grow h-24 flex justify-center items-center'>
        <Img src="/assets/x.svg" className="w-10 h-10 cursor-pointer" on:click={() => {
          refs.sidebar.current.classList.add('hidden');
        }} />
      </div>
    </section>
  );
}
