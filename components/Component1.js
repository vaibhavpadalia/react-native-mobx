import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import store from "./Store";
import { observer } from "mobx-react";

@observer
class Component1 extends Component {
  render() {
    return (
      <View>
        <Text>{"Component 1"}</Text>
        <Text>{store.userName}</Text>
        <Button title={"Click Here"} onPress={() => store.changeName("Jonas")} />
      </View>
    );
  }
}

export default Component1;
