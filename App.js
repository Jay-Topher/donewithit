import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ImageView from "./app/screens/ImageView";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import StartScreen from "./app/screens/StartScreen";

export default function App() {
  return <AccountScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
