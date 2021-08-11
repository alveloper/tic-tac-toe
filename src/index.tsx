import React from "react";
import { StyleSheet, View } from "react-native";
import {
  useFonts,
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
} from "@expo-google-fonts/delius-unicase";
import { Text } from "@Components";

export default function App() {
  const [fontLoaded] = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });
  if (!fontLoaded) return null;
  return (
    <View style={styles.container}>
      <Text onPress={() => alert(true)} style={{ fontSize: 25 }}>
        Hello world <Text weight="400">and hello to you!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
