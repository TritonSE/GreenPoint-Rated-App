import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function Home({ navigation }) {
  let data = [
    { key: "0", value: "My Planned Improvements" },
    { key: "1", value: "Community" },
    { key: "2", value: "Indoor Air Quality" },
    { key: "3", value: "Energy Efficiency" },
    { key: "4", value: "Resource Efficiency" },
    { key: "5", value: "Water Conservation" },
    { key: "6", value: "Finance Options" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        extraData={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => renderOpacity(item, navigation)}
      />
    </View>
  );
}

function renderOpacity(item, navigation) {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.button, {backgroundColor: getColor(item)}])}
      onPress={() => navigation.navigate(item.value)}
    >
      <Text style={styles.text}>{item.value} </Text>
    </TouchableOpacity>
  );
}

function PlannedImprovements({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function Community({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function IndoorAirQuality({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function EnergryEfficiency({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function ResourceEfficiency({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
function WaterConservation({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function FinanaceOptions({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="My Planned Improvements"
            component={PlannedImprovements}
          />
          <Stack.Screen name="Community" component={Community} />
          <Stack.Screen
            name="Indoor Air Quality"
            component={IndoorAirQuality}
          />
          <Stack.Screen
            name="Energy Efficiency"
            component={EnergryEfficiency}
          />
          <Stack.Screen
            name="Resource Efficiency"
            component={ResourceEfficiency}
          />
          <Stack.Screen
            name="Water Conservation"
            component={WaterConservation}
          />
          <Stack.Screen name="Finance Options" component={FinanaceOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

getColor = (item) => {
	switch(item.key) {
		case "0":
			return "#a8d7ed";
		case "1":
			return "#eeeecd";
		case "2":
			return "#d1e8e7";
		case "3":
			return "#dce4cd";
		case "4":
			return "#b8b8d7";
		default:
			return "#DDDDDD";
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
    width: "100%",
    borderRadius: 5,
  },
  text: {
    fontSize: 17,
    fontFamily: "Roboto",
    fontWeight: "bold",
    flexDirection: "row",
  },
});
