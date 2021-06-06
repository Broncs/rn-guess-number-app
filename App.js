import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {!userNumber && <StartGameScreen onStartGame={startGameHandler} />}

      {userNumber && guessRounds <= 0 && (
        <GameScreen onGameOver={gameOverHandler} userChoice={userNumber} />
      )}
      {guessRounds > 0 && (
        <GameOverScreen
          rounds={guessRounds}
          userNumber={userNumber}
          onRestart={configureNewGameHandler}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
