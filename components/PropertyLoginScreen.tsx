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
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingHorizontal: 5,
		marginBottom: 50,
		marginTop: 150,
	},
	logo: {
		marginLeft: '3%',
		marginTop: '1%',
	}
});
