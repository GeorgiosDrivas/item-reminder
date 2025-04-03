import { MapPressEvent } from "react-native-maps";

export type mapControlInterface = {
  address: string | null;
};

export type mapCompType = {
  itemsList: string[];
  setAddress: React.Dispatch<React.SetStateAction<string | null>>;
};

export type MapPressProps = {
  event: MapPressEvent;
  setMarker: (marker: { latitude: number; longitude: number }) => void;
  setAddress: (address: string) => void;
};

export type MapScreenType = {
  itemsList: string[];
};
