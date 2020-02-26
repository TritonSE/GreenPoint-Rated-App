import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack' 


function Home({navigation}){
  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("My Planned Improvements")}>
          <Text style={styles.text}>My Planned Improvements</Text>
        </TouchableOpacity>


          <TouchableOpacity
                    style={styles.button}

          onPress={() => navigation.navigate("Community")}>
            <Text style={styles.text}>Community</Text>

          </TouchableOpacity>

          
          <TouchableOpacity
                    style={styles.button}

          onPress={() => navigation.navigate("Indoor Air Quality")}>
            <Text style={styles.text}>Indoor Air Quality</Text>

          </TouchableOpacity>


          <TouchableOpacity
                    style={styles.button}

          onPress={() => navigation.navigate("Energy Efficiency")}>
            <Text style={styles.text}>Energry Efficiency</Text>

          </TouchableOpacity>
          
          <TouchableOpacity
                    style={styles.button}

          onPress={() => navigation.navigate("Resource Efficiency")}>
            <Text style={styles.text}>Resource Efficiency</Text>

          </TouchableOpacity>

          <TouchableOpacity
                    style={styles.button}

          onPress={() => navigation.navigate("Water Conservation")}>
            <Text style={styles.text}>Water Conservation</Text>

          </TouchableOpacity>

          <TouchableOpacity
                    style={styles.button}

          onPress={() => navigation.navigate("Finance Options")}>
            <Text style={styles.text}>Finance Options</Text>

          </TouchableOpacity>

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

export default class App extends React.Component {

  render() {
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

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10

  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    margin: 2,
    width: '100%',
    borderRadius: 10
  },
  text: {
    fontSize: 19,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  }
});
