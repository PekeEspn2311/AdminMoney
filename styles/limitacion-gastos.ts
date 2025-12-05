import { StyleSheet } from "react-native";

export const limitacionGastos = StyleSheet.create({

    limitContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
},

limitTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1B263B",
},

limitCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
},
limitLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 6,
    color: "#333",
},
dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 14,
    borderRadius: 10,
    elevation: 2,
},

dropdownButtonText: {
    fontSize: 16,
    color: "#333",
},
dropdownContainer: {
    marginTop: 6,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    maxHeight: 240,
    elevation: 4,
    overflow: "hidden",
},

dropdownItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
},

dropdownItemText: {
    fontSize: 16,
    color: "#333",
},
limitInput: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 20,
    elevation: 1,
},
limitBtnGuardar: {
    backgroundColor: "#4C6EF5",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
},

limitTxtGuardar: {
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