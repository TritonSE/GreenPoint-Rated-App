import React, { Component } from "react";
import { createAppContainer } from "react-navigation";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./views/HomeScreen";

import HomeAddressSL from "./views/HomeAddressSL";
import DetailsScreen from "./views/DetailsScreen";
import SectionList from "./views/SectionList";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home Screen" component={HomeScreen} />
          <Stack.Screen name="Section List" component={SectionList} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
