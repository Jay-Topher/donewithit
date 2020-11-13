import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ErrorMessage } from ".";
import AppPicker from "../AppPicker";

const AppFormPicker = ({ items, name, placeholder }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
