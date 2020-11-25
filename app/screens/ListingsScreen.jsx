import React from "react";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Constants from "expo-constants";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];
const ListingsScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container} outerStyle={styles.outer}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
        style={{ padding: 20 }}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    backgroundColor: colors.light,
  },
  outer: {
    paddingTop: Platform.OS === "android" ? 0 : Constants.statusBarHeight,
  },
});
