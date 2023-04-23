import { Img, callSignal } from "nixix";

export default function Product({id, title, price, description, category, image}) {
  const [rating] = callSignal(3);
  return (
    <section>
      <p>{category}</p>
      <Img src={image} height={200} width={200} className="object-contain" />
      <h4>{title}</h4>
      
      {/* continue tomorrow */}
      <div className="flex">
        {
          Array(rating.value)
          // @ts-ignore
          .fill()
          .map(_ => {
            return <Img className="h-5 w-5" src="assets/star.svg" />
          })
        }
      </div>
    </section>
  )
};
