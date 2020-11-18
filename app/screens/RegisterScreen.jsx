import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(6).required().label("Password"),
});
const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="words"
          autoCorrect={false}
          placeholder="Name"
          name="name"
          icon="account"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          icon="email"
          name="email"
          keyboardType="email-address"
        />

        <AppFormField
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          name="password"
          icon="lock"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
