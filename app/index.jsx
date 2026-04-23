import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VisitorCard from "../components/VisitorCard";
import IconAddPlus from "../icons/iconAddPlus";

export default function Index() {
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
          <Pressable style={styles.buttonAdd}>
            <View style={styles.iconCircle}>
              <IconAddPlus width={20} height={20} />
            </View>
            <Text style={styles.buttonText}>Cadastrar novo visitante</Text>
          </Pressable>
          <VisitorCard />
          <VisitorCard />
          <VisitorCard />
          <VisitorCard />
        </View>
      </ScrollView>
      <Footer />
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
