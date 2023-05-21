import Nixix, { callStore, effect } from 'nixix';
import { Router } from 'nixix/router';
import { CheckoutProduct } from '@components';
import Order from 'components/Order';
import refs from './refs';
import { Amazon } from '@assets/images';
import { fulfillOrders } from 'apis/db';

const userNameObject: User = {
  firstName: 'Sign in',
  lastName: '',
  fullMessage: 'Hello, Sign in',
};

/**
 * This store is for authentication. To show that a user is authenticated.
 */
export const [username, setUserName] = callStore(userNameObject);


const checkout: CheckoutType = {
  checkoutProducts: [],
  numberOfProds: 0,
  totalPrice: 0
};
 
/**
 * This store is for checkouts
 */

export const [checkouts, setCheckouts] = callStore(checkout);

effect(() => {
  const button = refs.checkoutButton.current;
  if (checkouts.$$__value?.numberOfProds === 0) {
    refs.checkout.current?.replaceChildren(
      Nixix.create('h1', { className: 'text-lg border-0 pb-4 lg:text-xl' }, 'Your Shopping Basket is Empty')
    );
    button.classList.replace('checkout-button', 'gray-button')
    button.disabled = false;
  } else {
    const checkoutProds = checkouts.$$__value?.checkoutProducts.map((checkoutProd) => {
      return CheckoutProduct({...checkoutProd});
    });
    refs.checkout.current?.replaceChildren(...checkoutProds as JSX.Element[]);
    button.classList.contains('gray-button') ? button.classList.replace('gray-button', 'checkout-button') : null;
  }
});

/**
 * This store is for orders
 */

const order: StoreOrderType = {
  numberOfOrders: 0,
  orders: []
};
 
/**
 * This store is for checkouts
 */

export const [orders, setOrders] = callStore(order);

effect(() => {
  if (orders.$$__value?.numberOfOrders === 0) {
    refs.orders.current?.replaceChildren(
      Nixix.create('h1', null, 'You have 0 orders')
    );
  } else {
    const myOrders = orders.$$__value?.orders.map((order) => {
      return Order({...order});
    });
    refs.orders.current?.replaceChildren(...myOrders);
  }
});

export const config: FlutterwaveConfig = {
  public_key: 'FLWPUBK_TEST-d34804ce2f7ea462a81948aea6c4c72e-X',
  tx_ref: Date.now().toString(),
  amount: 100,
  customer: {
    email: 'michthebrand@gmail.com',
    phone_number: '08103597492',
    name: 'Charles Ikechukwu'
  },
  onClose: () => undefined,
  callback: () => {
    Router.push('/success');
    fulfillOrders();
    setCheckouts({
      checkoutProducts: [],
      numberOfProds: 0,
      totalPrice: 0
    })
  },
  payment_options: 'card,ussd',
  currency: 'USD',
  customizations: {
    title: 'Products in Cart',
    description: 'This payment is for the checkout',
    logo: Amazon
  }
}