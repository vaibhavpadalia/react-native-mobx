import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import store from "./Store";
import { observer } from "mobx-react";

@observer
class Component1 extends Component {
  static navigationOptions = {
    title: "First Component"
  };
  render() {
    return (
      <View>
        <Text style={{ margin: 20 }}>{"Component 1"}</Text>
        <Text style={{ margin: 20 }}>{store.userName}</Text>
        <View style={{ margin: 20 }}>
          <Button title={"Change Name"} onPress={() => store.changeName("Jonas")} />
        </View>
        <View style={{ margin: 20 }}>
          <Button title={"Navigate To"} onPress={() => this.props.navigation.navigate("Component2")} />
        </View>
      </View>
    );
  }
}

export default Component1;
