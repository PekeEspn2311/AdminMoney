import { configuracion } from "@/styles/configuracion";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Configuracion() {
    return (
        <SafeAreaView style={configuracion.configContainer}>
            <View style={configuracion.configCard}>

                <Text style={configuracion.configTitle}>Configuración</Text>

                <TouchableOpacity 
                    style={configuracion.configButton} 
                    onPress={() => router.push("/usuario")}
                >
                    <Text style={configuracion.configButtonText}>Información del Usuario</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={configuracion.configButton} 
                    onPress={() => router.push("/agregarCategoria")}
                >
                    <Text style={configuracion.configButtonText}>Agregar Categoría</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={configuracion.configButton} 
                    onPress={() => router.push("/limitacionGastos")}
                >
                    <Text style={configuracion.configButtonText}>Limitaciones de gastos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={configuracion.btnCerrar}onPress={() => router.push("/login")}>
                    <Text style={configuracion.configButtonText}>Cerrar Sesión</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
