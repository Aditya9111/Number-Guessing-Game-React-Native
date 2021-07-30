import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          resizeMode="cover"
          style={styles.image}
          source={require("../assets/image/success.png")}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.bodyTextContainer}>
          Your Phone took <Text style={styles.highlight}>{props.round} </Text>
          Rounds . The Number was
          <Text style={styles.highlight}> {props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  highlight: {
    color: "red",
    fontWeight: "200",
  },
  resultContainer: {
    margin: 10,
  },

  bodyTextContainer: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default GameOver;
