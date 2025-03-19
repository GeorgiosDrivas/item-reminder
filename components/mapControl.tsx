import { StyleSheet } from "react-native";

export default function MapControl() {
  return (
    <>
      <div style={styles.flex}>
        <button style={StyleSheet.flatten([styles.addBtn, styles.btn])}>
          ADD LOCATION
        </button>
        <button style={StyleSheet.flatten([styles.clearBtn, styles.btn])}>
          CLEAR LOCATION
        </button>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addBtn: {
    backgroundColor: "#16C1E8",
    marginRight: 10,
  },
  clearBtn: {
    backgroundColor: "#EA5151",
  },
  btn: {
    cursor: "pointer",
    color: "#fff",
    borderWidth: 0,
    height: 30,
    width: 150,
    fontWeight: "bold",
  },
});
