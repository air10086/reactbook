import {
  observable,
  action
} from 'mobx';
import Cookies from 'js-cookie';
class UserStore {
  @observable loginState;
  @observable user;



  @action
  checkIfLogin = () => {
    const userId = Cookies.get('userId');
    const userImg = Cookies.get('userImg');
    const username = Cookies.get('username');
    if (userId) {
      this.loginState = true;
      this.user = {
        userId: userId,
        userImg: userImg,
        username: username
      }

    } else {
      this.loginState = false;
      this.user = {};
    }
    return this.loginState;
  }

  @action
  reset = () => {
    this.loginState = false;
    this.user = {};
    Cookies.remove('userId');
    Cookies.remove('userImg');
    Cookies.remove('username');
  }

}



// export default UserStore;
const userStore = new UserStore(this);

export default userStore;
export {
  UserStore
};