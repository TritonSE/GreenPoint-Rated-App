import React, { Component } from 'react';
import { SectionList, Text, StyleSheet } from 'react-native';

const sections = [
  {
    title: 'Basic Components',
    data: ["sup", "ok"],
  },
  {
    title: 'List Components',
    data: ["bub", "blah"],
  }
]


export default class HomeAddressSL extends Component {
  constructor(props) {
    super(props);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item}) {
    return (
      <Text style={styles.row}>
        {item}
      </Text>
    )
  }

  renderSectionHeader({section}) {
    return (
      <Text style={styles.header}>
        {section.title}
      </Text>
    )
  }

  render() {
    return (
      <SectionList
        style={styles.container}
        sections={sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={(item, index) => item}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
})
