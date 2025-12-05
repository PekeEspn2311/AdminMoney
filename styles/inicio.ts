import { StyleSheet } from "react-native"

export const inicio = StyleSheet.create({


    cargandoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    cargandoTexto: {
        fontSize: 18,
    },
    inicioContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F0F2F5",
    },
    balanceContainer: {
        marginBottom: 20,
        padding: 20,
        borderRadius: 16,
        backgroundColor: "#0a7ea4",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
        elevation: 6,
    },

    balanceTitulo: {
        fontSize: 26,
        fontWeight: "900",
        color: "#FFF",
        textAlign: "center",
    },
    ingresosEgresosBox: {
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.10,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },

    ingresoTexto: {
        fontSize: 18,
        fontWeight: "700",
        color: "#2ECC71",
        marginBottom: 6,
    },

    egresoTexto: {
        fontSize: 18,
        fontWeight: "700",
        color: "#E74C3C",
    },
    chartContainer: {
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 16,
        elevation: 4,
        marginBottom: 25,
        shadowColor: "#000",
        shadowOpacity: 0.10,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },

    chartTitulo: {
        textAlign: "center",
        marginBottom: 12,
        fontWeight: "800",
        fontSize: 18,
        color: "#2C3E50",
    },
    recientesTitulo: {
        fontSize: 20,
        fontWeight: "800",
        marginBottom: 12,
        color: "#2C3E50",
    },
    recientesWrapper: {
        maxHeight: 750,        // Limita el alto
        overflow: "hidden",    // Evita que el ScrollView se expanda
        width: "100%",         // Ocupa todo el ancho disponible
        marginBottom: 10,
    },
    verMasContainer: {
        marginTop: 5,
        alignItems: "center",
    },
    verMasTexto: {
        fontSize: 16,
        fontWeight: "600",
        color: "#4C6EF5",
    },
    botonFlotanteContainer: {
        position: "absolute",
        bottom: 25,
        right: 25,
        backgroundColor: "#0a7ea4",
        width: 65,
        height: 65,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 6,
    },



});