import React, { useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import COLORS from "../constants/colors";

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputOnChangeHandler = (inputText) => {
    setEnteredValue(inputText);
  };

  const resetHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid", "Number has to be a number between 1-99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }

    setSelectedNumber(chosenNumber);
    setConfirmed(true);
    setEnteredValue("");
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.confirmedCard}>
        <Text style={styles.confirmedTitle}>You selected</Text>
        <View style={styles.confirmedNumber}>
          <Text style={{ fontSize: 50, color: COLORS.secondary, margin: 10 }}>
            {selectedNumber}
          </Text>
        </View>
        <View style={styles.confirmedButton}>
          <Button title="START GAME" onPress={() => {}} />
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={{ fontSize: 24 }}>Start New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.title}>Choose a number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={2}
            value={enteredValue}
            onChangeText={(text) => inputOnChangeHandler(text)}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="CONFIRM"
                onPress={confirmHandler}
                color={COLORS.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="RESET"
                color={COLORS.secondary}
                onPress={resetHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    padding: 10,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  confirmedCard: {
    padding: 20,
    alignItems: "center",
  },
  confirmedTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  confirmedNumber: {
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 3,
    borderColor: COLORS.secondary,
    borderRadius: 20,
  },
  confirmedButton: {
    marginVertical: 5,
  },
});

export default StartGameScreen;
