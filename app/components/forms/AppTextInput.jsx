import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

const AppTextInput = ({ icon, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    ...defaultStyles.text,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: colors.light,
    minHeight: 40,
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 20,
    width: "100%",
    marginVertical: 10,
  },
});
