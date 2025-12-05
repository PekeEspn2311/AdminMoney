import { StyleSheet } from "react-native"

export const transaccion = StyleSheet.create({
    transContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F5F5F5",
    },
    tituloTrans: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
        color: "#333",
    },

    campoTrans: {
        marginBottom: 18,
    },

    labelTrans: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 6,
        color: "#333",
    },
    selectInput: {
        backgroundColor: "#FFF",
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#DDD",
        elevation: 2,
        flex: 1,
        fontSize: 15,
    },

    selectRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    dropdownFlotante: {
        position: "absolute",
        top: 60,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 6,
        elevation: 10,
        zIndex: 999,
        maxHeight: 200, // Scroll interno
        borderWidth: 1,
        borderColor: "#ccc",
    },

    itemOpcion: {
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: "#eee",
    },

    itemOpcionTexto: {
        fontSize: 16,
    },
    btnGuardar: {
        backgroundColor: "#007AFF",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 25,
    },


    txtGuardar: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },

    inputTrans: {
        backgroundColor: "#FFF",
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#DDD",
        fontSize: 15,
        elevation: 2,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#E9ECEF",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },

});