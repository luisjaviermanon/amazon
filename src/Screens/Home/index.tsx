import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ProductItem from "../../Component/ProductItem/index";
import Products from "../../data/Products";
const Home = () => {
  return (
    <View style={styles.page}>
      {
        //Render product componet
      }

      <FlatList
        data={Products}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
export default Home;
