import React, { useEffect } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const requestCameraRoll = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (!granted) {
      Alert("Access to your camera roll is needed for this app");
    }
  };

  useEffect(() => {
    requestCameraRoll();
  }, []);

  const addImage = async () => {
    try {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!cancelled) {
        onChangeImage(uri);
      }
    } catch (error) {
      console.error("Error reading an image", error);
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      addImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 20,
    margin: 5,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
