import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "./components/HomeScreen";
import PlannedMeasuresScreen from "./components/PlannedMeasuresScreen";
import IndoorAirScreen from "./components/IndoorAirScreen";
import CommunityScreen from "./components/CommunityScreen";
import EnergyEfficiencyScreen from "./components/EnergyEfficiencyScreen";
// import from "./components/
// import IndoorAirScreen from "./components/

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  PlannedMeasures: {
    screen: PlannedMeasuresScreen,
  },
  IndoorAir: {
    screen: IndoorAirScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
