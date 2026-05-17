import { ScrollView, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IconVisitor from "../icons/IconVisitor";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "#F9FAFB" }}
      >
        <View style={styles.content}>
          <View style={styles.viewWelcome}>
            <Text style={styles.title}>Meu Perfil</Text>
            <Text style={styles.subtitle}>Edite seus dados pessoais</Text>
          </View>
          <View style={styles.profileData}>
            <View style={styles.iconSquare}>
              <IconVisitor width={30} height={30} />
            </View>
            <View>
              <Text style={styles.visitorName}>Guilherme</Text>
              <Text style={styles.userType}>Morador</Text>
            </View>
          </View>
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
    gap: 30,
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

  profileData: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },

  iconSquare: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#E2E8F0",
    justifyContent: "center",
    alignItems: "center",
  },

  visitorName: {
    fontWeight: "bold",
    fontSize: 16,
  },

  userType: {
    color: "#6C7E93",
    fontSize: 14,
  },
});
