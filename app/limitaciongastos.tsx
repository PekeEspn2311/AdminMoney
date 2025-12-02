import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { database } from "../src/config/firebase";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { style } from "@/styles/style";

type Categoria = {
    label: string;
    value: string;
};

export default function LimitacionGastos() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [limite, setLimite] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);


    useEffect(() => {
        const cargarCategorias = async () => {
            try {
                const ref = collection(database, "categoria");
                const snapshot = await getDocs(ref);

                const data: Categoria[] = snapshot.docs.map((doc) => ({
                    label: doc.data().nombre ?? "Sin nombre",
                    value: doc.id
                }));

                setCategorias(data);
            } catch (error) {
                console.log("🔥 ERROR CATEGORIAS:", error);
            }
        };

        cargarCategorias();
    }, []);

    const guardarLimite = async () => {
        if (!categoriaSeleccionada) {
            Alert.alert("Error", "Selecciona una categoría.");
            return;
        }

        if (!limite.trim()) {
            Alert.alert("Error", "Ingresa un límite válido.");
            return;
        }

        try {
            const ref = doc(database, "categoria", categoriaSeleccionada);

            await updateDoc(ref, {
                limite: Number(limite)
            });

            Alert.alert("Éxito", "Límite guardado correctamente ⭐");
        } catch (error) {
            console.log("🔥 ERROR GUARDAR LIMITE:", error);
            Alert.alert("Error", "No se pudo guardar el límite.");
        }
    };

    return (
        <SafeAreaView style={style.limitContainer}>
            
            {/* Back */}
            <TouchableOpacity style={style.backButton} onPress={() => router.push("/configuracion")}>
                <Ionicons name="arrow-back" size={26} color="black" />
            </TouchableOpacity>

            {/* Título */}
            <Text style={style.limitTitle}>Limitación de Gastos</Text>

            {/* Tarjeta */}
            <View style={style.limitCard}>

                // --- SELECTOR DROPDOWN ---
<View style={{ marginBottom: 20 }}>
    <Text style={style.limitLabel}>Selecciona una categoría</Text>

    {/* Botón que abre/cierra el dropdown */}
    <TouchableOpacity
        style={style.dropdownButton}
        onPress={() => setShowDropdown(!showDropdown)}
    >
        <Text style={style.dropdownButtonText}>
            {categorias.find((c) => c.value === categoriaSeleccionada)?.label || "Seleccionar categoría"}
        </Text>
        <Ionicons name={showDropdown ? "chevron-up" : "chevron-down"} size={22} color="#555" />
    </TouchableOpacity>

    {/* Lista desplegable */}
    {showDropdown && (
    <View style={style.dropdownContainer}>
        <ScrollView style={{ maxHeight: 200 }}>
            {categorias.map((cat) => (
                <TouchableOpacity
                    key={cat.value}
                    style={style.dropdownItem}
                    onPress={() => {
                        setCategoriaSeleccionada(cat.value);
                        setShowDropdown(false);
                    }}
                >
                    <Text style={style.dropdownItemText}>{cat.label}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
)}

</View>


                <Text style={style.limitLabel}>Límite de gasto (MXN)</Text>

                <TextInput
                    value={limite}
                    onChangeText={setLimite}
                    keyboardType="numeric"
                    placeholder="Ejemplo: 1000"
                    style={style.limitInput}
                />

                <TouchableOpacity style={style.limitBtnGuardar} onPress={guardarLimite}>
                    <Text style={style.limitTxtGuardar}>Guardar límite</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
