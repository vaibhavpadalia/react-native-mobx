import React, { Component } from "react";
import { View, Text } from "react-native";

class Component3 extends Component {
  static navigationOptions = {
    title: "Third Component"
  };
  render() {
    return (
      <View>
        <Text>{"Component 3"}</Text>
      </View>
    );
  }
}

export default Component3;
