/**
 * @author Vaibhav Padalia
 */

import { createStackNavigator } from "react-navigation";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

export default (App = createStackNavigator({
  Component1: { screen: Component1 },
  Component2: { screen: Component2 },
  Component3: { screen: Component3 }
}));
