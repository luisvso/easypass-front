import { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalNewVisitor from "../components/ModalNewVisitor";
import VisitorCard from "../components/VisitorCard";
import IconAddPlus from "../icons/iconAddPlus";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [visitors, setVisitors] = useState([]);

  const deleteVisitor = (id) => {
    setVisitors(visitors.filter((visitor) => visitor.id !== id));
  };

  const addNewVisitor = (newVisitor) => {
    setVisitors((prev) => [...prev, newVisitor]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.viewWelcome}>
            <Text style={styles.title}>Olá, Guilherme</Text>
            <Text style={styles.subtitle}>
              Gerencie seus visitantes recorrentes
            </Text>
          </View>
          <Pressable
            style={styles.buttonAdd}
            onPress={() => setModalVisible(true)}
          >
            <View style={styles.iconCircle}>
              <IconAddPlus width={20} height={20} />
            </View>
            <Text style={styles.buttonText}>Cadastrar novo visitante</Text>
          </Pressable>
          <FlatList
            data={visitors}
            contentContainerStyle={{ gap: 16 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <VisitorCard visitor={item} deleteVisitor={deleteVisitor} />
              );
            }}
          />
        </View>
      </ScrollView>
      <Footer />
      <ModalNewVisitor
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddVisitor={addNewVisitor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 20,
    flex: 1,
    gap: 20,
    backgroundColor: "#F9FAFB",
    borderColor: "#E0E6EB",
  },

  viewWelcome: {
    gap: 5,
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#000",
  },

  subtitle: {
    color: "#6C7E93",
    fontSize: 16,
  },

  buttonAdd: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F6F8",
    borderWidth: 2,
    borderColor: "#C5D1DF",
    borderStyle: "dashed",
    borderRadius: 15,
    padding: 15,
    gap: 10,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E2E8F0",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#1D3A5D",
    fontSize: 16,
    fontWeight: "bold",
  },
});
