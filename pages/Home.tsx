import { Suspense } from 'nixix';
import { Banner, Header, ProductFeed, Loader } from '@components';
import { isUserLoggedIn } from '@utils/auth';

export default function Home() {
  return (
    <>
      <Header userLogged={isUserLoggedIn()} />
      <main className="md:mx-12 relative h-fit">
        <Banner />
        <div className="absolute top-96 w-full z-50">
          <Loader />
        </div>
      </main>
    </>
  );
}
