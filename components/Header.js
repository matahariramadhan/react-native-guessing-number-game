import React from "react";
import { StyleSheet, Text, View } from "react-native";

import COLORS from "../constants/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
