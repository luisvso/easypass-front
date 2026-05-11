import IconVisitor from "@/icons/IconVisitor";
import { yupResolver } from "@hookform/resolvers/yup";
import { cpf } from "cpf-cnpj-validator";
import { BlurView } from "expo-blur";
import * as Crypto from "expo-crypto";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as yup from "yup";
import IconX from "../icons/IconX";
import IconCard from "../icons/iconCard";
import IconFloppyDisk from "../icons/iconFloppyDisk";
import IconNote from "../icons/iconNote";
import IconPhone from "../icons/iconPhone";

const schema = yup.object({
  visitorName: yup.string().required("Informe o nome do visitante"),
  visitorCpf: yup
    .string()
    .test("cpf-is-valid", "CPF inválido", (value) => cpf.isValid(value)),
  visitorPhoneNumber: yup
    .string()
    .required("Informe o telefone do visitante")
    .matches(/^[1-9]{2}9[0-9]{8}$/, "Telefone inválido"),
});

export default function ModalNewVisitor({ isVisible, onClose, onAddVisitor }) {
  const [focusedInput, setFocusedInput] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      visitorName: "",
      visitorCpf: "",
      visitorPhoneNumber: "",
      note: "",
    },
  });

  function handleRegisterVisitor(data) {
    onAddVisitor({
      ...data,
      id: Crypto.randomUUID(),
    });
    reset();
    onClose();
  }

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
                {
                  borderWidth: errors.visitorName && 1,
                  borderColor: errors.visitorName && "#ff375b",
                },
              ]}
            >
              <IconVisitor width={15} height={15} />
              <Controller
                control={control}
                name="visitorName"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    placeholder="Nome do visitante"
                    placeholderTextColor="#9AA8B6"
                    onFocus={() => setFocusedInput("name")}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
            {errors.visitorName && (
              <Text style={styles.labelError}>
                {errors.visitorName?.message}
              </Text>
            )}
            <Text style={styles.label}>CPF *</Text>
            <View
              style={[
                styles.inputContainer,
                focusedInput === "cpf" && styles.inputContainerFocused,
                {
                  borderWidth: errors.visitorCpf && 1,
                  borderColor: errors.visitorCpf && "#ff375b",
                },
              ]}
            >
              <IconCard width={15} height={15} />
              <Controller
                control={control}
                name="visitorCpf"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChange={onChange}
                    value={value}
                    style={styles.input}
                    placeholder="000.000.00-00"
                    placeholderTextColor="#9AA8B6"
                    onFocus={() => setFocusedInput("cpf")}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
            {errors.visitorCpf && (
              <Text style={styles.labelError}>
                {errors.visitorCpf?.message}
              </Text>
            )}
            <Text style={styles.label}>TELEFONE</Text>
            <View
              style={[
                styles.inputContainer,
                focusedInput === "phone" && styles.inputContainerFocused,
                {
                  borderWidth: errors.visitorPhoneNumber && 1,
                  borderColor: errors.visitorPhoneNumber && "#ff375b",
                },
              ]}
            >
              <IconPhone width={15} height={15} />
              <Controller
                control={control}
                name="visitorPhoneNumber"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onChange={onChange}
                    value={value}
                    style={styles.input}
                    placeholder="(71) 99999-0000"
                    placeholderTextColor="#9AA8B6"
                    onFocus={() => setFocusedInput("phone")}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
            {errors.visitorPhoneNumber && (
              <Text style={styles.labelError}>
                {errors.visitorPhoneNumber?.message}
              </Text>
            )}

            <Text style={styles.label}>OBSERVAÇÕES</Text>
            <View
              style={[
                styles.inputContainerNote,
                focusedInput === "note" && styles.inputContainerFocused,
              ]}
            >
              <IconNote width={15} height={15} />
              <Controller
                control={control}
                name="note"
                render={({ field: { onBlur, onChange, value } }) => (
                  <TextInput
                    onChange={onChange}
                    value={value}
                    style={styles.input}
                    placeholder="Ex: técnico, familiar, etc."
                    placeholderTextColor="#9AA8B6"
                    onFocus={() => setFocusedInput("note")}
                    onBlur={onBlur}
                  />
                )}
              />
            </View>
          </View>
          <Pressable
            style={styles.registerVisitorButton}
            onPress={handleSubmit(handleRegisterVisitor)}
          >
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

  labelError: {
    alignSelf: "flex-start",
    color: "#ff375b",
  },
});
