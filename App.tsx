import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ProductsScreen from "./src/Screens/ProductsScreen/index";
export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyles = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyles}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ProductsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
