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

export default function Logado({ route }) {
  const navigation = useNavigation();

  async function logout() {
    await firebase.auth().signOut();
    alert('Deslogado com sucesso!');
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Pagina Incial</Text>
      <Text style={styles.textoUser}>Seja Bem Vindo!</Text>
      <Text style={styles.textoUser}>Seu Email é: {route.params?.user}</Text>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.btn} onPress={logout}>
          <Text style={styles.textoBtn}>Deslogar!</Text>
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
  textoUser: {
    fontSize: 20,
    textAlign: "center",
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
