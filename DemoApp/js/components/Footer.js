import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Footer = ({ onChangeText, onSend }) => {
  return (
    <View style={styles.container}>
      <TextInput
        underlineColorAndroid="transparent"
        selectTextOnFocus
        style={styles.input}
        placeholder="Send a live tweet!"
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onSend}>
        <Entypo name="feather" size={24} color="#0084B4" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#F0F0F0'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    flex: 1,
    height: 40
  }
});
