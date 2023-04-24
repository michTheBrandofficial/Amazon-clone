export {}

declare global {
  interface Window {
    '$$__routeProvider': HTMLElement;
    'dataApi': {
      json(): Products[]
    }
  } 
  interface UserLogged extends object {
    'userLogged'?: {
      'username'?: {
        firstName?: string;
        lastName?: string;
      };
    };
  }
  interface Products {
    id: string,
    title: string,
    price: string,
    description: string,
    category: string,
    image: string
  }
}