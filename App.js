import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: sections,
      activeSections: [],
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.updateSections = this.updateSections.bind(this);
  }

  updateSections(activeSections) {
    this.setState({ activeSections });
  }

  renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{section.title}</Text>
      </View>
    );
  }

  renderContent(section) {
    return (
      <View>
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Accordion
          sections={this.state.sections}
          activeSections={this.state.activeSections}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          onChange={this.updateSections}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
});

const sections = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
];
