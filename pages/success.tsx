import { CheckCircleIcon } from '@assets/icons';
import { Router } from 'nixix/router';

export default function Success() {
  return (
    <main className="bg-gray-100 h-screen w-full">
      <section className="max-w-screen-lg mx-auto bg-white h-fit p-5 sm:p-8 font-EmberBd space-y-4">
        <div className="flex items-start font-Ember text-lg md:items-center">
          <CheckCircleIcon
            size={30}
            stroke="white"
            stroke:width={1.5}
            className="fill-green-500"
          />
          <h1>Thank you, your order has been confirmed!</h1>
        </div>

        <div className="flex flex-col font-Ember text-sm space-y-3">
          <p>
            Thank you for shopping with us. We'll send you a notification once
            your item has shipped. If you would like to check the status of your
            order(s), please press the line below.
          </p>

          <button className="button" on:click={() => Router.push('/orders')}>
            Go to my orders
          </button>
        </div>
      </section>
    </main>
  );
}
