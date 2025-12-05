import { agregarcategoria } from "@/styles/agregar-categoria";
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
        <SafeAreaView style={agregarcategoria.catContainer}>
            
            <View style={agregarcategoria.catHeader}>
                <TouchableOpacity style={agregarcategoria.backButton} onPress={() => router.push("/configuracion")}>
                    <Ionicons name="arrow-back" size={26} color="black" />
                </TouchableOpacity>

                <Text style={agregarcategoria.catTitle}>Agregar categoría nueva</Text>
            </View>

            
            <View style={agregarcategoria.catForm}>
                <Text style={agregarcategoria.catLabel}>Nombre de la Categoría</Text>

                <TextInput
                    style={agregarcategoria.catInput}
                    onChangeText={setCategoria}
                    value={categoria}
                    placeholder="Domésticos"
                    placeholderTextColor="#989898"
                />

                <TouchableOpacity style={agregarcategoria.catButton} onPress={agregarcat}>
                    <Text style={agregarcategoria.catButtonText}>Agregar</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
