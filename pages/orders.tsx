import refs from "@utils/refs";

export default function Orders() {
  return (
    <main className="bg-gray-100 h-screen w-full">
      <section className="md:mx-12 mx-auto bg-white h-fit p-5 sm:p-5 font-Ember space-y-2">

        <h1 className="text-lg" >Your Orders</h1>
        <hr className="border-yellow-400 border-y-1" />
        <section bind:ref={refs.orders} className="mt-5 space-y-4" >
        </section>

      </section>
    </main>
  )
};
