import React, { Component } from "react";
import {
  TextInput,
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default class LoginScreen extends Component {
  login() {
    alert("Sumbitted");
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>User Login</Text>
        <TextInput placeholder="Username: " />
        <TextInput placeholder="Password: " />

        <Button title="submit" onPress={() => this.login()}></Button>
        <View>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text>Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
