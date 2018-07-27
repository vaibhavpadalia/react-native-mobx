import { observable, action } from "mobx";
import { observer } from "mobx-react";

class Store {
  @observable userName = "Vaibhav";

  @action
  changeName = name => {
    this.userName = name;
  };
}

const store = new Store();

export default store;
