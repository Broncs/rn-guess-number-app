import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card";
const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Novo Jogo!</Text>
      <Card style={styles.inputContainer}>
        <Text>Selecione um Numero</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Resetar" onPress={() => {}} />
          <Button title="confirmar" onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
