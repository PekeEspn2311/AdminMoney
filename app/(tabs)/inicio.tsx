import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View, Dimensions, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { PieChart } from "react-native-chart-kit";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, database } from "../../src/config/firebase";
import UltimosRegistros from "@/components/recientes";
import { style } from "@/styles/style";

const screenWidth = Dimensions.get("window").width;

export default function Inicio() {
    const [ingresoTotal, setIngresoTotal] = useState<number | null>(null);
    const [egresoTotal, setEgresoTotal] = useState<number | null>(null);
    const balanceTotal = (ingresoTotal ?? 0) - (egresoTotal ?? 0);

    useEffect(() => {
        const user = auth.currentUser;
        if (!user) return;

        const q = query(collection(database, "transacciones"), where("uid", "==", user.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
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

        return () => unsubscribe();
    }, []);

    if (ingresoTotal === null || egresoTotal === null) {
        return (
            <SafeAreaView style={style.cargandoContainer}>
                <Text style={style.cargandoTexto}>Cargando...</Text>
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
        <SafeAreaView style={style.inicioContainer}>

            <View style={style.balanceContainer}>
                <Text style={style.balanceTitulo}>
                    Balance Total: ${balanceTotal.toFixed(2)}
                </Text>
            </View>

            <View style={style.ingresosEgresosBox}>
                <Text style={style.ingresoTexto}>Ingresos: ${ingresoTotal.toFixed(2)}</Text>
                <Text style={style.egresoTexto}>Egresos: ${egresoTotal.toFixed(2)}</Text>
            </View>

            <View style={style.chartContainer}>
                <Text style={style.chartTitulo}>Ingresos vs Egresos</Text>

                <PieChart
                    data={chartData}
                    width={screenWidth - 60}       // <-- más pequeño para que quepan los textos
                    height={220}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="25"               // <-- deja más espacio al lado derecho
                    center={[0, 0]}                // <-- centra el pastel
                    absolute
                    chartConfig={{
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#fff",
                        backgroundGradientTo: "#fff",
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        propsForLabels: {
                            fontSize: 12,          // <-- textos más compactos para que no salgan
                        },
                        propsForBackgroundLines: {
                            stroke: "#fff",
                        },
                    }}
                    hasLegend={true}
                />

            </View>

            <ScrollView style={style.recientesScroll} >
                <Text style={style.recientesTitulo}>Movimientos Recientes</Text>
                <UltimosRegistros />
            </ScrollView>

            <View style={style.verMasContainer}>
                <TouchableOpacity onPress={() => router.push("/vertodo")}>
                    <Text style={style.verMasTexto}>Ver más</Text>
                </TouchableOpacity>
            </View>

            <View style={style.botonFlotanteContainer}>
                <TouchableOpacity onPress={() => router.push("/transaccion")}>
                    <AntDesign name="plus-circle" size={40} color="#000" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
