import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BodyText = (props) => (
  <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "OpenSans-Regular",
  },
});

export default BodyText;
