import { useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { database } from "../src/config/firebase";
import { style } from "@/styles/style";
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function DetalleTransaccion() {
  const { id } = useLocalSearchParams();
  const [transaccion, setTransaccion] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const obtenerTransaccion = async () => {
      const ref = doc(database, "transacciones", String(id));
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setTransaccion(snap.data());
      }
    };

    obtenerTransaccion();
  }, [id]);

const eliminarTransaccion = async () => {
    try {
      await deleteDoc(doc(database, "transacciones", String(id)));
      alert("Transacción eliminada exitosamente");
      router.push("/inicio");
    } catch (error) {
      console.error("Error eliminando transacción:", error);
      alert("No se pudo eliminar la transacción");
    }
  };

  if (!transaccion) {
    return (
      <SafeAreaView style={style.container}>
        <Text style={style.title}>Cargando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={style.container}>
      
      
      <TouchableOpacity style={style.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color="black" />
      </TouchableOpacity>

      <Text style={style.title}>Detalles de la transacción</Text>

     
      <View style={style.card}>
        <Text style={style.itemText}>
          <Text style={style.label}>Categoría: </Text>{transaccion.categoria}
        </Text>

        <Text style={style.itemText}>
          <Text style={style.label}>Monto: </Text>${transaccion.monto}
        </Text>

        <Text style={style.itemText}>
          <Text style={style.label}>Tipo: </Text>{transaccion.tipo}
        </Text>

        <Text style={style.itemText}>
          <Text style={style.label}>Descripción: </Text>{transaccion.descripcion}
        </Text>

        <Text style={style.itemText}>
          <Text style={style.label}>Fecha: </Text>
          {transaccion.fecha?.toDate().toLocaleString()}
        </Text>

        <View>
          <TouchableOpacity style={style.btnEliminar} onPress={eliminarTransaccion}>
            <EvilIcons name="trash" size={36} color="red" />
          </TouchableOpacity>
          
        </View>


      </View>

    </SafeAreaView>
  );
}
