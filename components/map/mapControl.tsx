import { View, Text, Pressable, Button } from "react-native";
import { mapControlStyles } from "./styles";
import { sendNotification } from "@/app/notification";

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
        <Button title="Send Notification" onPress={sendNotification} />
      </View>
    </View>
  );
}
