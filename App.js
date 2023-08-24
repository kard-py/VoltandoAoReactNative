import { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

import frases from "./assets/frases.json";

export default function App() {
  const [frase, setFrase] = useState("");
  useEffect(() => {
    setFrase(frases[Math.floor(Math.random() * frases.length)]);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>{frase}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8093F1",
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
    fontStyle: "italic",
    margin: 25,
  },
});
