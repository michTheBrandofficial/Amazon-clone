import Order from 'components/Order';
import { For } from 'nixix/hoc';
import refs from 'utils/refs';
import { ordersList } from 'utils/stores';

export default function Orders() {
  const ordersParent = (
    <section bind:ref={refs.orders} className="mt-5 space-y-4"></section>
  );
  return (
    <main className="bg-gray-100 h-screen w-full">
      <section className="md:mx-12 mx-auto bg-white h-fit p-5 sm:p-5 font-Ember space-y-2">
        <h1 className="text-lg">Your Orders</h1>
        <hr className="border-yellow-400 border-y-1" />
        <For
          each={ordersList}
          parent={ordersParent}
          fallback={<h1>You have 0 orders</h1>}
        >
          {(order: OrderType) => {
            return <Order {...order} />
          }}
        </For>
      </section>
    </main>
  );
}
