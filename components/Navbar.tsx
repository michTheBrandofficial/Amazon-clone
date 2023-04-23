import { Img } from "nixix";

export default function Navbar() {
  return (
    <>
      <section className="min-w-fit h-10 flex items-center justify-between  text-white bg-amazon_blue-light box-border p-2 font-EmberBd pb-4 sm:pb-2 cursor-pointer" >
        <section className="h-full flex items-center" >
          <div className="flex mr-5" >
            <Img src="assets/menu.svg" className="w-8 h-6 hidden sm:inline-block cursor-pointer" />
            <p>All</p>
          </div>
          <section className="flex items-center space-x-5 font-Ember whitespace-nowrap overflow-x-scroll sm:overflow-hidden" >
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p>
          </section>
        </section>
        <p className="mr-3 hidden md:block" >Shop deals in Electronics</p>
      </section>
      <section className="h-fit w-full py-3 pl-1 bg-amazon_blue-lighter text-white flex items-center cursor-pointer sm:hidden" >
        <Img src="assets/loc.svg" className="w-8 h-6 mr-1" />
        <p className="font-EmberLt text-sm" >Deliver to Nigeria</p>
      </section>
    </>
  )
};
