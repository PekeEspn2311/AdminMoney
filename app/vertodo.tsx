import TodosRegistros from "@/components/Todos";
import { vertodo } from "@/styles/vertodo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function(){
    return(
        <SafeAreaView>
            <View>
                <View>
                    <TouchableOpacity style={vertodo.backButton} onPress={() => router.push("/inicio")}>
                <Ionicons name="arrow-back" size={26} color="black" />
            </TouchableOpacity>
                </View>
                <TodosRegistros />
            </View>
        </SafeAreaView>
    );
}