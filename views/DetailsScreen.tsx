import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View
          style={{
            height: 40,
            alignItems: "stretch",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.title}>
            {this.props.route.params.whichDetail}
          </Text>
        </View>
        <View
          style={{
            height: 120,
            alignItems: "stretch",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.placeholder}>(Progress bar goes here)</Text>
        </View>
        <View
          style={{
            height: 20,
            alignItems: "stretch",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.info}>How to qualify:</Text>
        </View>
        <View
          style={{
            height: 120,
            alignItems: "stretch",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.placeholder}>
            [ image / video / slideshow / description ]
          </Text>
        </View>
        <View
          style={{
            height: 20,
            alignItems: "stretch",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.verify}>Verify here</Text>
        </View>
        <View
          style={{
            height: 90,
            alignItems: "stretch",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.content}>
            (E.g.: To verify this measure, provide the following information and
            upload a photo of your programmable thermostat.)
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            height: 100,
            alignItems: "stretch",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: 80,
              width: 160,
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text style={styles.content}> (Text description 1) </Text>
            <TextInput
              style={{
                height: 20,
                width: 140,
                borderColor: "gray",
                borderWidth: 1,
              }}
            />
            <Text style={styles.content}> (Text description 2) </Text>
            <TextInput
              style={{
                height: 20,
                width: 140,
                borderColor: "gray",
                borderWidth: 1,
              }}
            />
          </View>
          <View
            style={{
              height: 90,
              width: 200,
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text style={styles.placeholder}>[ Upload photo component ]</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  title: {
    backgroundColor: "#f0e173",
    padding: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
  },
  header: {
    backgroundColor: "#969696",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    padding: 20,
  },
  verify: {
    backgroundColor: "#b3e87d",
    fontSize: 16,
    fontWeight: "200",
    padding: 10,
  },
  info: {
    backgroundColor: "#b8b8b8",
    fontSize: 16,
    fontWeight: "200",
    padding: 10,
  },
  placeholder: {
    textAlign: "center",
    padding: 40,
    backgroundColor: "#747474",
  },
  content: {
    padding: 10,
    backgroundColor: "#fff",
  },
});
