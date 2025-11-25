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
            Alert.alert("Error de inicio", "Ocurrió un error al iniciar sesión.");
        }
    };

    return (
        <SafeAreaView style={style.container}>

            {/* Título principal */}
            <View>
                <Text style={style.title}>Toma el control de tus finanzas.</Text>
            </View>

            {/* Formulario */}
            <View style={style.formContainer}>
                
                <Text style={style.formTitle}>Bienvenido de Nuevo</Text>

                {/* Correo */}
                <View style={style.inputGroup}>
                    <Text style={style.label}>Correo Electrónico</Text>
                    <TextInput 
                        style={style.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder='tu@correo.com'
                        placeholderTextColor="#ADB5BD"
                    />
                </View>

                {/* Contraseña */}
                <View style={style.inputGroup}>
                    <Text style={style.label}>Contraseña</Text>
                    <View>
                        <TextInput 
                            style={style.input}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={ocultar}
                            placeholder='Ingresa tu contraseña'
                            placeholderTextColor="#ADB5BD"
                        />

                        <TouchableOpacity 
                            onPress={() => setOcultar(!ocultar)} 
                            style={style.eyeButton}
                        >
                            <Entypo 
                                name={ocultar ? 'eye' : 'eye-with-line'} 
                                size={20} 
                                color="gray" 
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            {/* Botones */}
            <View style={style.buttonsContainer}>
                <TouchableOpacity style={style.btnPrimary} onPress={iniciarSesion}>
                    <Text style={style.btnText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <Text style={style.separator}>O</Text>

                <TouchableOpacity style={style.btnSecondary} onPress={() => router.push('/registro')}>
                    <Text style={style.btnText}>Registrarte</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
