import store from "../store";

class Auth {
  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    const { auth } = store.getState();
    if (
      Object.prototype.hasOwnProperty.call(auth, "user") &&
      auth.user != null
    ) {
      return true;
    }
    return false;
  }
}

export default Auth;
