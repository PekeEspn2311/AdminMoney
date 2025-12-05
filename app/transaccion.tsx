import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { doc, setDoc } from "firebase/firestore";
import { auth, database } from "../src/config/firebase";
import { router } from "expo-router";
import { transaccion } from "@/styles/transaccion";

export default function Transaccion() {
    const [tipo, setTipo] = useState(false);
    const [selectedTipo, setSelectedTipo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [selectedCat, setSelectedCat] = useState("");
    const [cat, setCat] = useState(false);
    const [monto, setMonto] = useState("");

    const tipos = ["Ingreso", "Egreso"];
    const categoria = ["Comida", "Salud", "Transporte", "Educación", "Entretenimiento", "Hogar", "Ropa", "Deudas", "Otros"];

    const user = auth.currentUser;
    if (!user) {
        alert("Debes iniciar sesión");
        return;
    }
    const uid = user.uid;

    const handleChange = (text: string) => {
        const formatted = text.replace(/[^0-9.]/g, "");
        setMonto(formatted);
    };

    const handleSelect = (option: string) => {
        setSelectedTipo(option);
        setTipo(false);
    };

    const handleSelectCategoria = (category: string) => {
        setSelectedCat(category);
        setCat(false);
    };

    const handleGuardar = async () => {
        if (!selectedTipo || !selectedCat || !monto || !descripcion) {
            alert("Por favor completa todos los campos");
            return;
        }

        const numericMonto = parseFloat(monto);

        const nuevaTransaccion = {
            uid,
            tipo: selectedTipo,
            categoria: selectedCat,
            monto: numericMonto,
            descripcion,
            fecha: new Date(),
        };

        try {
            await setDoc(doc(database, "transacciones", Date.now().toString()), nuevaTransaccion);

            alert("Transacción guardada correctamente");
            setSelectedTipo("");
            setSelectedCat("");
            setMonto("");
            setDescripcion("");
        } catch (error) {
            console.error("Error guardando transacción: ", error);
            alert("Ocurrió un error al guardar la transacción");
        }
    };

    return (
        <SafeAreaView style={transaccion.transContainer}>
            <TouchableOpacity style={transaccion.backButton} onPress={() => router.push("/inicio")}>
                <Ionicons name="arrow-back" size={26} color="black" />
            </TouchableOpacity>
            <Text style={transaccion.tituloTrans}>Nueva Transacción</Text>

            <View>

                {/* Tipo */}
<View style={[transaccion.campoTrans, { position: "relative" }]}>
    <Text style={transaccion.labelTrans}>Tipo de transacción</Text>

    <TouchableOpacity onPress={() => setTipo(!tipo)}>
        <View style={transaccion.selectRow}>
            <TextInput
                placeholder="Selecciona tipo"
                value={selectedTipo}
                editable={false}
                style={transaccion.selectInput}
            />
            <Feather
                name={tipo ? "chevron-up" : "chevron-down"}
                size={22}
                color="black"
            />
        </View>
    </TouchableOpacity>

    {tipo && (
        <View style={transaccion.dropdownFlotante}>
            <FlatList
                data={tipos}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelect(item)} style={transaccion.itemOpcion}>
                        <Text style={transaccion.itemOpcionTexto}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )}
</View>


                {/* Monto */}
                <View style={transaccion.campoTrans}>
                    <Text style={transaccion.labelTrans}>Monto</Text>
                    <TextInput
                        placeholder="0.00"
                        value={monto}
                        onChangeText={handleChange}
                        keyboardType="decimal-pad"
                        style={transaccion.inputTrans}
                    />
                </View>

                {/* Descripción */}
                <View style={transaccion.campoTrans}>
                    <Text style={transaccion.labelTrans}>Descripción</Text>
                    <TextInput
                        onChangeText={setDescripcion}
                        value={descripcion}
                        placeholder="Tacos, Netflix, Gym"
                        style={transaccion.inputTrans}
                    />
                </View>

                {/* Categoría */}
                <View style={transaccion.campoTrans}>
                    <Text style={transaccion.labelTrans}>Categoría</Text>

                    <TouchableOpacity onPress={() => setCat(!cat)}>
                        <View style={transaccion.selectRow}>
                            <TextInput
                                placeholder="Selecciona categoría"
                                value={selectedCat}
                                editable={false}
                                style={transaccion.selectInput}
                            />

                            <Feather
                                name={cat ? "chevron-up" : "chevron-down"}
                                size={22}
                                color="black"
                            />
                        </View>
                    </TouchableOpacity>

                    {cat && (
                        
                        <View style={transaccion.dropdownFlotante}>
                            <FlatList
                                data={categoria}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => handleSelectCategoria(item)} style={transaccion.itemOpcion}>
                                        <Text style={transaccion.itemOpcionTexto}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    )}
                </View>

                {/* Guardar */}
                <TouchableOpacity style={transaccion.btnGuardar} onPress={handleGuardar}>
                    <Text style={transaccion.txtGuardar}>Guardar</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
