import React, { Component } from "react";
import {
  View,
  StyleSheet,
	Image,
} from "react-native";

import PropertyLogin from "./PropertyLogin";

export default class PropertyLoginScreen extends Component {

	login() {
		alert("Submitted");
	}
	
	render() {
		return (
			<View style={styles.container} >
				<Image style={styles.logo} source={require('../assets/full-logo.png')} />
				<PropertyLogin onPress={() => this.login()} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingHorizontal: 5,
	},
	logo: {
	    marginRight: '3%',
	    marginTop: '33%',
	    marginBottom: '5%',
	    height: '28%',
	    width: '45%',
	}
});
