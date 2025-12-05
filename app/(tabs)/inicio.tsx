import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View, Dimensions, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { PieChart } from "react-native-chart-kit";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, database } from "../../src/config/firebase";
import UltimosRegistros from "@/components/recientes";
import { inicio } from "@/styles/inicio";
import { onAuthStateChanged } from "firebase/auth";

const screenWidth = Dimensions.get("window").width;

export default function Inicio() {
    const [ingresoTotal, setIngresoTotal] = useState<number | null>(null);
    const [egresoTotal, setEgresoTotal] = useState<number | null>(null);
    const balanceTotal = (ingresoTotal ?? 0) - (egresoTotal ?? 0);

    useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
        if (!user) return;

        const q = query(
            collection(database, "transacciones"),
            where("uid", "==", user.uid)
        );

        const unsubscribeFirestore = onSnapshot(q, (querySnapshot) => {
            let ingresos = 0;
            let egresos = 0;

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.tipo === "Ingreso") ingresos += data.monto || 0;
                if (data.tipo === "Egreso") egresos += data.monto || 0;
            });

            setIngresoTotal(ingresos);
            setEgresoTotal(egresos);
        });

        return () => unsubscribeFirestore();
    });

    return () => unsubscribeAuth();
}, []);

    if (ingresoTotal === null || egresoTotal === null) {
        return (
            <SafeAreaView style={inicio.cargandoContainer}>
                <Text style={inicio.cargandoTexto}>Cargando...</Text>
            </SafeAreaView>
        );
    }

    const chartData = [
        {
            name: "Ingresos",
            population: ingresoTotal > 0 ? ingresoTotal : 0.0001,
            color: "green",
            legendFontColor: "#000",
            legendFontSize: 14,
        },
        {
            name: "Egresos",
            population: egresoTotal > 0 ? egresoTotal : 0.0001,
            color: "red",
            legendFontColor: "#000",
            legendFontSize: 14,
        },
    ];

    return (
        <SafeAreaView style={inicio.inicioContainer}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 120 }}  // Deja espacio para el botón
            >
                <View style={inicio.balanceContainer}>
                    <Text style={inicio.balanceTitulo}>
                        Balance Total: ${balanceTotal.toFixed(2)}
                    </Text>
                </View>

                <View style={inicio.ingresosEgresosBox}>
                    <Text style={inicio.ingresoTexto}>Ingresos: ${ingresoTotal.toFixed(2)}</Text>
                    <Text style={inicio.egresoTexto}>Egresos: ${egresoTotal.toFixed(2)}</Text>
                </View>

                <View style={inicio.chartContainer}>
                    <Text style={inicio.chartTitulo}>Ingresos vs Egresos</Text>

                    <PieChart
                        data={chartData}
                        width={screenWidth - 60}
                        height={220}
                        accessor="population"
                        backgroundColor="transparent"
                        paddingLeft="25"
                        center={[0, 0]}
                        absolute
                        chartConfig={{
                            backgroundColor: "#fff",
                            backgroundGradientFrom: "#fff",
                            backgroundGradientTo: "#fff",
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            propsForLabels: {
                                fontSize: 12,
                            },
                            propsForBackgroundLines: {
                                stroke: "#fff",
                            },
                        }}
                        hasLegend={true}
                    />
                </View>

                <Text style={inicio.recientesTitulo}>Movimientos Recientes</Text>

                <View style={inicio.recientesWrapper}>
                    <UltimosRegistros />
                </View>



                <View style={inicio.verMasContainer}>
                    <TouchableOpacity onPress={() => router.push("/vertodo")}>
                        <Text style={inicio.verMasTexto}>Ver más</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={inicio.botonFlotanteContainer}>
                <TouchableOpacity onPress={() => router.push("/transaccion")}>
                    <AntDesign name="plus-circle" size={40} color="#000" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}
