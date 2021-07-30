import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../constants/color";

const { primary, accent } = colors;

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderColor: primary,
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontFamily: "OpenSans-Regular",
    fontSize: 18,
  },
});

export default MainButton;
