import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
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
