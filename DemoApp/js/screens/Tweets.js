import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
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

  render() {
    return (
      <View style={styles.container}>
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
            onChangeText={tweet => this.setState({ tweet })}
            onSend={() => console.log(this.state.tweet)}
          />
        )}
      </View>
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
