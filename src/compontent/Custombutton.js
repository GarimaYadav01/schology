import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen")

const CustomButton = ({ label, size, onPress }) => {
  const buttonStyle = size === 'large' ? styles.btnLarge : styles.btnSmall;
  const textStyle = size === 'large' ? styles.textLarge : styles.textSmall;

  return (
    <TouchableOpacity style={[styles.btn, buttonStyle]} onPress={onPress}>
      <Text style={[styles.textinput, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    marginVertical: 10,
  },
  btnLarge: {
    borderWidth: 1,
    width: width * 0.84,
    height: height * 0.065,
    backgroundColor: "#0088CC",
    shadowColor: '#000',
    shadowOpacity: 0.4,
    elevation: Platform.OS === 'android' ? 4 : 0,
    shadowOffset: { width: 2, height: 2 },
    borderColor: "#0088CC",
    // marginVertical: height * 0.03,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20
  },
  btnSmall: {
    borderWidth: 1,
    width: width * 0.45,
    height: height * 0.065,
    backgroundColor: "#2d3194",
    shadowColor: '#000',
    shadowOpacity: 0.4,
    elevation: Platform.OS === 'android' ? 4 : 0,
    shadowOffset: { width: 2, height: 2 },
    borderColor: "#2d3194",
    marginVertical: height * 0.03,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10
  },
  textinput: {
    color: "#000000",
    fontSize: 22,
    // marginVertical: 5,
  },
  textLarge: {
    color: "#FFF",
    fontSize: 18,
    marginVertical: Platform.OS === 'android' ? height * 0.015 : height * 0.015,
    textAlign: "center",

    // padding: Platform.OS === 'android' ? 8  : 10
  },
  textSmall: {
    color: "#FFF",
    fontSize: 15,
    // padding: Platform.OS === 'android' ? 10 : 8,
    textAlign: "center",
    marginVertical: Platform.OS === 'android' ? height * 0.015 : height * 0.015,
  },
});

export default CustomButton;
