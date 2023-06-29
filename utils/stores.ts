import Nixix from 'nixix/dom';
import { callSignal, callStore, effect } from 'nixix/primitives';
import { Router } from 'nixix/router';
import { CheckoutProduct } from 'components';
import Order from 'components/Order';
import refs from './refs';
import { Amazon } from 'assets/images';
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

export const [checkoutList, setCheckoutList] = callStore<CheckoutProduct[]>([]);
/**
 * This store is for checkouts
 */

export const [checkouts, setCheckouts] = callStore(checkout);

// refactor me
effect(() => {
  const button = refs.checkoutButton.current;
  if (checkouts.$$__value?.numberOfProds === 0) {
    button?.classList?.replace('checkout-button', 'gray-button')
    button ? button.disabled = true : null;
    setCheckoutList(checkouts.$$__value.checkoutProducts)
  } else {
    button?.classList?.contains('gray-button') ? button?.classList?.replace('gray-button', 'checkout-button') : null;
    button.disabled = false;
    setCheckoutList(checkouts.$$__value.checkoutProducts)
  }
});

/**
 * This store is for orders
 */

const order: StoreOrderType = {
  numberOfOrders: 0,
  orders: []
};
 
export const [ordersList, setOrdersList] = callStore<OrderType[]>([]);
/**
 * This store is for orders
 */

export const [orders, setOrders] = callStore(order);

// refactor me
effect(() => {
  if (orders.$$__value?.numberOfOrders === 0) {
    setOrdersList(orders.$$__value.orders)
  } else {
    setOrdersList(orders.$$__value.orders)
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