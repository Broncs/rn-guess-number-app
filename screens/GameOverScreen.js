import React, { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = ({ rounds, userNumber, onRestart }) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    const updateImgSize = () => {
      setAvailableDeviceHeight(Dimensions.get("window").height);
      setAvailableDeviceWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", updateImgSize);

    return () => {
      Dimensions.removeEventListener("change", updateImgSize);
    };
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>O jogo acabou!</TitleText>
        <View
          style={{
            ...styles.imageContainer,
            ...{
              width: availableDeviceWidth * 0.7,
              height: availableDeviceWidth * 0.7,
              borderRadius: (availableDeviceWidth * 0.7) / 2,
              marginVertical: availableDeviceWidth / 30,
            },
          }}
        >
          <Image
            source={require("../assets/success.png")}
            // source={{
            //   uri: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/05/matterhorn-3x2.jpg",
            // }}
            fadeDuration={1000}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View
          style={{
            ...styles.resultContainer,
            ...{ marginVertical: availableDeviceHeight / 60 },
          }}
        >
          <BodyText
            style={{
              ...styles.resultText,
              ...{
                fontSize: availableDeviceHeight < 400 ? 16 : 20,
              },
            }}
          >
            Seu celular precisou de{" "}
            <Text style={styles.highlight}>{rounds}</Text> tentativas para
            acertar o numero <Text style={styles.highlight}>{userNumber}.</Text>
          </BodyText>
        </View>

        <MainButton onPress={onRestart}>JOGAR NOVAMENTE</MainButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: "black",
    overflow: "hidden",
    // marginVertical: Dimensions.get("window").height / 30, //equals to 5%  ... divide it by 40 and you'll get 2.5%
  },
  image: {
    width: "100%",
    height: "100%",
  },

  resultContainer: {
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: "center",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});
