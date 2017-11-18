import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from '../connectors/firebase';

export default class Tweets extends React.Component {
  state = {
    users: {},
    tweets: {}
  };

  componentWillMount() {
    firebase
      .database()
      .ref('users')
      .on('value', snapshot => {
        const users = snapshot.val();
        this.setState({ users });
      });

    firebase
      .database()
      .ref('tweets')
      .on('value', snapshot => {
        const tweets = snapshot.val();
        this.setState({ tweets });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state, 0, 2)}</Text>
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
