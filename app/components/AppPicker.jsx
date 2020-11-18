import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = "100%",
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleSelectItem = (item) => {
    onSelectItem(item);
    setModalVisible(false);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.inputContainer, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => handleSelectItem(item)}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: colors.light,
    height: 40,
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 10,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
    ...defaultStyles.text,
  },
});
