import { MapPressEvent } from "react-native-maps";
import * as Location from "expo-location";

type MapPressProps = {
  event: MapPressEvent;
  setMarker: (marker: { latitude: number; longitude: number }) => void;
  setAddress: (address: string) => void;
};

export const handleMapPress = async ({
  event,
  setMarker,
  setAddress,
}: MapPressProps) => {
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
