import { Banner, Header, ProductFeed } from '@components';
import { isUserLoggedIn } from '@utils/auth';
import { getProducts } from '@utils/products';
import { DemoProductFeed } from 'components/ProductFeed';
import { callRef, callSignal, effect, Suspense } from 'nixix';

export default function Home() {
  const [set, get] = callSignal(0);
  return (
    <>
      <Header userLogged={isUserLoggedIn()} />
      <main className='md:mx-12' >
        <Suspense fallback={<Loader />} >
          <DemoProductFeed />
        </Suspense>
      </main>
    </>
  );
}

function Loader() {
  return (
    <div className='w-10 h-10 border-4 rounded-full border-y-emerald-300 animate-spin' ></div>
  )
}








