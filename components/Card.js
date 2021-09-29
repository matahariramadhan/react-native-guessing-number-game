import React from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.inputContainer, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    elevation: 6,
    marginVertical: 10,
  },
});

export default Card;
