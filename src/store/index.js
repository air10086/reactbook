import { configure } from 'mobx';
import UserStore from './user';

// 只允许 内部改变 state
configure({ enforceActions: true });

class Store {
  constructor() {
    this.userStore = new UserStore(this); // 用户
  }
}

export default Store;
