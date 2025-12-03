import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { auth, database } from "../src/config/firebase";
import { router } from "expo-router";
import { style } from "@/styles/style";

type Transaccion = {
    id: string;
    tipo: string;
    monto: number;
    fecha: any;
    categoria: string;
    descripcion: string;
};

export default function TodosRegistros() {
    const [registros, setRegistros] = useState<Transaccion[]>([]);

    useEffect(() => {
        const user = auth.currentUser;
        if (!user) return;

        const q = query(
            collection(database, "transacciones"),
            where("uid", "==", user.uid),
            orderBy("fecha", "desc")
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const trans: Transaccion[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                trans.push({
                    id: doc.id,
                    tipo: data.tipo,
                    monto: data.monto,
                    fecha: data.fecha,
                    categoria: data.categoria || "",
                    descripcion: data.descripcion || "",
                });
            });
            setRegistros(trans);
        });

        return () => unsubscribe();
    }, []);

    const renderItem = ({ item }: { item: Transaccion }) => (
        <View style={style.registroItem}>
            <TouchableOpacity onPress={() => router.push(`/detalles?id=${item.id}`)}>
                <Text style={style.registroCategoria}>{item.categoria}</Text>
                <Text style={style.registroDescripcion}>{item.descripcion}</Text>
                <Text style={style.registroTipo}>{item.tipo}</Text>
                <Text style={style.registroMonto}>${item.monto.toFixed(2)}</Text>
                <Text style={style.registroFecha}>
                    {item.fecha?.toDate ? item.fecha.toDate().toLocaleDateString() : ""}
                </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <FlatList
                data={registros}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                scrollEnabled={false}
                ListEmptyComponent={<Text>No hay registros aún.</Text>}
            />
        </View>
    );
}
