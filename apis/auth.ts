import Nixix from "nixix";
import { app } from "./init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { config, setCheckouts, setUserName } from "@utils/stores";
import refs from "@utils/refs";
import { getCheckouts, getOrders } from "./db";


export const auth = getAuth(app)

const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

export async function signIn() {
  if (auth.currentUser === null) {
    try {
      const _ = await signInWithPopup(auth, provider);
      statusCode: 200;
    } catch (error) {
      return {
        statusCode: 404
      };
    }
  } else {
    signOut(auth).then(_ => { statusCode: 200 }).catch(_ => { statusCode: 404 })
    return;
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    const names = user.displayName.split(' ');
    setUserName({firstName: names[0], lastName: names[1], fullMessage: `Hello, ${names[0]} ${names[1]}`});

    config.customer.email = user.email;
    config.customer.name = user.displayName;
    user.phoneNumber ? config.customer.phone_number = user.phoneNumber : delete config.customer.phone_number;
    getCheckouts()
    getOrders();
  } else {
    setUserName({
      firstName: 'Sign in',
      lastName: '',
      fullMessage: 'Hello, Sign in'
    }) 
    refs.orders.current?.replaceChildren(
      Nixix.create('h1', null, 'Please, sign in to see your orders')
    );   
    setCheckouts({
      checkoutProducts: [],
      totalPrice: 0,
      numberOfProds: 0
    })
    refs.checkout.current?.replaceChildren(
      Nixix.create('h1', { className: 'text-lg border-0 pb-4 lg:text-xl' }, 'Please, sign in to see your cart')
    );   
  }
})

export async function validateUser() {
  if (auth.currentUser === null) {
    let statusCode = await signIn().then(obj => {
      return (obj !== undefined) ? (obj as {statusCode: number}).statusCode : undefined;
    })
    if (statusCode === 404 || statusCode === undefined) {
      return false;
    }
  }
}

