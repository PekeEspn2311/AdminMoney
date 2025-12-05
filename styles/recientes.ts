import { StyleSheet } from "react-native"

export const recientes = StyleSheet.create({


    registroItem: {
        padding: 16,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#e6e6e6",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 }
    },

    registroCategoria: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333"
    },

    registroDescripcion: {
        fontSize: 14,
        color: "#555",
        marginBottom: 4
    },

    registroTipo: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000"
    },

    registroMonto: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0A7F00",
        marginTop: 4
    },

    registroFecha: {
        fontSize: 12,
        color: "#777",
        marginTop: 4
    },
});