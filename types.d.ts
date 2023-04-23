export {}

declare global {
  interface Window {
    '$$__routeProvider': HTMLElement;
  } 
  interface UserLogged extends object {
    'userLogged'?: {
      'username'?: {
        firstName?: string;
        lastName?: string;
      };
    };
  }
}