import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.inputStyle, ...props.style }}
      placeholder={props.placeholder}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 22,
  },
});

export default Input;
