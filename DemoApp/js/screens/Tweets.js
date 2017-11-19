import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Button,
  FlatList
} from 'react-native';
import { Constants } from 'expo';
import firebase from '../connectors/firebase';
import Tweet from '../components/Tweet';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Tweets extends React.Component {
  state = {
    users: {},
    tweets: {},
    tweet: ''
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

  sendTweet() {
    if (this.state.tweet.length < 1) return;
    // Get a key for a new Tweet.
    var newTweetKey = firebase
      .database()
      .ref()
      .child('tweets')
      .push().key;

    firebase
      .database()
      .ref(`/tweets/${newTweetKey}`)
      .update({
        text: this.state.tweet,
        uid: this.props.navigation.state.params.user.uid
      });

    this.setState({ tweet: '' });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" iew style={styles.container}>
        {this.state.users[this.props.navigation.state.params.user.uid] && (
          <Header
            user={this.state.users[this.props.navigation.state.params.user.uid]}
          />
        )}
        <FlatList
          data={Object.keys(this.state.tweets)
            .map(key => ({
              ...this.state.tweets[key],
              key
            }))
            .reverse()}
          renderItem={({ item }) => (
            <Tweet tweet={item.text} user={this.state.users[item.uid]} />
          )}
        />
        {this.state.users[this.props.navigation.state.params.user.uid] && (
          <Footer
            value={this.state.tweet}
            onChangeText={tweet => this.setState({ tweet })}
            onSend={this.sendTweet.bind(this)}
          />
        )}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  }
});
