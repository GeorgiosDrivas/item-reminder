import { useState } from "react";
import { View, Modal, Pressable, Text } from "react-native";
import HomeScreen from "./(tabs)";
import ItemsList from "./(tabs)/itemsList";
import { layoutStyles } from "./style";

export default function RootLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={layoutStyles.container}>
      <HomeScreen />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ItemsList />
        <Pressable
          onPress={() => setModalVisible(false)}
          style={layoutStyles.closeButton}
        >
          <Text>MAP</Text>
        </Pressable>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={layoutStyles.itemsListButton}
      >
        <Text>ITEMS LIST</Text>
      </Pressable>
    </View>
  );
}
