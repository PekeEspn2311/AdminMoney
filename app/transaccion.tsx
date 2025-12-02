import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { doc, setDoc } from "firebase/firestore";
import { auth, database } from "../src/config/firebase";
import { router } from "expo-router";
import { style } from "@/styles/style";

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
        <SafeAreaView style={style.transContainer}>
            <TouchableOpacity style={style.backButton} onPress={() => router.push("/inicio")}>
                <Ionicons name="arrow-back" size={26} color="black" />
            </TouchableOpacity>
            <Text style={style.tituloTrans}>Nueva Transacción</Text>

            <View>

                {/* Tipo */}
<View style={[style.campoTrans, { position: "relative" }]}>
    <Text style={style.labelTrans}>Tipo de transacción</Text>

    <TouchableOpacity onPress={() => setTipo(!tipo)}>
        <View style={style.selectRow}>
            <TextInput
                placeholder="Selecciona tipo"
                value={selectedTipo}
                editable={false}
                style={style.selectInput}
            />
            <Feather
                name={tipo ? "chevron-up" : "chevron-down"}
                size={22}
                color="black"
            />
        </View>
    </TouchableOpacity>

    {tipo && (
        <View style={style.dropdownFlotante}>
            <FlatList
                data={tipos}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelect(item)} style={style.itemOpcion}>
                        <Text style={style.itemOpcionTexto}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )}
</View>


                {/* Monto */}
                <View style={style.campoTrans}>
                    <Text style={style.labelTrans}>Monto</Text>
                    <TextInput
                        placeholder="0.00"
                        value={monto}
                        onChangeText={handleChange}
                        keyboardType="decimal-pad"
                        style={style.inputTrans}
                    />
                </View>

                {/* Descripción */}
                <View style={style.campoTrans}>
                    <Text style={style.labelTrans}>Descripción</Text>
                    <TextInput
                        onChangeText={setDescripcion}
                        value={descripcion}
                        placeholder="Tacos, Netflix, Gym"
                        style={style.inputTrans}
                    />
                </View>

                {/* Categoría */}
                <View style={style.campoTrans}>
                    <Text style={style.labelTrans}>Categoría</Text>

                    <TouchableOpacity onPress={() => setCat(!cat)}>
                        <View style={style.selectRow}>
                            <TextInput
                                placeholder="Selecciona categoría"
                                value={selectedCat}
                                editable={false}
                                style={style.selectInput}
                            />

                            <Feather
                                name={cat ? "chevron-up" : "chevron-down"}
                                size={22}
                                color="black"
                            />
                        </View>
                    </TouchableOpacity>

                    {cat && (
                        
                        <View style={style.dropdownFlotante}>
                            <FlatList
                                data={categoria}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => handleSelectCategoria(item)} style={style.itemOpcion}>
                                        <Text style={style.itemOpcionTexto}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    )}
                </View>

                {/* Guardar */}
                <TouchableOpacity style={style.btnGuardar} onPress={handleGuardar}>
                    <Text style={style.txtGuardar}>Guardar</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
