import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  image: { flex: 2, height: 150, resizeMode: "contain" },
  price: { fontSize: 18, fontWeight: "bold" },
  title: {
    fontSize: 18,
  },
  rightContainer: {
    padding: 10,

    flex: 3,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  start: {
    margin: 2,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: "normal",
    textDecorationLine: "line-through",
  },
});
export default styles;
