import React from "react";
import { StyleSheet, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
import colors from "../config/colors";
import AppText from "./AppText";

function OfflineNotice() {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.noticeText}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
}

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noticeText: {
    color: colors.white,
  },
});
