import React, { Component } from "react";
import {
  TextInput,
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import LoginDrawdown from "./LoginDrawdown";

export default class SignUpScreen extends Component {
  login() {
    alert("Sumbitted");
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>User Login</Text>
        <TextInput placeholder="Username: " />
        <TextInput placeholder="Password: " />

        <LoginDrawdown type="Sign-up as..." />
        <Button title="submit" onPress={() => this.login()}></Button>
        <View>
          <Text>Already have an account?</Text>
          <TouchableOpacity>
            <Text>Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
