import Map from "@/components/map/map";
import MapControl from "@/components/map/mapControl";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [desiredLocation, setDesiredLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [address, setAddress] = useState<string | null>(null);

  const [marker, setMarker] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  return (
    <SafeAreaProvider>
      <Map setAddress={setAddress} marker={marker} setMarker={setMarker} />
      <MapControl
        setDesiredLocation={setDesiredLocation}
        address={address}
        marker={marker}
      />
    </SafeAreaProvider>
  );
}
