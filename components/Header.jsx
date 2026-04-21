import { Pressable, StyleSheet, Text, View } from "react-native";
import IconExit from "../icons/iconExit";
import IconShield from "../icons/iconShield";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <View style={styles.viewShield}>
          <IconShield width={24} height={24} />
        </View>
        <View>
          <Text style={styles.textNameApp}>EasyPass</Text>
        </View>
      </View>
      <Pressable style={styles.buttonExit}>
        <IconExit width={18} height={24} />
        <Text style={styles.textExit}>Sair</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#1D3A5D",
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  viewShield: {
    backgroundColor: "#344E64",
    padding: 10,
    borderRadius: 15,
  },

  textNameApp: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },

  buttonExit: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#344E6E",
    gap: 10,
    borderRadius: 14,
  },

  textExit: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12,
  },
});
