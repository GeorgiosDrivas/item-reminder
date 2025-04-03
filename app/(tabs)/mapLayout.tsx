import Map from "@/components/map/map";
import MapControl from "@/components/map/mapControl";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MapScreenType } from "@/types/mapTypes";

export default function MapScreen({ itemsList }: MapScreenType) {
  const [address, setAddress] = useState<string | null>(null);

  return (
    <SafeAreaProvider>
      <Map itemsList={itemsList} setAddress={setAddress} />
      <MapControl address={address} />
    </SafeAreaProvider>
  );
}
