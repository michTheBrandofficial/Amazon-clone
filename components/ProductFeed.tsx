import { asyncComponent } from "nixix"
import Product from "./Product";
import { fakeApi } from "@utils/products";

const ProductFeed = asyncComponent(async () => {
  return (
    <div>
      {
        (await fakeApi()).json().map(product => {
          return <Product {...product} />
        })
      }
    </div>
  )
})

export default ProductFeed;


