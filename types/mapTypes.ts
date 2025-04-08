import { MapPressEvent } from "react-native-maps";

export type MapPressProps = {
  event: MapPressEvent;
  setMarker: (marker: { latitude: number; longitude: number }) => void;
  setAddress: (address: string) => void;
  setNotificationSent: (sent: boolean) => void;
};
