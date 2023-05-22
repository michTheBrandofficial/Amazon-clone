import { FlutterWaveTypes } from 'flutterwave-nixix-v3';
export {};

declare global {
  interface Window {
    $$__routeProvider: HTMLElement;
    dataApi: {
      json(): Products[];
    };
  }
  interface User {
    firstName: string;
    lastName: string;
    fullMessage?: string;
  }
  interface Product {
    id?: string;
    title: string;
    price: string;
    description: string;
    category?: string;
    image: string;
    rating?: {
      rate: number;
      count: number;
    }
  }
  interface CheckoutProduct extends Product {
    id?: string;
    title: string;
    price: string;
    description: string;
    category?: string;
    image: string;
  }

  interface CheckoutType {
    checkoutProducts: CheckoutProduct[];
    numberOfProds: number;
    totalPrice: number;
  }

  interface StoreOrderType {
    orders: OrderType[];
    numberOfOrders: number;
  }

  interface OrderType {
    amount?: number,
    images?: Array<string>,
    timestamp?: any,
    id?: string;
  }

  type Prettify<T> = {
    [K in keyof T]: T[K]
  } & {};

  namespace Nix {
    interface Element extends JSX.Element {}  
  }

  interface FlutterwaveConfig extends FlutterWaveTypes.FlutterwaveConfig, FlutterWaveTypes.InitializeFlutterwavePayment {}

} 
