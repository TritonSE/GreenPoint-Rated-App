import React, { Component } from "react";
import {
  TextInput,
  View,
  Button,
  Image,
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
      <View style={styles.container}>
        <View style={styles.whiteSquare}>
          <Text style={styles.header}>User Login</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.text} placeholder="Username" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.text} placeholder="Password" />
          </View>
          <LoginDrawdown type="Login as..." />
          <TouchableOpacity style={styles.finishButton}>
            <Text style={styles.buttonText} onPress={() => this.login()}>
              LOGIN
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.basicText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.boldText}>Register Here</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topBar}>
          <Image
            style={styles.logo}
            source={require("../assets/house-logo.png")}
          />
          <Text style={styles.logoText}> GreenPoint Rated </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    width: "105%",
    height: "11%",
    backgroundColor: "#61ab61",
  },
  logoText: {
    marginLeft: "5%",
    fontSize: 19,
    fontFamily: "Roboto",
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  logo: {
    marginLeft: "3%",
    marginTop: "1%",
    height: "90%",
    width: "17%",
  },
  container: {
    flex: 1,
    backgroundColor: "#f2f5ec",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 5,
    marginBottom: 25,
    marginTop: 25,
  },
  finishButton: {
    marginTop: "4%",
    marginBottom: "4%",
    paddingTop: "1%",
    position: "relative",
    width: "90%",
    height: "13.5%",
    backgroundColor: "#61ab61",
    borderColor: "#878787",
    borderWidth: 1.5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
  header: {
    fontSize: 21,
    fontFamily: "Roboto",
    color: "#61ab61",
    marginTop: "10%",
    fontWeight: "bold",
    marginBottom: "4%",
    flexDirection: "row",
  },
  inputContainer: {
    marginTop: "4%",
    paddingTop: "1%",
    position: "relative",
    width: "90%",
    height: "13.5%",
    backgroundColor: "white",
    borderColor: "#878787",
    borderWidth: 1.5,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: "Roboto",
    textAlign: "left",
    textAlignVertical: "center",
    flexDirection: "row",
    marginLeft: "5%",
  },
  basicText: {
    fontSize: 13,
    fontFamily: "Roboto",
    textAlign: "left",
    color: "black",
    textAlignVertical: "center",
    flexDirection: "row",
    marginRight: "2%",
  },
  boldText: {
    fontSize: 13,
    fontFamily: "Roboto",
    textAlign: "left",
    fontWeight: "bold",
    color: "black",
    textAlignVertical: "center",
    flexDirection: "row",
  },
  whiteSquare: {
    flex: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "80%",
    height: "60%",
    marginTop: "35%",
    backgroundColor: "white",
    borderColor: "#878787",
    borderWidth: 1.5,
    borderRadius: 10,
  },
});
