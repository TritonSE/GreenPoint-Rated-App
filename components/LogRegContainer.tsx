import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import HomeScreen from "./HomeScreen";

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class LogRegContainer extends Component {
  render() {
    return <AppContainer />;
    // return <LoginScreen />;
    // return <SignUpScreen />;
  }
}
