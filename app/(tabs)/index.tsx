import Map from "@/components/map/map";
import MapControl from "@/components/map/mapControl";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [marker, setMarker] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  return (
    <SafeAreaProvider>
      <Map setAddress={setAddress} marker={marker} setMarker={setMarker} />
      <MapControl address={address} />
    </SafeAreaProvider>
  );
}
