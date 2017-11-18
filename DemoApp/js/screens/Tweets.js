import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Tweets extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text>Tweets!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
