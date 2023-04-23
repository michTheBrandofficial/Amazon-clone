import { Books, PrimeVideo, Promo } from '@assets/images';
import { Img } from 'nixix';
import Embla from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import refs from '@utils/refs';

async function Slider() {
  await Promise.resolve();
  let emblaApi = Embla(refs.slider.current, { loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  console.log(emblaApi.slideNodes());
}

export default function Banner() {
  return (
    <section className='relative' >
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />  
      <section className="overflow-hidden" bind:ref={refs.slider}>
        <ul className="flex">
          {[Promo, PrimeVideo, Books].map((banner) => {
            return (
              <li className="flex-[0_0_100%]">
                <Img src={banner} loading="lazy" />
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
