import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { View } from "react-native";
import { mapStyles } from "./styles";
import { mapInterface } from "@/types/mapTypes";
import { INITIAL_REGION } from "@/constants/initialCoords";
import { getDistance } from "@/constants/mapDistanceCalc";
import { handleMapPress } from "@/constants/handleMapPress";

export default function Map({ setAddress, marker, setMarker }: mapInterface) {
  const [region, setRegion] = useState(INITIAL_REGION);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      setRegion((prev) => ({
        ...prev,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }));

      const locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 2000,
          distanceInterval: 1,
        },
        (location) => {
          setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        }
      );

      return () => locationSubscription.remove();
    })();
  }, []);

  useEffect(() => {
    if (marker && userLocation) {
      const distance = getDistance(
        marker.latitude,
        marker.longitude,
        userLocation.latitude,
        userLocation.longitude
      );
      if (distance > 10) {
        console.log("🚨 User has left the selected location!");
      }
    }
  }, [userLocation, marker]);

  return (
    <View style={mapStyles.container}>
      <MapView
        style={mapStyles.map}
        region={region}
        showsUserLocation
        showsMyLocationButton
        onPress={(event) => handleMapPress({ event, setMarker, setAddress })}
      >
        {marker && <Marker coordinate={marker} title="Selected Location" />}
      </MapView>
    </View>
  );
}
