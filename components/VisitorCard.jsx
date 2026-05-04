import { Pressable, StyleSheet, Text, View } from "react-native";
import IconBin from "../icons/iconBin";
import IconPencil from "../icons/iconPencil";
import IconQRcode from "../icons/iconQRcode";
import IconVisitor from "../icons/IconVisitor";

export default function VisitorCard({ visitor, deleteVisitor }) {
  return (
    <View style={styles.viewCardVisitor}>
      <View style={styles.viewInfoVisitor}>
        <View style={styles.iconCircleVisitor}>
          <IconVisitor width={25} height={25} />
        </View>

        <View style={styles.visitorData}>
          <Text style={styles.textNameVisitor}>{visitor.name}</Text>
          <Text style={styles.textInfoVisitor}>
            {visitor.cpf} · {visitor.phoneNumber}
          </Text>
          <Text style={styles.textNote}>{visitor.note}</Text>
        </View>
      </View>

      <View style={styles.viewOptionsVisitor}>
        <Pressable style={styles.buttonQrCode}>
          <IconQRcode width={20} height={20} />
          <Text style={styles.textButtonQrCode}>Gerar QR</Text>
        </Pressable>

        <Pressable style={styles.buttonEdit}>
          <IconPencil width={15} height={15} />
          <Text style={styles.textButtonEdit}>Editar</Text>
        </Pressable>
        <Pressable
          style={styles.buttonDelete}
          onPress={() => deleteVisitor(visitor.id)}
        >
          <IconBin width={15} height={15} />
          <Text style={styles.textbuttonDelete}>Excluir</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewCardVisitor: {
    borderWidth: 2,
    borderColor: "#E2E8F0",
    borderRadius: 15,
  },

  viewInfoVisitor: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    padding: 20,
  },

  iconCircleVisitor: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E2E8F0",
    justifyContent: "center",
    alignItems: "center",
  },

  textNameVisitor: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1D3A5D",
  },

  textInfoVisitor: {
    color: "#6C7E93",
    fontSize: 13,
    fontWeight: "500",
  },
  textNote: {
    fontStyle: "italic",
    color: "#9AA8B6",
  },

  visitorData: {
    flex: 1,
    gap: 2,
  },

  viewOptionsVisitor: {
    flexDirection: "row",
    borderColor: "#E2E8F0",
    borderTopWidth: 2,
    alignItems: "center",
  },
  buttonQrCode: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRightWidth: 2,
    borderColor: "#E2E8F0",
    gap: 5,
  },

  textButtonQrCode: {
    color: "#1D3A5D",
    fontWeight: "bold",
  },

  buttonEdit: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRightWidth: 2,
    borderColor: "#E2E8F0",
    gap: 5,
  },
  textButtonEdit: {
    color: "#6C7E93",
    fontWeight: "bold",
  },

  buttonDelete: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    gap: 5,
  },

  textbuttonDelete: {
    color: "#FF0000",
    fontWeight: "bold",
  },
});
