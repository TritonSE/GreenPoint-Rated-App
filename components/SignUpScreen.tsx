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

export default class SignUpScreen extends Component<Props> {
  login() {
    alert("Sumbitted");
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>User Sign-Up</Text>
        <TextInput placeholder="Username: " />
        <TextInput placeholder="Password: " />

        <LoginDrawdown type="Sign-up as..." />
        <Button title="submit" onPress={() => this.login()}></Button>
        <View>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
