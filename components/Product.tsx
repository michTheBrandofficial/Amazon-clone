import { PrimeTag } from '@assets/images';
import { StarIcon } from '@assets/icons';
import { Img } from 'nixix';
import { checkouts, config, setCheckouts } from '@utils/stores';
import { validateUser } from 'apis/auth';
import { setCheckoutsDb } from 'apis/db';

export default function Product(product: Prettify<Product>) {
  async function addToCart() {
    if ((await validateUser()) === false) return;

    setCheckouts((): CheckoutType => {
      const checkoutProducts = checkouts.$$__value.checkoutProducts;
      let ids = checkoutProducts.map((cP) => cP.id);
      if (ids.includes(product.id)) return checkouts.$$__value;
      checkoutProducts.push(product);
      let prices = checkoutProducts.map((lP) => Number(lP.price));
      const totalPrice = prices.reduce((oldprice, newprice): any => {
        return prices.length === 1 ? 0 + oldprice : oldprice + newprice;
      });
      return {
        checkoutProducts,
        numberOfProds: checkoutProducts.length,
        totalPrice: +totalPrice.toFixed(2),
      };
    });

    setCheckoutsDb();

    config.amount = checkouts.$$__value.totalPrice;
  }

  return (
    <section className="relative flex mx-5 mt-5 flex-col z-20 box-border bg-white px-5 py-10 sm:px-10 sm:mx-0 md:mt-0">
      <p className="absolute top-2 right-2 w-fit font-Ember">
        {product.category}
      </p>

      <Img
        src={product.image}
        style={{
          height: '200px',
          width: '200px',
        }}
        className="self-center object-contain"
      />

      <h4 className="my-3 font-Ember">{product.title}</h4>

      <div className="flex">
        {Array(Math.floor(product.rating.rate))
          .fill('')
          .map((_) => {
            return <StarIcon size={20} stroke='goldenrod' fill='goldenrod' />;
          })}
      </div>

      <p className="font-Ember mt-2 line-clamp-2">{product.description}</p>
      <div>
        <p className="text-lg font-Ember">{'$' + product.price}</p>
      </div>

      {Math.floor(product.rating.rate) >= 4 && (
        <div className="flex items-center space-x-2 mt-3">
          <Img src={PrimeTag} className="w-12" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="button mt-auto" on:click={addToCart}>
        Add to Cart
      </button>
    </section>
  );
}
