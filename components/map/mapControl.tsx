import { View, Text, Pressable } from "react-native";
import { mapControlStyles } from "./styles";

export default function MapControl() {
  return (
    <View style={mapControlStyles.flex}>
      <Text>Hello</Text>
      <View style={mapControlStyles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            mapControlStyles.addBtn,
            mapControlStyles.btn,
            pressed && mapControlStyles.pressed,
          ]}
          onPress={() => console.log("Add Location")}
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
