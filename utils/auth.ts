export function isUserLoggedIn(): {} | UserLogged['userLogged'] {
  if (!localStorage.getItem('userId')) {
    return {}
  } else {
    return JSON.parse(localStorage.getItem('userId'));
  }
}