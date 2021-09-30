import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (choosenNumber) => {
    setSelectedNumber(choosenNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setSelectedNumber(null);
  };

  let content = (
    <StartGameScreen
      onStartGame={startGameHandler}
      onGameOver={gameOverHandler}
    />
  );

  if (selectedNumber && guessRounds <= 0) {
    content = (
      <GameScreen
        userChoice={selectedNumber}
        onGameOver={{ gameOverHandler }}
      />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        guessRounds={guessRounds}
        selectedNumber={selectedNumber}
        onNewGame={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Guessing Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
