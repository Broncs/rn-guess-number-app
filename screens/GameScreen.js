import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, rounds, userChoice]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "menor" && currentGuess < userChoice) ||
      (direction === "maior" && currentGuess > userChoice)
    ) {
      Alert.alert("Não minta !", "Você sabe que está errado...", [
        { text: "Desculpe", style: "cancel" },
      ]);
      return;
    }

    if (direction === "menor") {
      currentHigh.current = currentGuess;
    }
    if (direction === "maior") {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((cur) => cur + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Palpite do oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="ABAIXO" onPress={nextGuessHandler.bind(this, "menor")} />
        <Button title="ACIMA" onPress={nextGuessHandler.bind(this, "maior")} />
      </Card>
    </View>
  );
};

export default GameScreen;

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
  },
});
