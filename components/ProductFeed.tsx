import { asyncComponent } from "nixix"
import Product from "./Product";
import { fakeApi } from "@utils/products";

const ProductFeed = asyncComponent(async () => {
  return (
    <div className="text-black box-border md:grid gap-5 pt sm:px-5 md:grid-flow-row-dense md:mx-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full bg-transparent z-20 lg:-mt-52" >
      {
        (await fakeApi()).map(product => {
          return <Product {...product} />
        })
      }
    </div>
  )
})

export default ProductFeed;


