import { View, Text } from "react-native";
import { mapControlStyles } from "./styles";
import { mapControlInterface } from "@/types/mapTypes";

export default function MapControl({ address }: mapControlInterface) {
  return (
    <View style={mapControlStyles.flex}>
      <Text>{address || "Tap on the map to select a location"}</Text>
    </View>
  );
}
