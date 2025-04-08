import { View, Text } from "react-native";
import { mapControlStyles } from "./styles";
import { useStore } from "@/store/context";

export default function MapControl() {
  const { address } = useStore();

  return (
    <View style={mapControlStyles.flex}>
      <Text>{address || "Tap on the map to select a location"}</Text>
    </View>
  );
}
