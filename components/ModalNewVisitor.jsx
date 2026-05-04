import IconVisitor from "@/icons/IconVisitor";
import { BlurView } from "expo-blur";
import * as Crypto from "expo-crypto";
import { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import IconX from "../icons/IconX";
import IconCard from "../icons/iconCard";
import IconFloppyDisk from "../icons/iconFloppyDisk";
import IconNote from "../icons/iconNote";
import IconPhone from "../icons/iconPhone";

export default function ModalNewVisitor({ isVisible, onClose, onAddVisitor }) {
  const [focusedInput, setFocusedInput] = useState(null);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [note, setNote] = useState("");
  const [id, setId] = useState("");
  const generateId = () => {
    const newId = Crypto.randomUUID();
    setId(newId);
  };

  const savesData = () => {
    generateId();
    const visitorData = {
      name: name,
      cpf: cpf,
      phoneNumber: phoneNumber,
      note: note,
      id: id,
    };

    onAddVisitor(visitorData);
    onClose();
    setName("");
    setCpf("");
    setPhoneNumber("");
    setNote("");
    console.log(visitorData);
  };

  return (
    <Modal transparent={true} visible={isVisible}>
      <BlurView style={styles.overlay} intensity={25} tint="dark">
        <View style={styles.modalContent}>
          <View style={styles.headerModal}>
            <Text style={styles.textHeaderModal}>Novo visitante</Text>
            <Pressable onPress={onClose}>
              <IconX width={15} height={15} />
            </Pressable>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>NOME COMPLETO *</Text>
            <View
              style={[
                styles.inputContainer,
                focusedInput === "name" && styles.inputContainerFocused,
              ]}
            >
              <IconVisitor width={15} height={15} />
              <TextInput
                onChangeText={setName}
                value={name}
                style={styles.input}
                placeholder="Nome do visitante"
                placeholderTextColor="#9AA8B6"
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
              />
            </View>
            <Text style={styles.label}>CPF *</Text>
            <View
              style={[
                styles.inputContainer,
                focusedInput === "cpf" && styles.inputContainerFocused,
              ]}
            >
              <IconCard width={15} height={15} />
              <TextInput
                onChangeText={setCpf}
                value={cpf}
                style={styles.input}
                placeholder="000.000.00-00"
                placeholderTextColor="#9AA8B6"
                onFocus={() => setFocusedInput("cpf")}
                onBlur={() => setFocusedInput(null)}
              />
            </View>
            <Text style={styles.label}>TELEFONE</Text>
            <View
              style={[
                styles.inputContainer,
                focusedInput === "phone" && styles.inputContainerFocused,
              ]}
            >
              <IconPhone width={15} height={15} />
              <TextInput
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                style={styles.input}
                placeholder="(71) 99999-0000"
                placeholderTextColor="#9AA8B6"
                onFocus={() => setFocusedInput("phone")}
                onBlur={() => setFocusedInput(null)}
              />
            </View>
            <Text style={styles.label}>OBSERVAÇÕES</Text>
            <View
              style={[
                styles.inputContainerNote,
                focusedInput === "note" && styles.inputContainerFocused,
              ]}
            >
              <IconNote width={15} height={15} />
              <TextInput
                onChangeText={setNote}
                value={note}
                style={styles.input}
                placeholder="Ex: técnico, familiar, etc."
                placeholderTextColor="#9AA8B6"
                onFocus={() => setFocusedInput("note")}
                onBlur={() => setFocusedInput(null)}
              />
            </View>
          </View>
          <Pressable style={styles.registerVisitorButton} onPress={savesData}>
            <IconFloppyDisk width={18} height={18} />
            <Text style={styles.textRegisterVisitorButton}>
              Cadastrar visitante
            </Text>
          </Pressable>
        </View>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },

  headerModal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e4e4e4",
    marginHorizontal: -20,
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  textHeaderModal: {
    fontSize: 18,
    fontWeight: "bold",
  },

  inputGroup: {
    gap: 10,
  },

  label: {
    color: "#9AA8B6",
    fontWeight: "600",
  },

  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9AA8B6",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  inputContainerNote: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9AA8B6",
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
    height: 80,
  },

  inputContainerFocused: {
    borderColor: "#1D3A5D",
    borderWidth: 2,
  },

  input: {
    flex: 1,
    outlineStyle: "none",
  },

  registerVisitorButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8E9CAE",
    padding: 15,
    borderRadius: 10,
    gap: 10,
    marginTop: 20,
  },

  textRegisterVisitorButton: {
    color: "#FFFF",
    fontWeight: "bold",
  },
});
