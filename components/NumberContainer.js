import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={{ fontSize: 50, color: COLORS.secondary, margin: 10 }}>
        {props.selectedNumber}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 3,
    borderColor: COLORS.secondary,
    borderRadius: 20,
  },
});

export default NumberContainer;
