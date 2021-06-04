import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#f7287b",
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});
