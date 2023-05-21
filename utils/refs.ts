import { callRef } from "nixix";

export default {
  sidebar: callRef<HTMLElement>(),
  slider: callRef<HTMLElement>(),
  navbar: callRef<HTMLElement>(),
  password: callRef<HTMLInputElement>(),
  emailAndPassword : callRef<HTMLFormElement>(),
  checkout: callRef<HTMLDivElement>() as Nixix.MutableRefObject<HTMLDivElement>,
  checkoutButton: callRef<HTMLButtonElement>() as Nixix.MutableRefObject<HTMLButtonElement>,
  notification: callRef<HTMLElement>(),
  orders: callRef<HTMLElement>()
}