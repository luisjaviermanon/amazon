import React, { useState } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";
import product from "../../data/product";
import QuantitySelector from "../../Component/QuantitySelector";
import Button from "../../Component/Button/index";
import ImageCarousel from "../../Component/ImageCarousel";
const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      {/**Image carousel */}
      <ImageCarousel images={product.images} />
      {/**Option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedOption(itemValue);
        }}
      >
        {product.options.map((option) => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>
      {/**Price */}
      <Text style={styles.price}>
        From ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>${product.oldPrice}</Text>
        )}
      </Text>
      {/**Description */}
      <View style={styles.decription}>
        <Text>{product.description} </Text>
      </View>
      {/**Qunatiti selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/**Button */}
      <Button
        text={"Add to Card"}
        onPress={() => {
          console.warn("Add to card");
        }}
        containerStyles={{ backgroundColor: "#e3c905" }}
      />
      <Button
        text={"Buy Now"}
        onPress={() => {
          console.warn("Buy Now");
        }}
      />
    </View>
  );
};

export default ProductScreen;
