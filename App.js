import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import myTheme from "./app/navigation/navigationTheme";
import AppTabNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <AppTabNavigator />
    </NavigationContainer>
  );
}
