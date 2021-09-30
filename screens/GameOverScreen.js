import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.gameOverContainer}>
      <Text>Game is over...</Text>
      <Text>The Computer guess's rounds : {props.guessRounds} </Text>
      <Text>The Number was : {props.selectedNumber}</Text>
      <Button title="NEW GAME" onPress={() => props.onNewGame()} />
    </View>
  );
};

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
