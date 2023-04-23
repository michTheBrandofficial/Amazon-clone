export async function getProducts() {
  // const products = await fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json())

  const prods = await JSON.parse(localStorage.getItem('products'));

  // localStorage.setItem('products', JSON.stringify(products))
  return JSON.parse(localStorage.getItem('products'));
}