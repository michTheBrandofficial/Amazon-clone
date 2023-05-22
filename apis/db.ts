import { collection, doc, getFirestore, setDoc, serverTimestamp, getDoc, getDocs, addDoc, updateDoc,  } from 'firebase/firestore';
import init from './init';
import { auth } from './auth';
import { checkouts, config, setOrders, setCheckouts } from '@utils/stores';

const db = getFirestore(init());
export default db;

export const userCollectionRef = collection(db, "users");

export async function getCheckouts() {

  const userCheckoutsDoc = doc(db, `${userCollectionRef.path}/${auth.currentUser.email}`);

  const dbCheckouts: CheckoutType =  await getDoc(userCheckoutsDoc).then(doc => {
    return { ...doc.data() } as CheckoutType
  });
  
  setCheckouts((): CheckoutType => {
    let checkoutProducts = dbCheckouts.checkoutProducts;
    let prices = (checkoutProducts.length === 0) ? null : checkoutProducts.map((lP) => Number(lP.price));
    const totalPrice = (prices === null) ? 0 : prices.reduce((oldprice, newprice): any => {
      return prices.length === 1 ? 0 + oldprice : oldprice + newprice;
    });
    return {
      checkoutProducts,
      numberOfProds: checkoutProducts.length,
      totalPrice: +totalPrice.toFixed(2),
    };
  });

  config.amount = checkouts.$$__value.totalPrice;
}

export async function setCheckoutsDb() {
  const userCheckoutsDoc = doc(db, `${userCollectionRef.path}/${auth.currentUser.email}`);

  setDoc(userCheckoutsDoc, checkouts.$$__value);
}

export function getOrdersObj(checkout: Nixix.StoreObject<CheckoutType>) {
  const order: OrderType = {};
  order.amount = checkout.$$__value.totalPrice;
  order.images = checkout.$$__value.checkoutProducts.map(checkoutProd => {
    return checkoutProd.image;
  })
  order.timestamp = serverTimestamp()
  order.id = config.tx_ref;
  return order;
}

export async function getOrders() {
  const parent = `${userCollectionRef.path}/${auth.currentUser.email}`;
  doc(db, parent);
  const userOrdersCollection = collection(db, `${parent}/orders`);
  const finalOrders = await getDocs(userOrdersCollection).then((doc) => {
    return doc.docs.map(orderDoc => {
      return { ...orderDoc.data() }
    })
  });
  
  setOrders((): StoreOrderType => {
    const order: StoreOrderType = {
      numberOfOrders: 0,
      orders: []
    }

    order.orders.push(...finalOrders);
    order.numberOfOrders = order.orders.length;

    return order
  })
}

export async function fulfillOrders() {
  const parent = `${userCollectionRef.path}/${auth.currentUser.email}`;
  doc(db, parent);
  collection(db, `${parent}/orders`);
  const lastDoc = doc(db, `${parent}/orders/${config.tx_ref}`);
  await setDoc(lastDoc, getOrdersObj(checkouts))
  getOrders()
  setCheckoutsDb();
}
