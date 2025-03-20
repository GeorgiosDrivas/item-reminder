import Map from "@/components/map/map";
import MapControl from "@/components/map/mapControl";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <Map />
      <MapControl />
    </SafeAreaProvider>
  );
}
