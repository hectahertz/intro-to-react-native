import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Tweet = ({ tweet, user }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.column}>
        <View style={styles.title}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>{`@${user.username}`}</Text>
        </View>
        <Text style={styles.tweet}>{tweet}</Text>
      </View>
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#A0A0A0'
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24
  },
  column: {
    marginLeft: 16,
    marginRight: 32,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  username: {
    marginLeft: 8,
    fontSize: 15,
    color: '#AAAAAA'
  },
  tweet: {
    fontSize: 15,
    color: '#333333'
  }
});
