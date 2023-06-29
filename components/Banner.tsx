import { Books, PrimeVideo, Promo } from 'assets/images';
import { callRef, effect } from 'nixix/primitives';
import { Img } from 'nixix/hoc';
import Embla from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

export function Slider({ children, autoPlay }: {autoPlay?: number } & JSX.IntrinsicAttributes) {
  const ref = callRef<HTMLElement>();
  effect(() => {
    Embla(ref.current, { loop: true }, (typeof autoPlay === 'number') ? [Autoplay({delay: autoPlay})] : undefined);
  }, 'once');
  return (
    <section style={{ overflow: 'hidden' }} bind:ref={ref}>
      {children}
    </section>
  );
}

export default function Banner() {
  return (
    <section className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10" />
      <Slider autoPlay={3000} >
        <ul className="flex">
          {[Promo, PrimeVideo, Books].map((banner) => {
            return (
              <li className="flex-[0_0_100%]">
                <Img src={banner} loading="lazy" />
              </li>
            );
          })}
        </ul>
      </Slider>
    </section>
  );
}
