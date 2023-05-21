import { SearchIcon } from '@assets/icons';

export default function SearchBar() {
  return (
    <form className="order-last w-full flex  bg-yellow-400 hover:bg-yellow-500 rounded-md sm:order-none sm:mx-3 sm:flex-grow sm:hidden md:flex">
      <input
        type="text"
        className="w-full flex-grow flex-shrink border-none pl-4 rounded-l-md focus:outline-none font-Ember "
        placeholder="Search Amazon"
      />
      <div className='cursor-pointer' >
        <SearchIcon className='p-2' size={44} stroke='black' stroke:width={2} />
      </div>
    </form>
  );
}
