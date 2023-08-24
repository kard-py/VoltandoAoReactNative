import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.icon}>❤</View>
      <Text style={styles.title}>Caio & Gabi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  icon: {
    borderRadius: 999999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 90,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
