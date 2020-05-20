import React, { Component } from "react";
import {
  TextInput,
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

import LoginDrawdown from "./LoginDrawdown";

export default class LoginScreen extends Component<Props> {
  login() {
    alert("Sumbitted");
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>User Login</Text>
        <TextInput placeholder="Username: " />
        <TextInput placeholder="Password: " />

        <LoginDrawdown type="Login as..." />
        <Button title="submit" onPress={() => this.login()}></Button>

        <View>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text>Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
