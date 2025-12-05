import { StyleSheet } from "react-native"

export const registro = StyleSheet.create({

    registroContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F5F5F5",
    },

    campoContainer: {
        marginBottom: 15,
    },

    labelTexto: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 5,
        color: "#333",
    },

    inputRegistro: {
        backgroundColor: "#FFF",
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#DDD",
        fontSize: 15,
        elevation: 2,
    }, eyeButtonRegistro: {
        position: "absolute",
        right: 15,
        top: 38,
    },

    textoAdicional: {
        fontSize: 12,
        marginTop: 5,
        color: "#666",
    },
    checkboxContainerRegistro: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },

    textcheckRegistro: {
        fontSize: 14,
        color: "#333",
    },
    btnRegistrar: {
        backgroundColor: "#007AFF",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
    },

    txtBtnRegistrar: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
    },

});

