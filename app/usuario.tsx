import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { auth, database } from "../src/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { style } from "@/styles/style";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Usuario() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const user = auth.currentUser;

    if (!user) return;

    const userRef = doc(database, "users", user.uid);

    getDoc(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        setUserData({
          uid: user.uid,
          ...snapshot.data(),
        });
      }
    });
  }, []);

  if (!userData) {
    return (
      <SafeAreaView style={style.loadingContainerusuario}>
        <Text style={style.loadingTextusuario}>Cargando usuario...</Text>
      </SafeAreaView>
    );
  }

  const fecha = userData.createdAt?.toDate
    ? userData.createdAt.toDate().toLocaleString()
    : "No disponible";

  return (
    <SafeAreaView style={style.areausuario}>
      <View>
        <TouchableOpacity style={style.backButton} onPress={() => router.push("/configuracion")}>
                <Ionicons name="arrow-back" size={26} color="black" />
            </TouchableOpacity>
        <Text style={style.titleusuario}>Datos del Usuario</Text>

        <Text style={style.itemusuario}>
          <Text style={style.labelusuario}>Nombre: </Text>
          {userData.name}
        </Text>

        <Text style={style.itemusuario}>
          <Text style={style.labelusuario}>Correo: </Text>
          {userData.email}
        </Text>

        <Text style={style.itemusuario}>
          <Text style={style.labelusuario}>UID: </Text>
          {userData.uid}
        </Text>

        <Text style={style.itemusuario}>
          <Text style={style.labelusuario}>Creado: </Text>
          {fecha}
        </Text>
      </View>
    </SafeAreaView>
  );
}


