import React, { Component } from 'react';
import {
  TextInput,
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class PropertyLogin extends Component {

	render() {
		return (
			<View style={styles.columnContainer}>
				<View style={styles.inputContainer}>
					<TextInput style={styles.text} placeholder='Street Address' />
				</View>
				<View style={styles.rowContainer}>
					<View style={styles.cityInputContainer}>
						<TextInput style={styles.text} placeholder='City' />
					</View>
					<View style={styles.stInputContainer}>
						<TextInput style={styles.text} placeholder='ST' />
					</View>
					<View style={styles.zipInputContainer}>
						<TextInput style={styles.text} placeholder='Zipcode' />
					</View>
				</View>
				<TouchableOpacity style={styles.submitButton}>
					<Text style={styles.buttonText} onPress={this.props.onPress}>SIGN IN TO PROPERTY</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	columnContainer: {
		flex: 0,
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '80%',
		height: '30%',
		backgroundColor: 'white',
	},
	rowContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginBottom: '4.5%',
	},
 inputContainer: {
		flex: 1,
		marginTop: '4%',
		marginBottom: '4.5%',
		paddingTop: '1%',
		position: 'relative',
		width: '90%',
		height: '13.5%',
		backgroundColor: 'white',
		borderColor: '#878787',
		borderWidth: 1.5,
		borderRadius: 8,
	},
	cityInputContainer: {
	    marginTop: '4%',
        paddingTop: '1%',
        position: 'relative',
        width: '40%',
        height: '100%',
        backgroundColor: 'white',
        borderColor: '#878787',
        borderWidth: 1.5,
        borderRadius: 6,
        marginLeft: '2%',
        marginRight: '2%',
        },
	stInputContainer: {
	    marginTop: '4%',
        paddingTop: '1%',
        position: 'relative',
        width: '20%',
        height: '100%',
        backgroundColor: 'white',
        borderColor: '#878787',
        borderWidth: 1.5,
        borderRadius: 6,
        marginLeft: '2%',
        marginRight: '2%',
        },
	zipInputContainer: {
		marginTop: '4%',
		paddingTop: '1%',
		position: 'relative',
		width: '23%',
		height: '100%',
		backgroundColor: 'white',
		borderColor: '#878787',
		borderWidth: 1.5,
		borderRadius: 6,
        marginLeft: '2%',
        marginRight: '2%',
	},
	buttonText: {
		fontSize: 14,
		fontFamily: 'Roboto',
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	submitButton: {
		flex: 1,
		marginTop: '4%',
		marginBottom: '4%',
		paddingTop: '1%',
		position: 'relative',
		width: '90%',
		height: '13.5%',
		backgroundColor: '#61ab61',
		borderColor: '#878787',
		borderWidth: 1.5,
		borderRadius: 10,
	},
 text: {
		fontSize: 14,
		fontFamily: 'Roboto',
		textAlign: 'left',
		textAlignVertical: 'center',
		flexDirection: 'row',
		marginLeft: '5%',
 },
});
