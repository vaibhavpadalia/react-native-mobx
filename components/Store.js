import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class Store {
  @observable userData = [];
}
