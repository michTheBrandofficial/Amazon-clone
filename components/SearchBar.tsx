import { Img } from "nixix"

export default function SearchBar() {
  return (
    <form className="order-last w-full flex  bg-yellow-400 hover:bg-yellow-500 rounded-md sm:order-none sm:mx-3 sm:flex-grow sm:hidden md:flex" >
      <input type="text" className="w-full flex-grow flex-shrink border-none pl-4 rounded-l-md focus:outline-none font-Ember " placeholder="Search Amazon" />
      <div>
        <Img src="assets/search.svg" className="h-11 w-11 p-2 cursor-pointer" />
      </div>
    </form>
  )
};
