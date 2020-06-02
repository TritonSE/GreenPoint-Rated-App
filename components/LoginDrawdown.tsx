import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-material-dropdown";

var DATA = [
  {
    value: "Home Owner",
  },
  {
    value: "Real estate Agent",
  },
];

export default function LoginDrawdown(props) {
  return <Dropdown dropdownOffset={{top:5}} containerStyle={styles.menu}
          rippleCentered={true}
          fontSize={14}
          inputContainerStyle={{ borderBottomColor: 'transparent' }}
          valueExtractor={({value})=> value} label={props.type} data={DATA} />;
}

const styles = StyleSheet.create({
    menu: {
        borderWidth:1,
        backgroundColor: 'white',
        borderColor:'#878787',
        width: '90%',
        height: '13.5%',
        paddingLeft: '4%',
        borderWidth: 1.5,
        borderRadius: 10,
        marginTop: '4%',
        },
});
