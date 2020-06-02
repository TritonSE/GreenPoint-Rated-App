import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

import CircularProgressBar from "./CircularProgressBar";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

let DATA = [
  { key: "IndoorAir", value: "Indoor Air Quality" },
  { key: "EnergyEfficiency", value: "Energy Efficiency" },
  { key: "WaterConservation", value: "Water Conservation" },
  { key: "ResourceEfficiency", value: "Resource Efficiency" },
  { key: "Community", value: "Community" },

  { key: "PlannedMeasures", value: "My Planned Measures" },
  { key: "ProductDirectory", value: "Product Directory" },

  //   { key: "FinanceOptions", value: "FinanceOptions" },
];

export default class Homescreen extends Component<Props> {
  renderOpacity(item, navigation) {
    return (
      <View>
        <TouchableOpacity
          style={StyleSheet.flatten([
            styles.button,
            { backgroundColor: this.getColor(item) },
          ])}
          onPress={() => navigation.navigate(item.key)}
        >
          <Text>{item.value} </Text>
        </TouchableOpacity>
      </View>
    );
  }

  getColor = (item) => {
    switch (item.key) {
      case "IndoorAir":
        return "#a8d7ed";
      case "EnergyEfficiency":
        return "#eeeecd";
      case "WaterConservation":
        return "#d1e8e7";
      case "ResourceEfficiency":
        return "#dce4cd";
      case "Community":
        return "#b8b8d7";
      default:
        return "#DDDDDD";
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View>
          <CircularProgressBar />
        </View>
        <View>
          <FlatList
            data={DATA}
            extraData={DATA}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => this.renderOpacity(item, navigation)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f5ec",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    marginBottom: 25,
    marginTop: 25,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 17,
    fontFamily: "Roboto",
    fontWeight: "bold",
    flexDirection: "row",
  },
});
