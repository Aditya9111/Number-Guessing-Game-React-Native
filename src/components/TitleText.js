import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TitleText = (props) => (
  <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "OpenSans-Bold",
    fontSize: 18,
  },
});

export default TitleText;
