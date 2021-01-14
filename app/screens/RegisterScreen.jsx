import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";
import { ErrorMessage } from "../components/forms";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(6).required().label("Password"),
});
const RegisterScreen = () => {
  const { decodeAndStoreUser } = useAuth();
  const registerApi = useApi(auth.register);
  const loginApi = useApi(auth.login);
  const [error, setError] = useState(null);
  const handleRegister = async (values) => {
    const result = await registerApi.request(values);
    if (!result.ok) {
      result.data ? setError(result.data?.error) : setError("An error occured");
      return;
    }

    setError(null);
    const { email, password } = result.data;
    // login the user
    const { data: authToken } = await loginApi.request(email, password);

    decodeAndStoreUser(authToken);
  };
  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          <ErrorMessage visible={!!error} error={error} />
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
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
