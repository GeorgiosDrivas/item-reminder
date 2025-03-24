import { View, Text, Pressable } from "react-native";
import { mapControlStyles } from "./styles";
import { mapControlInterface } from "@/types/mapTypes";

export default function MapControl({
  setDesiredLocation,
  address,
  marker,
}: mapControlInterface) {
  const finalizeLocation = () => {
    setDesiredLocation({
      latitude: marker?.latitude ?? 0,
      longitude: marker?.longitude ?? 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    console.log("Location added" + marker?.latitude + marker?.longitude);
  };

  return (
    <View style={mapControlStyles.flex}>
      <Text>{address}</Text>
      <View style={mapControlStyles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            mapControlStyles.addBtn,
            mapControlStyles.btn,
            pressed && mapControlStyles.pressed,
          ]}
          onPress={() => finalizeLocation()}
        >
          <Text style={mapControlStyles.text}>ADD LOCATION</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            mapControlStyles.clearBtn,
            mapControlStyles.btn,
            pressed && mapControlStyles.pressed,
          ]}
          onPress={() => console.log("Clear Location")}
        >
          <Text style={mapControlStyles.text}>CLEAR LOCATION</Text>
        </Pressable>
      </View>
    </View>
  );
}
