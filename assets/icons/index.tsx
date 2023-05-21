import { type DataType } from 'csstype';
import { type CSSProperties } from 'nixix-types';

interface IconOptions {
  stroke?: DataType.NamedColor;
  'stroke:width'?: number;
  size?: number;
  className?: string;
  fill?: DataType.NamedColor;
  style?: Prettify<CSSProperties>;
}

export function X(props: IconOptions): Nix.Element {
  // @ts-ignore
  return document.createRange().createContextualFragment(/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='${
      props['stroke:width'] ? props['stroke:width'] : 1
    }' stroke=${props.stroke ? props.stroke : 'white'} width='${
    props.size
  }px' height='${props.size}px' class=${
    props.className ? props.className : 'svgI'
  } fill=${props.fill ? props.fill : 'none'}  >
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`);
}

export function Location(props: IconOptions): Nix.Element {
  // @ts-ignore
  return document.createRange().createContextualFragment(/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='${
      props['stroke:width'] ? props['stroke:width'] : 1
    }' stroke=${props.stroke ? props.stroke : 'white'} width='${
    props.size
  }px' height='${props.size}px' class=${
    props.className ? props.className : 'svgI'
  } fill=${props.fill ? props.fill : 'none'}  >
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>`);
}

export function HomeIcon(props: IconOptions): Nix.Element {
  // @ts-ignore
  return document.createRange().createContextualFragment(/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='${
      props['stroke:width'] ? props['stroke:width'] : 1
    }' stroke=${props.stroke ? props.stroke : 'white'} width='${
    props.size
  }px' height='${props.size}px' class=${
    props.className ? props.className : 'svgI'
  } fill=${props.fill ? props.fill : 'none'}  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>`);
}

export function MenuIcon(props: IconOptions): Nix.Element {
  // @ts-ignore
  return document.createRange().createContextualFragment(/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='${
      props['stroke:width'] ? props['stroke:width'] : 1
    }' stroke=${props.stroke ? props.stroke : 'white'} width='${
    props.size
  }px' height='${props.size}px' class=${
    props.className ? props.className : 'svgI'
  } fill=${props.fill ? props.fill : 'none'}  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>`);
}

export function ShopIcon(props: IconOptions): Nix.Element {
  // @ts-ignore
  return document.createRange().createContextualFragment(/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='${
      props['stroke:width'] ? props['stroke:width'] : 1
    }' stroke=${props.stroke ? props.stroke : 'white'} width='${
    props.size
  }px' height='${props.size}px' class=${
    props.className ? props.className : 'svgI'
  } fill=${props.fill ? props.fill : 'none'}  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>`);
}
export function StarIcon(props: IconOptions): Nix.Element {
  // @ts-ignore
  return document.createRange().createContextualFragment(/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='${
      props['stroke:width'] ? props['stroke:width'] : 1
    }' stroke=${props.stroke ? props.stroke : 'white'} width='${
    props.size
  }px' height='${props.size}px' class=${
    props.className ? props.className : 'svgI'
  } fill=${props.fill ? props.fill : 'none'}  >
    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
</svg>`);
}
export function UserIcon(props: IconOptions): Nix.Element {
  // @ts-ignore
  return document.createRange().createContextualFragment(/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='${
      props['stroke:width'] ? props['stroke:width'] : 1
    }' stroke=${props.stroke ? props.stroke : 'white'} width='${
    props.size
  }px' height='${props.size}px' class=${
    props.className ? props.className : 'svgI'
  } fill=${props.fill ? props.fill : 'none'}  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>`);
}
export function ArrowIcon(props: IconOptions): Nix.Element {
  // @ts-ignore
  return document.createRange().createContextualFragment(/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='${
      props['stroke:width'] ? props['stroke:width'] : 1
    }' stroke=${props.stroke ? props.stroke : 'white'} width='${
    props.size
  }px' height='${props.size}px' class=${
    props.className ? props.className : 'svgI'
  } fill=${props.fill ? props.fill : 'none'}  >
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>`);
}
export function SearchIcon(props: IconOptions): Nix.Element {
  // @ts-ignore
  return document.createRange().createContextualFragment(/*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='${
      props['stroke:width'] ? props['stroke:width'] : 1
    }' stroke=${props.stroke ? props.stroke : 'white'} width='${
    props.size
  }px' height='${props.size}px' class=${
    props.className ? props.className : 'svgI'
  } fill=${props.fill ? props.fill : 'none'}  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>`);
}

export function CheckCircleIcon(props: IconOptions): Nix.Element {
  // @ts-ignore
  return document.createRange()
    .createContextualFragment(/*html*/ `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='${
      props['stroke:width'] ? props['stroke:width'] : 1
    }' stroke=${props.stroke ? props.stroke : 'white'} width='${
    props.size
  }px' height='${props.size}px' class=${
    props.className ? props.className : 'svgI'
  } fill=${props.fill ? props.fill : 'none'}  >
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`);
}
