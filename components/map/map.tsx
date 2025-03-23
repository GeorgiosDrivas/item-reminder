import React, { useState, useEffect } from "react";
import MapView, { Region } from "react-native-maps";
import { View } from "react-native";
import * as Location from "expo-location";
import { mapStyles } from "./styles";
import { mapInterface } from "@/types/mapTypes";
import { INITIAL_REGION } from "@/constants/initialCoords";

export default function Map({ setDesiredLocation }: mapInterface) {
  const [region, setRegion] = useState<Region>(INITIAL_REGION);

  useEffect(() => {
    (async () => {
      // Request permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      // Get current location
      let location = await Location.getCurrentPositionAsync({});
      setRegion((prev) => ({
        ...prev,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }));
    })();
  }, []);

  return (
    <View style={mapStyles.container}>
      <MapView
        style={mapStyles.map}
        region={region}
        showsUserLocation
        showsMyLocationButton
      />
    </View>
  );
}
