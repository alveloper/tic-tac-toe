import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { Text, AppBootstrap } from "@Components";

export default function App(): ReactElement {
  // if (!fontLoaded) return null;
  return (
    <AppBootstrap>
      <View style={styles.container}>
        <Text onPress={() => alert(true)} style={{ fontSize: 25 }}>
          Hello world <Text weight="400">and hello to you!</Text>
        </Text>
      </View>
    </AppBootstrap>
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
