import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../firebaseConnection";
import { StatusBar } from "expo-status-bar";

console.disableYellowBox = true;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  async function logar() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        navigation.navigate("Logado", { user: value.user.email });
      })
      .catch((error) => {
        alert("Ops! Algo deu errado!");
        return;
      });
    setPassword("");
    setEmail("");
  }

  function irCadastro() {
    navigation.navigate("Cadastro");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Login</Text>
      <Text style={styles.texto}>Email:</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />

      <Text style={styles.texto}>Senha:</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setPassword(texto)}
        value={password}
        secureTextEntry={true}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.btn} onPress={logar}>
          <Text style={styles.textoBtn}>Fazer Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textoBtn} onPress={irCadastro}>
            Ir Para Cadastro
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" backgroundColor="#0000cd" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  textoTitulo: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  texto: {
    fontSize: 20,
    color: "#000",
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    height: 45,
    fontSize: 17,
  },
  areaBtn: {
    alignItems: "center",
    marginTop: "7%",
  },
  btn: {
    alignItems: "center",
    width: 150,
    height: 60,
    justifyContent: "center",
    backgroundColor: "#0000cd",
    borderRadius: 25,
    marginTop: "7%",
  },
  textoBtn: {
    fontSize: 17,
    color: "#fff",
  },
});
