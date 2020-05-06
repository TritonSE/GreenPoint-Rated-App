import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "./components/HomeScreen";
import PlannedMeasuresScreen from "./components/PlannedMeasuresScreen";
import IndoorAirScreen from "./components/IndoorAirScreen";
import CommunityScreen from "./components/CommunityScreen";
import EnergyEfficiencyScreen from "./components/EnergyEfficiencyScreen";
import ProductDirectoryScreen from "./components/ProductDirectoryScreen";
import WaterConservationScreen from "./components/WaterConservationScreen";
import ResourceEfficiencyScreen from "./components/ResourceEfficiencyScreen";

// import LoginScreen from "./components/LoginScreen";

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
  Community: {
    screen: CommunityScreen,
  },
  EnergyEfficiency: {
    screen: EnergyEfficiencyScreen,
  },
  ProductDirectory: {
    screen: ProductDirectoryScreen,
  },
  WaterConservation: {
    screen: WaterConservationScreen,
  },
  ResourceEfficiency: {
    screen: ResourceEfficiencyScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
    // return <LoginScreen />;
  }
}
