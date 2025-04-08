import * as Location from "expo-location";
import { MapPressProps } from "@/types/mapTypes";

export const handleMapPress = async ({
  event,
  setMarker,
  setAddress,
  setNotificationSent,
}: MapPressProps) => {
  const { latitude, longitude } = event.nativeEvent.coordinate;
  setMarker({ latitude, longitude });
  setNotificationSent(false);
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
