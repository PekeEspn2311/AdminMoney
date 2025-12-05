import { StyleSheet } from "react-native"

export const configuracion = StyleSheet.create({

configContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
},

configCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
},

configTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1B263B",
    marginBottom: 25,
    textAlign: "center",
},

configButton: {
    backgroundColor: "#4C6EF5",
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
},
configButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
},
btnCerrar: {
        backgroundColor: "#ff0000ff",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 25,
    },
});