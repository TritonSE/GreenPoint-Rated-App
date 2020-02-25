import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack' 


function Home({navigation}){
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="My Planned Improvements"
          onPress={() => navigation.navigate("My Planned Improvements")}
          />
          <Button
          title="Community"
          onPress={() => navigation.navigate("Community")}
          />
          <Button
          title="Indoor Air Quality"
          onPress={() => navigation.navigate("Indoor Air Quality")}
          />
          <Button
          title="Energry Efficiency"
          onPress={() => navigation.navigate("Energy Efficiency")}
          />
          <Button
          title="Resource Efficiency"
          onPress={() => navigation.navigate("Resource Efficiency")}
          />
          <Button
          title="Water Conservation"
          onPress={() => navigation.navigate("Water Conservation")}
          />
          <Button
          title="Finance Options"
          onPress={() => navigation.navigate("Finance Options")}
          />
      </View>
    </View>
  )

}


function PlannedImprovements({navigation}){
  return (
    <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
          />

    </View>
  )

}

function Community({navigation}){
  return (
    <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
          />

    </View>
  )

}

function IndoorAirQuality({navigation}){
  return (
    <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
          />

    </View>
  )

}

function EnergryEfficiency({navigation}){
  return (
    <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
          />

    </View>
  )

}

function ResourceEfficiency({navigation}){
  return (
    <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
          />

    </View>
  )

}
function WaterConservation({navigation}){
  return (
    <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
          />

    </View>
  )

}

function FinanaceOptions({navigation}){
  return (
    <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
          />

    </View>
  )

}


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='My Planned Improvements' component={PlannedImprovements} />
          <Stack.Screen name='Community' component={Community} />
          <Stack.Screen name='Indoor Air Quality' component={IndoorAirQuality} />
          <Stack.Screen name='Energy Efficiency' component={EnergryEfficiency} />
          <Stack.Screen name='Resource Efficiency' component={ResourceEfficiency} />
          <Stack.Screen name='Water Conservation' component={WaterConservation} />
          <Stack.Screen name='Finance Options' component={FinanaceOptions} />
        </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonContainer: {
    margin: 10,
    padding: 10,
    width: '100%',
  }
});
