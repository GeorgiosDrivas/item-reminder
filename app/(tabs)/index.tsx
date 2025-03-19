import MapControl from "@/components/mapControl";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <View style={styles.flex} id="map" />
      <MapControl style={styles.flex} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 20,
  },
  flex: {
    flex: 1,
  },
});
