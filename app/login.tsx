import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { index } from '@/styles/index'
import React from 'react';
import { router } from 'expo-router';
import Entypo from "@expo/vector-icons/Entypo";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [ocultar, setOcultar] = React.useState(true);

    

    const iniciarSesion = async () => {
        if (!email || !password) {
            Alert.alert("Campos incompletos", "Por favor ingresa tu correo y contraseña.");
            return;
        }

        try {
            const res = await signInWithEmailAndPassword(auth, email, password);


            await AsyncStorage.setItem("user", JSON.stringify({
                uid: res.user.uid,
                email: res.user.email
            }));

            Alert.alert("Inicio exitoso", `Bienvenido de nuevo!`);
            router.replace("/(tabs)/inicio");
        } catch (error) {
            console.error(error);
            Alert.alert("Error de inicio", "Correo o contraseña incorrectos.");
        }
    };

    return (
        <SafeAreaView style={index.container}>

            {/* Encabezado del Login */}
            <View style={index.loginHeader}>
                <Text style={index.loginTitle}>Bienvenido de nuevo</Text>
                <Text style={index.loginSubtitle}>Inicia sesión para continuar</Text>
            </View>

            {/* Formulario */}
            <View style={index.loginForm}>

                {/* Correo */}
                <View style={index.loginInputGroup}>
                    <Text style={index.loginLabel}>Correo Electrónico</Text>
                    <TextInput
                        style={index.loginInput}
                        onChangeText={setEmail}
                        value={email}
                        placeholder='tu@correo.com'
                        placeholderTextColor="#ADB5BD"
                    />
                </View>

                {/* Contraseña */}
                <View style={index.loginInputGroup}>
                    <Text style={index.loginLabel}>Contraseña</Text>

                    <View>
                        <TextInput
                            style={index.loginInput}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={ocultar}
                            placeholder='••••••••'
                            placeholderTextColor="#ADB5BD"
                        />

                        <TouchableOpacity
                            onPress={() => setOcultar(!ocultar)}
                            style={index.loginEyeButton}
                        >
                            <Entypo
                                name={ocultar ? 'eye' : 'eye-with-line'}
                                size={20}
                                color="#666"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            {/* Botones */}
            <View style={index.loginButtons}>

                <TouchableOpacity style={index.loginBtnPrimary} onPress={iniciarSesion}>
                    <Text style={index.loginBtnText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <Text style={index.loginSeparator}>o</Text>

                <TouchableOpacity
                    style={index.loginBtnSecondary}
                    onPress={() => router.push('/registro')}
                >
                    <Text style={index.loginBtnTextSecondary}>Registrarte</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}
