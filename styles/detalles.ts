import { StyleSheet } from "react-native"

export const detalles = StyleSheet.create({
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
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#E9ECEF",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
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
    itemText: {
        fontSize: 18,
        color: "#495057",
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        color: "#495057",
        marginBottom: 6,
        fontWeight: "600",
    },
    btnEliminar: {
        marginTop: 20,
        alignItems: "center"
    },
});