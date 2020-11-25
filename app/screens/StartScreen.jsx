import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={5}
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text style={styles.tagline}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <AppButton
            title="Register"
            color="secondary"
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: "auto",
    width: "100%",
    padding: 20,
  },
  buttons: {
    width: "100%",
    height: 60,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  login: {
    backgroundColor: colors.primary,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
  logoContainer: {
    alignItems: "center",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 10,
  },
});
