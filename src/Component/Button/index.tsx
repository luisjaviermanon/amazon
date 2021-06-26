import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: object;
}

const Button = ({ text, onPress, containerStyles }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#e47911",
    margin: 10,
    height: 35,
    alignItems: "center",
    alignContent: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#d97818",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
  },
});
export default Button;
