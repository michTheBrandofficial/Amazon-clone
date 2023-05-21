import moment from 'moment';

export default function Order({ amount, timestamp, images, id }: OrderType) {
  return (
    <section className="relative border rounded-sm">
      <div className="flex bg-gray-200 w-full items-center space-x-10 p-5 text-sm text-gray-600">

        <div>
          <p className="font-EmberBd text-sm">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
        </div>

        <div className='hidden ord:block' >
          <p className="text-xs font-EmberBd">TOTAL</p>
          <p>
            <span>${amount} - Next Day Delivery</span>{' '}
            <span>${amount}</span>
          </p>
        </div>

        <p className='whitespace-nowrap sm:text-lg text-sm self-end flex-1 text-right text-blue-500' >{images.length} items</p>
        <p className='absolute top-2 right-2 w-40 whitespace-nowrap lg:w-fit text-sm truncate xsm:block hidden' >ORDER id - {id}</p>
      </div>
      <div className="p-5 sm:p-10">
        <div className='flex space-x-6 overflow-x-auto' >
          {images.map(image => {
            return (
              <img src={image} className='h-20 object-contain sm:h-32' />
            )
          })}
        </div>
      </div>
    </section>
  );
}
