import { callRef } from 'nixix/primitives';
import { Img } from 'nixix/hoc';
import { setCheckouts, checkouts, config } from 'utils/stores';
import { StarIcon } from 'assets/icons';
import { setCheckoutsDb } from 'apis/db';

export default function CheckoutProduct<T extends Product>(product: T) {
  const checkoutProduct = callRef<HTMLElement>(null);
  function removeFromCart() {
    setCheckouts((): CheckoutType => {
      const lastCheckoutProds = checkouts.$$__value.checkoutProducts.filter(
        (prod) => {
          // prods and checkoutProducts are both objects, so don't compare the two objects here, compare their id properties, which are strings.
          return prod.id !== product.id;
        }
      );
      let prices = lastCheckoutProds.map((lP) => Number(lP.price));
      const totalPrice =
        lastCheckoutProds.length === 0
          ? null
          : prices.reduce((oldprice, newprice): any => {
              return prices.length === 1 ? 0 + oldprice : oldprice + newprice;
            });
      return {
        checkoutProducts: lastCheckoutProds,
        numberOfProds: lastCheckoutProds.length,
        totalPrice: totalPrice === null ? 0 : +totalPrice.toFixed(2),
      };
    });

    setCheckoutsDb()

    config.amount = checkouts.$$__value.totalPrice;
  }

  return (
    <section
      className="w-fit h-fit flex flex-col items-center justify-between md:flex-row"
      bind:ref={checkoutProduct}
    >
      <Img
        src={product.image}
        style={{
          height: '200px',
          width: '200px',
        }}
        className="object-contain"
      />
      <div className="basis-1/2">
        <h4 className="my-3 font-Ember">{product.title}</h4>
        <div className="flex">
          {Array(Math.floor(product.rating.rate))
            .fill('')
            .map((_) => {
              return <StarIcon size={20} stroke='goldenrod' fill='goldenrod' />;
            })}
        </div>
        <p className="line-clamp-2 mb-3">{product.description}</p>
        <p>${product.price}</p>
      </div>
      <div
        style={{ width: '170px', height: '200px' }}
        className="flex flex-col justify-center"
      >
        <button
          className="button w-full py-3 text-sm"
          on:click={removeFromCart}
        >
          Remove from Cart
        </button>
      </div>
    </section>
  );
}
