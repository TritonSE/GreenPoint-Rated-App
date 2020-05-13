import React, { Component } from "react";
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
  return <Dropdown label={props.type} data={DATA} />;
}
