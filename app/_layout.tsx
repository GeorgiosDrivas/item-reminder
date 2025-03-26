import { useState } from "react";
import "react-native-reanimated";
import HomeScreen from "./(tabs)";
import { StyleSheet, View } from "react-native";
import ItemsList from "./(tabs)/itemsList";

export default function RootLayout() {
  const [screen] = useState("home");

  return (
    <View style={styles.container}>
      {screen === "home" ? <HomeScreen /> : <ItemsList />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
