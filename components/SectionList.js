import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

export default class SectionList extends Component {
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
        <Button
          title={section.content}
          color="#841584"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              whichDetail: section.whichDetail
            });
          }}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
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
    marginTop: 50
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    marginTop: 20
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
    whichDetail: 'Detail 1'
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
    whichDetail: 'Detail 2'
  },
];
