// CustomTextInput.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ label, multiline, numberOfLines, onChange }) => (
  <TextInput
    style={styles.input}
    placeholder={label}
    multiline={multiline}
    numberOfLines={numberOfLines}
    onChangeText={onChange}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default CustomTextInput;
