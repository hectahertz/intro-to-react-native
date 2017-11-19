import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from '../connectors/firebase';
import Tweet from '../components/Tweet';
import Header from '../components/Header';

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
        {this.state.users[this.props.navigation.state.params.user.uid] && (
          <Header
            user={this.state.users[this.props.navigation.state.params.user.uid]}
          />
        )}
        {Object.keys(this.state.tweets).map(key => (
          <Tweet
            key={key}
            tweet={this.state.tweets[key].text}
            user={this.state.users[this.state.tweets[key].uid]}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  }
});
