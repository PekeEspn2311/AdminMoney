import { style } from "@/styles/style";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Configuracion() {
    return (
        <SafeAreaView style={style.configContainer}>
            <View style={style.configCard}>

                <Text style={style.configTitle}>Configuración</Text>

                <TouchableOpacity 
                    style={style.configButton} 
                    onPress={() => router.push("/usuario")}
                >
                    <Text style={style.configButtonText}>Información del Usuario</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={style.configButton} 
                    onPress={() => router.push("/agregarcat")}
                >
                    <Text style={style.configButtonText}>Agregar Categoría</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={style.configButton} 
                    onPress={() => router.push("/limitaciongastos")}
                >
                    <Text style={style.configButtonText}>Limitaciones de gastos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.btnCerrar}onPress={() => router.push("/")}>
                    <Text style={style.configButtonText}>Cerrar Sesión</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
