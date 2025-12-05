import { StyleSheet } from "react-native"

export const agregarcategoria = StyleSheet.create({
    catContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
},

catHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
},

catTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#1B263B",
},

catForm: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
},

catLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
},

catInput: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 10,
    borderColor: "#DDD",
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 20,
    elevation: 1,
},

catButton: {
    backgroundColor: "#4C6EF5",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
},

catButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
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