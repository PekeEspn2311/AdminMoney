import { style } from "@/styles/style";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth, database } from "../src/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function agregarcat() {
    const [categoria, setCategoria] = React.useState('');

    const agregarcat = async () => {
        if (!categoria.trim()) {
            Alert.alert("Error", "El nombre de la categoría no puede estar vacío.");
            return;
        }

        try {
            const user = auth.currentUser;

            if (!user) {
                Alert.alert("Error", "Debes iniciar sesión.");
                return;
            }

            await addDoc(collection(database, "categoria"), {
                usuario_id: user.uid,
                nombre: categoria,
                fecha_creacion: new Date(),
            });

            Alert.alert("Éxito", "Categoría agregada correctamente.");
            setCategoria("");

        } catch (error) {
            console.log(error);
            Alert.alert("Error", "No se pudo agregar la categoría.");
        }
    };

    return (
        <SafeAreaView style={style.catContainer}>
            {/* ENCABEZADO */}
            <View style={style.catHeader}>
                <TouchableOpacity style={style.backButton} onPress={() => router.push("/configuracion")}>
                    <Ionicons name="arrow-back" size={26} color="black" />
                </TouchableOpacity>

                <Text style={style.catTitle}>Agregar categoría nueva</Text>
            </View>

            {/* FORMULARIO */}
            <View style={style.catForm}>
                <Text style={style.catLabel}>Nombre de la Categoría</Text>

                <TextInput
                    style={style.catInput}
                    onChangeText={setCategoria}
                    value={categoria}
                    placeholder="Domésticos"
                    placeholderTextColor="#989898"
                />

                <TouchableOpacity style={style.catButton} onPress={agregarcat}>
                    <Text style={style.catButtonText}>Agregar</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
