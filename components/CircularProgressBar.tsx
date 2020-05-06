import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import ProgressCircle from "react-native-progress-circle";


export default class CircularProgressBar extends Component{
    render() {
        return (
            <View style={styles.container}>
                <ProgressCircle
                    percent={30}
                    radius={50}
                    borderWidth={8}
                    color="#3399FF"
                    shadowColor="#999"
                    bgColor="#fff"
                >
                    <Text style={{ fontSize: 18 }}>{"30%"}</Text>
                </ProgressCircle>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        padding: 5
    }
});