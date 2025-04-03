import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { View } from "react-native";
import { mapStyles } from "./styles";
import { mapCompType } from "@/types/mapTypes";
import { INITIAL_REGION } from "@/constants/initialCoords";
import { getDistance } from "@/utils/mapDistanceCalc";
import { handleMapPress } from "@/utils/handleMapPress";
import { sendNotification } from "@/app/notification";

export default function Map({ itemsList, setAddress }: mapCompType) {
  const [region, setRegion] = useState(INITIAL_REGION);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [marker, setMarker] = useState<{
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
      const newLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      setUserLocation(newLocation);
      setMarker(newLocation);

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
        sendNotification({ items: itemsList });
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
