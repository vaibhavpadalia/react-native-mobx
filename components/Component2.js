import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import store from "./Store";
import { observer } from "mobx-react";

@observer
class Component2 extends Component {
  static navigationOptions = {
    title: "Second Component"
  };
  render() {
    return (
      <View>
        <Text style={{ margin: 20 }}>{"Component 2"}</Text>
        <Text style={{ margin: 20 }}>{store.userName}</Text>
        <View style={{ margin: 20 }}>
          <Button title={"Change Name"} onPress={() => store.changeName("Vaibhav")} />
        </View>
      </View>
    );
  }
}

export default Component2;
