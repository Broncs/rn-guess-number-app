import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>O jogo acabou !</Text>
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
