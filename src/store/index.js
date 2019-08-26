import {
  configure
} from 'mobx';
import userStore from './userStore';

// 只允许 内部改变 state
configure({
  enforceActions: true
});

class Stores {
  constructor() {
    this.userStore = new userStore(this); // 用户
  }
}

// export default Stores;
export {
  userStore
}