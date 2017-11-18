import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import firebase from '../connectors/firebase';

export default class Login extends React.Component {
  state = { user: 'user1@demo.com', password: 'password' };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.headerContainer}>
          <Entypo name="twitter" size={80} color="#1DCAFF" />
          <Text style={styles.header}>See what’s happening.</Text>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Entypo name="email" size={16} color="#0084B4" />
            <TextInput
              underlineColorAndroid="transparent"
              selectTextOnFocus
              style={styles.input}
              placeholder="Enter your username"
              onChangeText={text => this.setState({ user: text })}
            />
          </View>
          <View style={styles.row}>
            <Entypo name="key" size={16} color="#0084B4" />
            <TextInput
              underlineColorAndroid="transparent"
              selectTextOnFocus
              style={styles.input}
              secureTextEntry={true}
              placeholder="Enter your passsword"
              onChangeText={text => this.setState({ password: text })}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button
            onPress={async () => {
              try {
                const user = await firebase
                  .auth()
                  .signInWithEmailAndPassword(
                    this.state.user,
                    this.state.password
                  );
                navigate('Tweets', { user });
              } catch (error) {
                console.warn(error);
              }
            }}
            title="Login"
            color="#0084B4"
            accessibilityLabel="Login"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 64,
    paddingHorizontal: 24
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    marginLeft: 32,
    fontSize: 34,
    fontWeight: 'bold'
  },
  inputBox: {
    flex: 2,
    alignSelf: 'stretch',
    marginLeft: 24
  },
  row: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    paddingRight: 24,
    borderBottomWidth: 1,
    borderColor: '#C0DEED'
  },
  button: {
    marginBottom: 16
  }
});
