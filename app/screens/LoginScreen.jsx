import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import AuthApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const { decodeAndStoreUser } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    const result = await AuthApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    decodeAndStoreUser(result.data);
  };
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <View>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid username and/or password"
            visible={loginFailed}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />

          <SubmitButton title="Login" />
        </AppForm>
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
