import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class App extends React.Component {
  state = { user: '', password: '' };

  render() {
    return (
      <View style={styles.container}>
        <Entypo name="email" size={32} color="black" />
        <TextInput
          style={{ height: 40 }}
          placeholder="Enter your username"
          onChangeText={text => this.setState({ user: text })}
        />
        <Entypo name="key" size={32} color="black" />
        <TextInput
          style={{ height: 40 }}
          placeholder="Enter your passsword"
          onChangeText={text => this.setState({ password: text })}
        />
        <Text style={{ padding: 10, fontSize: 16 }}>
          {JSON.stringify(this.state, null, 2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
