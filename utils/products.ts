
export const fakeApi = async (): Promise<Product[]> => {
  const products = await fetch('https://fakestoreapi.com/products').then(res => {
    return res.json();
  }).catch(err => {
    return err;
  });

  if (localStorage.getItem('products') === null || localStorage.getItem('products') === '{}') {
    localStorage.setItem('products', JSON.stringify(products));
  }

  return JSON.parse(localStorage.getItem('products'));
};