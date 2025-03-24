import React, { useState, useEffect } from "react";
import MapView, { Marker, Region, MapPressEvent } from "react-native-maps";
import { View, Text } from "react-native";
import * as Location from "expo-location";
import { mapStyles } from "./styles";
import { mapInterface } from "@/types/mapTypes";
import { INITIAL_REGION } from "@/constants/initialCoords";

export default function Map({ setAddress, marker, setMarker }: mapInterface) {
  const [region, setRegion] = useState<Region>(INITIAL_REGION);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion((prev) => ({
        ...prev,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }));
    })();
  }, []);

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
        const formattedAddress = `${locationDetails.street}, ${locationDetails.city}, ${locationDetails.region}, ${locationDetails.country}`;
        setAddress(formattedAddress);
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
