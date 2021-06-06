import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const GameOverScreen = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>O jogo acabou !</Text>
      <Text>Número de tentativa : {rounds}</Text>
      <Text>O Número era: {userNumber}</Text>
      <Button title="JOGAR NOVAMENTE" onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
