import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#964b94',
    borderRadius: 29,
    width: 120,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRightWidth: 5,
    borderBottomWidth: 5,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: 17,
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
});

const Button = ({buttonText, handleDeposit}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        handleDeposit(10000);
        alert('$10,000 deposited.');
      }}
      onLongPress={() => {
        handleDeposit(100000);
        alert('$100,000 deposited.');
      }}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;
