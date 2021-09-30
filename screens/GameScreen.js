import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateNumberBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndmNmbr = Math.floor(Math.random() * (max - min)) + min;
  if (rndmNmbr === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return rndmNmbr;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateNumberBetween(1, 100, props.userChoice)
  );
  const [guessRounds, setGuessRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver.gameOverHandler(guessRounds);
    }
  }, [currentGuess, props.userChoice, props.onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "Lower" && props.userChoice > currentGuess) ||
      (direction === "Greater" && props.userChoice < currentGuess)
    ) {
      Alert.alert(
        "You Wrong",
        "Please take a look at the number you input and opponent's guess",
        [{ text: "Okay", style: "cancel" }]
      );
      return;
    }

    if (direction === "Lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateNumberBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setGuessRounds((curGuess) => curGuess + 1);
  };

  return (
    <View style={styles.screen}>
      <NumberContainer selectedNumber={currentGuess} />
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, "Lower")} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "Greater")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
    padding: 20,
  },
});

export default GameScreen;
