import { Suspense } from 'nixix';
import { Banner, Loader, ProductFeed } from '@components';

export default function Home() {
  return (
    <main className="md:mx-12 bg-gray-100 h-fit ">
      <Banner />
      <Suspense fallback={<Loader />}>
        <ProductFeed />
      </Suspense>
    </main>
  );
}
