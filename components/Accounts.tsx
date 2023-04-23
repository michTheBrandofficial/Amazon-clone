import { Img } from "nixix"

export default function Accounts({userLogged}: UserLogged) {
  return (
    <section className="min-w-32 text-white flex items-center justify-around cursor-pointer font-EmberBd mr-3 mb-3  sm:mb-0 sm:min-w-fit sm:w-0">

      <div className="hidden sm:block hover:underline mr-3 2xl:hidden">
        <p className="font-EmberLt">Helllo
          {userLogged.username === undefined ? ' sign in' : ` ${userLogged.username.firstName} ${userLogged.username.lastName}`}
        </p>
        <p className="font-EmberBd">Account & Lists</p>
      </div>
    
      <div className="hidden hover:underline mr-3 sm:block 2xl:hidden">
        <p className="font-EmberLt">Returns</p>
        <p className="font-EmberBd">& Orders</p>
      </div>

      <div className="flex items-center justify-between relative min-w-full sm:w-fit sm:min-w-0 sm:items-end">
        <section className="w-fit cursor-pointer flex items-center justify-between sm:hidden" >
          <p className="font-Ember" >{ userLogged.username === undefined ? 'Sign in' : userLogged.username.firstName }</p>
          <Img  src="assets/arrow.svg" className="w-2 h-2 ml-1" />
          <Img src="assets/user.svg"  className="w-10 h-10  sm:hidden" />
        </section>

        <span className="absolute top-0 right-0 bg-yellow-200 text-center text-xs rounded-full text-black w-3 sm:text-sm sm:w-5 sm:right-7">0</span>
    
        <Img src="assets/shop.svg" className="w-10 h-10  sm:w-12 sm:h-12" />
        <p className="font-EmberBd hidden sm:block ">Cart</p>
      </div>
    </section>
  )
}