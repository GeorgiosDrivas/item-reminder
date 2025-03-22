import Map from "@/components/map/map";
import MapControl from "@/components/map/mapControl";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [markedLocation, setMarkedLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [desiredLocation, setDesiredLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <SafeAreaProvider>
      <Map setDesiredLocation={setDesiredLocation} />
      <MapControl
        setMarkedLocation={setMarkedLocation}
        desiredLocation={desiredLocation}
      />
    </SafeAreaProvider>
  );
}
