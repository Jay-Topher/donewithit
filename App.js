import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/forms/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => setImageUris([...imageUris, uri]);
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen style={styles.container}>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
