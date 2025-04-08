import { MapPressEvent } from "react-native-maps";

export type mapControlInterface = {
  address: string | null;
};

export type mapCompType = {
  setAddress: React.Dispatch<React.SetStateAction<string | null>>;
};

export type MapPressProps = {
  event: MapPressEvent;
  setMarker: (marker: { latitude: number; longitude: number }) => void;
  setAddress: (address: string) => void;
  setNotificationSent: (sent: boolean) => void;
};
