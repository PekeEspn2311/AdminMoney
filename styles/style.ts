import { StyleSheet } from "react-native"

export const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        padding: 25,
    },

    title: {
        fontSize: 26,
        color: "#212529",
        fontWeight: "bold",
        marginBottom: 20,
    },

    formTitle: {
        fontSize: 22,
        fontWeight: "600",
        color: "#212529",
        marginBottom: 20,
        textAlign: "center",
    },

    label: {
        fontSize: 16,
        color: "#495057",
        marginBottom: 6,
        fontWeight: "600",
    },

    itemText: {
        fontSize: 18,
        color: "#495057",
        marginBottom: 10,
    },

    separator: {
        marginVertical: 10,
        fontSize: 16,
        color: "#495057",
        textAlign: "center",
    },

    formContainer: {
        marginBottom: 40,
    },

    inputGroup: {
        marginBottom: 20,
    },

    input: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 14,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#DEE2E6",
        color: "#212529",
    },

    eyeButton: {
        position: "absolute",
        right: 15,
        top: 14,
    },

    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
        marginTop: 10,
    },

    buttonsContainer: {
        alignItems: "center",
    },

    btnPrimary: {
        backgroundColor: "#4C6EF5",
        paddingVertical: 14,
        paddingHorizontal: 25,
        borderRadius: 12,
        width: "100%",
        marginBottom: 10,
        alignItems: "center",
    },

    btnSecondary: {
        backgroundColor: "#339AF0",
        paddingVertical: 14,
        paddingHorizontal: 25,
        borderRadius: 12,
        width: "100%",
        alignItems: "center",
    },

    btnText: {
        fontSize: 17,
        fontWeight: "600",
        color: "white",
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
    inicioContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F5F5F5",
    },

    balanceContainer: {
        marginBottom: 20,
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 12,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    balanceTitulo: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#222",
    },

    ingresosEgresosBox: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
    },

    ingresoTexto: {
        fontSize: 16,
        fontWeight: "600",
        color: "green",
    },

    egresoTexto: {
        fontSize: 16,
        fontWeight: "600",
        color: "red",
    },

    chartContainer: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 12,
        elevation: 3,
        marginBottom: 20,
    },

    chartTitulo: {
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 16,
    },

    recientesScroll: {
        marginTop: 10,
    },

    recientesTitulo: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },

    verMasContainer: {
        marginTop: 10,
        alignItems: "center",
    },

    verMasTexto: {
        fontSize: 16,
        color: "#007AFF",
    },

    botonFlotanteContainer: {
        marginTop: 30,
        alignItems: "center",
    },

    cargandoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    cargandoTexto: {
        fontSize: 18,
    },
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
    },

    eyeButtonRegistro: {
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

    listaOpciones: {
        backgroundColor: "#FFF",
        marginTop: 5,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 2,
    },

    itemOpcion: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },

    itemOpcionTexto: {
        fontSize: 15,
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
    btnEliminar: {
        marginTop: 20,
        alignItems: "center"
    },
});
