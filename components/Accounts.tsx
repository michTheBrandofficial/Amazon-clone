import { Link } from 'nixix/router';
import { signIn } from 'apis/auth';
import { checkouts, username } from '@utils/stores';
import { ArrowIcon, ShopIcon, UserIcon } from '@assets/icons';

export default function Accounts() {
  return (
    <section className="min-w-32 text-white flex items-center justify-around cursor-pointer font-EmberBd mr-3 mb-3  sm:mb-0 sm:min-w-fit sm:w-0">
      <div className="hidden sm:block hover:underline mr-3" on:click={signIn}>
        <p className="font-EmberLt">{username.fullMessage}</p>
        <p className="font-EmberBd">Account & Lists</p>
      </div>

      <Link to="/orders">
        <div className="hidden hover:underline mr-3 sm:block 2xl:hidden">
          <p className="font-EmberLt">Returns</p>
          <p className="font-EmberBd">& Orders</p>
        </div>
      </Link>

      <div className="flex items-center justify-between relative min-w-full sm:w-fit sm:min-w-0 sm:items-end">
        <section
          className="w-fit cursor-pointer flex items-center justify-between sm:hidden"
          on:click={signIn}
        >
          <p className="font-Ember">{username.firstName}</p>
          <ArrowIcon className="ml-1" size={16} />
          <UserIcon className="sm:hidden" size={40} />
        </section>

        <span className="absolute top-0 right-0 bg-yellow-200 text-center text-xs rounded-full text-black w-3 sm:text-sm sm:w-5 sm:right-7">
          {checkouts.numberOfProds}
        </span>

        <Link to="/checkout">
          <ShopIcon className="sm:w-12 sm:h-12" size={40} stroke:width={1.5} />
        </Link>
        <p className="font-EmberBd hidden sm:block ">Cart</p>
      </div>
    </section>
  );
}
