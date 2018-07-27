import { observable, action } from "mobx";
/**
 * @param userName the value that will change in different components.
 * @description This is a class that contains store.
 */
class Store {
  @observable userName = "Vaibhav";

  /**
   * @description This function will modify the value of userName
   */

  @action
  changeName = name => {
    this.userName = name;
  };
}

// Create object of the store and then import it in different components.
const store = new Store();

export default store;
