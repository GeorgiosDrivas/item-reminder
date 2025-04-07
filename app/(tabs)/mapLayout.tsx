import Map from "@/components/map/map";
import MapControl from "@/components/map/mapControl";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function MapScreen() {
  const [address, setAddress] = useState<string | null>(null);

  return (
    <SafeAreaProvider>
      <Map setAddress={setAddress} />
      <MapControl address={address} />
    </SafeAreaProvider>
  );
}
