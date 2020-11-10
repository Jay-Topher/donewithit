import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={30}
        />
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 10,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 10,
  },
});
