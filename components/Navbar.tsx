import { Img } from 'nixix/hoc';
import { Slider } from './Banner';
import { Location } from 'assets/icons';

export default function Navbar() {
  return (
    <>
      <section className=" h-10 flex items-center justify-between  text-white bg-amazon_blue-light box-border p-2 font-EmberBd pb-4 sm:pb-2 cursor-pointer overflow-hidden">
        <section className="h-full flex items-center">
          <div className="flex mr-5">
            <Img className='w-8 h-6 hidden sm:inline cursor-pointer mr-2' src='/assets/icons/menu.svg' />
            <p>All</p>
          </div>
          {window.innerWidth < 375 ? (
            <Slider>
              <section className="flex items-center space-x-5 font-Ember whitespace-nowrap w-full overflow-hidden">
                <p>Today's Deals</p>
                <p>Customer Service</p>
                <p>Registry</p>
                <p>Gift Cards</p>
                <p>Sell</p>
              </section>
            </Slider>
          ) : (
            <section className="flex items-center space-x-5 font-Ember whitespace-nowrap w-full overflow-hidden">
              <p>Today's Deals</p>
              <p>Customer Service</p>
              <p>Registry</p>
              <p>Gift Cards</p>
              <p>Sell</p>
            </section>
          )}
        </section>
        <p className="mr-3 hidden md:block">Shop deals in Electronics</p>
      </section>
      <section className="h-fit w-full py-3 pl-1 bg-amazon_blue-lighter text-white flex items-center cursor-pointer sm:hidden">
        <Location className="w-8 h-6 mr-1" />
        <p className="font-EmberLt text-sm">Deliver to Nigeria</p>
      </section>
    </>
  );
}
