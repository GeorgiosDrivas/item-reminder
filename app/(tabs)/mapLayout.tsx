import Map from "@/components/map/map";
import MapControl from "@/components/map/mapControl";
import { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MapScreen({ itemsList }: MapScreenType) {
  const [marker, setMarker] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedMarker = await AsyncStorage.getItem("marker");
        const savedAddress = await AsyncStorage.getItem("address");
        if (savedMarker) setMarker(JSON.parse(savedMarker));
        if (savedAddress) setAddress(savedAddress);
      } catch (error) {
        console.error("Failed to load marker and address:", error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        if (marker) {
          await AsyncStorage.setItem("marker", JSON.stringify(marker));
        }
        if (address) {
          await AsyncStorage.setItem("address", address);
        }
      } catch (error) {
        console.error("Failed to save marker and address:", error);
      }
    };

    saveData();
  }, [marker, address]);

  return (
    <SafeAreaProvider>
      <Map
        itemsList={itemsList}
        setAddress={setAddress}
        marker={marker}
        setMarker={setMarker}
      />
      <MapControl address={address} />
    </SafeAreaProvider>
  );
}
