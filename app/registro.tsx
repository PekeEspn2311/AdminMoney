import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Checkbox } from "react-native-paper";
import { registro } from "@/styles/registro";
import Entypo from "@expo/vector-icons/Entypo";
import { auth, database } from "../src/config/firebase";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { router } from "expo-router";

export default function Registro() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [ocultar, setOcultar] = React.useState(true);
    const [box, setBox] = React.useState(false);

    const crearregistro = async () => {
        if (!email || !password || !name) {
            Alert.alert("Campos incompletos", "Por favor llena todos los campos requeridos.");
            return;
        }

        if (!box) {
            Alert.alert("Términos", "Debes aceptar los términos y condiciones.");
            return;
        }

        try {
            // Crear usuario en Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Guardar datos del usuario en Firestore
            await setDoc(doc(database, "users", user.uid), {
                name,
                email,
                createdAt: new Date(),
            });

            // Categorías por defecto
            const categoriasBase = [
                "Transporte",
                "Hogar",
                "Educación",
                "Deudas",
                "Entretenimiento",
                "Salud",
                "Comida",
                "Ropa"
            ];

            // Colección de categorías
            const categoriaRef = collection(database, "categoria");

            // Guardar cada categoría con el UID del usuario y limite = 0
            for (const nombre of categoriasBase) {
                await addDoc(categoriaRef, {
                    nombre,
                    usuario_id: user.uid,
                    limite: 0   // ← ← ← AQUI SE AGREGA EL LIMITE INICIAL
                });
            }

            Alert.alert("Registro exitoso", `Bienvenido ${name}`);
            router.push("/inicio");

        } catch (error) {
            console.error(error);
            Alert.alert("Error de registro", "Ocurrió un error al registrarte.");
        }
    };

    return (
        <SafeAreaView style={registro.registroContainer}>

            <View style={registro.campoContainer}>
                <Text style={registro.labelTexto}>Nombre</Text>
                <TextInput
                    style={registro.inputRegistro}
                    onChangeText={setName}
                    value={name}
                    placeholder="Tu nombre"
                />
            </View>

            <View style={registro.campoContainer}>
                <Text style={registro.labelTexto}>Correo Electrónico</Text>
                <TextInput
                    style={registro.inputRegistro}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="correo@ejemplo.com"
                    keyboardType="email-address"
                />
            </View>

            <View style={registro.campoContainer}>
                <Text style={registro.labelTexto}>Contraseña *</Text>

                <TextInput
                    style={registro.inputRegistro}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={ocultar}
                    placeholder="Ingresa tu contraseña"
                />

                <TouchableOpacity
                    onPress={() => setOcultar(!ocultar)}
                    style={registro.eyeButtonRegistro}
                >
                    <Entypo
                        name={ocultar ? "eye" : "eye-with-line"}
                        size={20}
                        color="gray"
                    />
                </TouchableOpacity>

                <Text style={registro.textoAdicional}>
                    Usa 8 o más caracteres con números, letras y símbolos
                </Text>
            </View>

            <View style={registro.checkboxContainerRegistro}>
                <Checkbox
                    status={box ? "checked" : "unchecked"}
                    onPress={() => setBox(!box)}
                />
                <Text style={registro.textcheckRegistro}>
                    I agree to the Terms and Privacy Policy *
                </Text>
            </View>

            <TouchableOpacity style={registro.btnRegistrar} onPress={crearregistro}>
                <Text style={registro.txtBtnRegistrar}>Registrarse</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}
