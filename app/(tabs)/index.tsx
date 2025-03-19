import Map from "@/components/map/map";
import MapControl from "@/components/map/mapControl";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <Map />
      <MapControl />
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
