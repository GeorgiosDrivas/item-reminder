import Map from "@/components/map/map";
import MapControl from "@/components/map/mapControl";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function MapScreen() {
  return (
    <SafeAreaProvider>
      <Map />
      <MapControl />
    </SafeAreaProvider>
  );
}
