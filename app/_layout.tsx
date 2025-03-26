import { useState } from "react";
import { StyleSheet, View, Modal, Pressable, Text } from "react-native";
import HomeScreen from "./(tabs)";
import ItemsList from "./(tabs)/itemsList";

export default function RootLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <HomeScreen />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ItemsList />
        <Pressable
          onPress={() => setModalVisible(false)}
          style={styles.closeButton}
        >
          <Text style={styles.closeText}>Close</Text>
        </Pressable>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.itemsListButton}
      >
        <Text>ITEMS LIST</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#FF6347",
    borderRadius: 5,
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
  },
  itemsListButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 5,
  },
});
