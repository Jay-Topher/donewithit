import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import myTheme from "./app/navigation/navigationTheme";
import AppTabNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={myTheme}>
        <AppTabNavigator />
      </NavigationContainer>
    </>
  );
}
