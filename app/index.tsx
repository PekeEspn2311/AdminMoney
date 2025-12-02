import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from '@/styles/style'
import React from 'react';
import { router } from 'expo-router';
import Entypo from "@expo/vector-icons/Entypo";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/config/firebase";

export default function index() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [ocultar, setOcultar] = React.useState(true);

    const iniciarSesion = async () => {
        if (!email || !password) {
            Alert.alert("Campos incompletos", "Por favor ingresa tu correo y contraseña.");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Inicio exitoso", `Bienvenido de nuevo!`);
            router.push("/inicio");
        } catch (error) {
            console.error(error);
            Alert.alert("Error de inicio", "Correo o contraseña incorrectos.");
        }
    };

    return (
        <SafeAreaView style={style.container}>

            {/* Encabezado del Login */}
            <View style={style.loginHeader}>
                <Text style={style.loginTitle}>Bienvenido de nuevo</Text>
                <Text style={style.loginSubtitle}>Inicia sesión para continuar</Text>
            </View>

            {/* Formulario */}
            <View style={style.loginForm}>

                {/* Correo */}
                <View style={style.loginInputGroup}>
                    <Text style={style.loginLabel}>Correo Electrónico</Text>
                    <TextInput 
                        style={style.loginInput}
                        onChangeText={setEmail}
                        value={email}
                        placeholder='tu@correo.com'
                        placeholderTextColor="#ADB5BD"
                    />
                </View>

                {/* Contraseña */}
                <View style={style.loginInputGroup}>
                    <Text style={style.loginLabel}>Contraseña</Text>

                    <View>
                        <TextInput 
                            style={style.loginInput}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={ocultar}
                            placeholder='••••••••'
                            placeholderTextColor="#ADB5BD"
                        />

                        <TouchableOpacity 
                            onPress={() => setOcultar(!ocultar)} 
                            style={style.loginEyeButton}
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
            <View style={style.loginButtons}>

                <TouchableOpacity style={style.loginBtnPrimary} onPress={iniciarSesion}>
                    <Text style={style.loginBtnText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <Text style={style.loginSeparator}>o</Text>

                <TouchableOpacity 
                    style={style.loginBtnSecondary} 
                    onPress={() => router.push('/registro')}
                >
                    <Text style={style.loginBtnTextSecondary}>Registrarte</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
}
