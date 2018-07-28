import React, { Component } from "react";
import { View, Text } from "react-native";

class Component2 extends Component {
  static navigationOptions = {
    title: "Second Component"
  };
  render() {
    return (
      <View>
        <Text>{"Component 2"}</Text>
      </View>
    );
  }
}

export default Component2;
