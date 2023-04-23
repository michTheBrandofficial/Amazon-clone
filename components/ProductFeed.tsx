import { asyncComponent, callStore,  } from "nixix"
import Product from "./Product";

export default function ProductFeed({products}) {

  return (
    <div>
      {
        
      }
    </div>
  )
};

window['dataApi'] = {id: 'Afjdjkf3i33okfdk29308fakie', productname: 'Balenciaga Brogues'};

export const fakeApi = (): Promise<{id: string, productname: string}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(window['dataApi'])
    }, 5000)
  })
};

export const DemoProductFeed = asyncComponent(async () => {
  const [products, setProducts] = callStore(await fakeApi());
  return (
    <div>
      <button on:click={() => {
        setProducts(() => {
          return {id: 'me', productname: 'memem'};
        })
      }} >Get products</button>
      { products.id }
      { products.productname }
    </div>
  )
})


