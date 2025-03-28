import React, { useState, useEffect } from "react";
import MapView, { Marker, MapPressEvent } from "react-native-maps";
import { View } from "react-native";
import * as Location from "expo-location";
import { mapStyles } from "./styles";
import { mapInterface } from "@/types/mapTypes";
import { INITIAL_REGION } from "@/constants/initialCoords";

export default function Map({ setAddress, marker, setMarker }: mapInterface) {
  const [region, setRegion] = useState(INITIAL_REGION);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const getDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371000;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

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

  const handleMapPress = async (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarker({ latitude, longitude });

    try {
      const geoCode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      if (geoCode.length > 0) {
        const locationDetails = geoCode[0];
        const formattedAddress = `${
          locationDetails.street ?? "Unknown Street"
        }, ${locationDetails.city ?? ""}, ${locationDetails.region ?? ""}, ${
          locationDetails.country ?? ""
        }`;
        setAddress(formattedAddress.trim());
      } else {
        setAddress("Address not found");
      }
    } catch (error) {
      console.error("Reverse geocoding error:", error);
      setAddress("Error fetching address");
    }
  };

  return (
    <View style={mapStyles.container}>
      <MapView
        style={mapStyles.map}
        region={region}
        showsUserLocation
        showsMyLocationButton
        onPress={handleMapPress}
      >
        {marker && <Marker coordinate={marker} title="Selected Location" />}
      </MapView>
    </View>
  );
}
