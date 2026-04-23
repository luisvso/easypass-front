import { Pressable, StyleSheet, Text, View } from "react-native";
import IconClock from "../icons/iconClock";
import IconVisitor from "../icons/IconVisitor";
import IconVisitors from "../icons/iconVisitors";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Pressable style={styles.buttonFooter}>
        <IconVisitors width={20} height={20} />
        <Text style={styles.textActive}>Visitantes</Text>
        <View style={styles.activeIndicator} />
      </Pressable>
      <Pressable style={styles.buttonFooter}>
        <IconClock width={20} height={20} />
        <Text>Histórico</Text>
      </Pressable>
      <Pressable style={styles.buttonFooter}>
        <IconVisitor width={20} height={20} />
        <Text>Perfil</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#FFFF",
    borderTopWidth: 2,
    borderColor: "#E2E8F0",
  },

  buttonFooter: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },

  textActive: {
    color: "#1D3A5D",
    fontWeight: "600",
  },

  activeIndicator: {
    position: "absolute",
    bottom: -15,
    width: 40,
    height: 4,
    backgroundColor: "#1D3A5D",
  },
});
