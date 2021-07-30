import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../constants/color";

const { primary, accent } = colors;

const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: accent,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  number: {
    color: accent,
    fontSize: 25,
  },
});

export default NumberContainer;
