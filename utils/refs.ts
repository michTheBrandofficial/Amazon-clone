import { type MutableRefObject, callRef } from "nixix/primitives";

export default {
  sidebar: callRef<HTMLElement>(),
  slider: callRef<HTMLElement>(),
  navbar: callRef<HTMLElement>(),
  password: callRef<HTMLInputElement>(),
  emailAndPassword : callRef<HTMLFormElement>(),
  checkout: callRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>,
  checkoutButton: callRef<HTMLButtonElement>() as MutableRefObject<HTMLButtonElement>,
  notification: callRef<HTMLElement>(),
  orders: callRef<HTMLElement>()
}