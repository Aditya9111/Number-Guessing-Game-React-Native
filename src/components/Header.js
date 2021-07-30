import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../constants/color";
import TitleText from "./TitleText";

const { primary } = colors;

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerText}> {props.title} </TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,

    backgroundColor: primary,
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    color: "white",
  },
});

export default Header;
