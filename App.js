import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import myTheme from "./app/navigation/navigationTheme";
import AppTabNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  // return (
  //   <NavigationContainer theme={myTheme}>
  //     <AppTabNavigator />
  //   </NavigationContainer>
  // );

  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };

  demo();
  // const netInfo = useNetInfo();
  // console.log(netInfo);
  return null;
}
