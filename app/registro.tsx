import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Checkbox } from "react-native-paper";
import { style } from "@/styles/style";
import Entypo from "@expo/vector-icons/Entypo";
import { auth, database } from "../src/config/firebase";
import { doc, setDoc } from "firebase/firestore";
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
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(database, "users", user.uid), {
                name,
                email,
                createdAt: new Date(),
            });

            Alert.alert("Registro exitoso", `Bienvenido ${name}`);
            router.push("/inicio");
        } catch (error) {
            console.error(error);
            Alert.alert("Error de registro", "Ocurrió un error al registrarte.");
        }
    };

    return (
        <SafeAreaView style={style.registroContainer}>

            <View style={style.campoContainer}>
                <Text style={style.labelTexto}>Nombre</Text>
                <TextInput
                    style={style.inputRegistro}
                    onChangeText={setName}
                    value={name}
                    placeholder="Tu nombre"
                />
            </View>

            <View style={style.campoContainer}>
                <Text style={style.labelTexto}>Correo Electrónico</Text>
                <TextInput
                    style={style.inputRegistro}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="correo@ejemplo.com"
                    keyboardType="email-address"
                />
            </View>

            <View style={style.campoContainer}>
                <Text style={style.labelTexto}>Contraseña *</Text>

                <TextInput
                    style={style.inputRegistro}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={ocultar}
                    placeholder="Ingresa tu contraseña"
                />

                <TouchableOpacity
                    onPress={() => setOcultar(!ocultar)}
                    style={style.eyeButtonRegistro}
                >
                    <Entypo
                        name={ocultar ? "eye" : "eye-with-line"}
                        size={20}
                        color="gray"
                    />
                </TouchableOpacity>

                <Text style={style.textoAdicional}>
                    Usa 8 o más caracteres con números, letras y símbolos
                </Text>
            </View>

            <View style={style.checkboxContainerRegistro}>
                <Checkbox
                    status={box ? "checked" : "unchecked"}
                    onPress={() => setBox(!box)}
                />
                <Text style={style.textcheckRegistro}>
                    I agree to the Terms and Privacy Policy *
                </Text>
            </View>

            <TouchableOpacity style={style.btnRegistrar} onPress={crearregistro}>
                <Text style={style.txtBtnRegistrar}>Registrarse</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}
