 import { Img } from 'nixix';
import { Primeday } from '@assets/images';
import refs from '@utils/refs';
import { checkouts, config } from '@utils/stores';
import { callFlutterwave } from 'flutterwave-nixix-v3';
import random from 'random-string-generator';

export default function Checkout() {
  function makeOrders() {
    config.tx_ref = random(23);
    const fwConfig = callFlutterwave(config);
    fwConfig({ callback: config.callback, onClose: config.onClose });
  }

  return (
    <main className="md:mx-12 bg-gray-100 min-h-screen-main flex flex-col justify-between mt-5 lg:mt-0 lg:flex-row lg:min-h-fit">
      <section className="mx-5 mb-5 flex-grow shadow-sm lg:mt-5">
        <Img
          src={Primeday}
          className="object-contain"
          style={{ width: '1020', height: '250' }}
        />

        <div
          className="flex flex-col p-5 space-y-10 bg-white font-Ember"
          bind:ref={refs.checkout}
        ></div>
      </section>
      <section className="m-5 flex-1 basis-1/3 bg-white p-5 flex flex-col items-center font-Ember md:mb-5 md:mr-5 md:ml-0 md:mt-0 lg:min-w-[212px]">
        <p>
          Subtotal ({checkouts.numberOfProds} items){' '}
          <span className="font-EmberBd">${checkouts.totalPrice}</span>
        </p>
        <button className='gray-button checkout-button' bind:ref={refs.checkoutButton} on:click={makeOrders} >Proceed to Checkout</button>
      </section>
    </main>
  );
}
