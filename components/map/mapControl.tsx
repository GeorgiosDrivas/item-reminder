import { View, Text, Pressable } from "react-native";
import { mapStyles } from "./styles";

export default function MapControl() {
  return (
    <View style={mapStyles.flex}>
      <Text>Hello</Text>
      <View style={mapStyles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            mapStyles.addBtn,
            mapStyles.btn,
            pressed && mapStyles.pressed,
          ]}
          onPress={() => console.log("Add Location")}
        >
          <Text style={mapStyles.text}>ADD LOCATION</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            mapStyles.clearBtn,
            mapStyles.btn,
            pressed && mapStyles.pressed,
          ]}
          onPress={() => console.log("Clear Location")}
        >
          <Text style={mapStyles.text}>CLEAR LOCATION</Text>
        </Pressable>
      </View>
    </View>
  );
}
