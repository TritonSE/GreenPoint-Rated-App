import React, { Component } from "react";
import { Button, View, Text, TouchableOpacity, FlatList } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

let DATA = [
  { key: "IndoorAir", value: "Indoor Air Quality" },
  { key: "EnergyEfficiency", value: "Energy Efficiency" },
  { key: "WaterConservation", value: "Water Conservation" },
  { key: "ResourceEfficiency", value: "ResourceE fficiency" },
  { key: "Community", value: "Community" },

  { key: "PlannedMeasures", value: "My Planned Measures" },
  { key: "ProductDirectory", value: "Product Directory" },

  //   { key: "FinanceOptions", value: "FinanceOptions" },
];

export default class Homescreen extends Component<Props> {
  renderOpacity(item, navigation) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.key)}>
        <Text>{item.value} </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <FlatList
          data={DATA}
          extraData={DATA}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => this.renderOpacity(item, navigation)}
        />
      </View>
    );
  }
}
