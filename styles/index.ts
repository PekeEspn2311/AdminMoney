import { StyleSheet } from "react-native"

export const index = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        padding: 25,
    },
loginHeader: {
        marginBottom: 40,
        alignItems: "center",
    },
    loginTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1B263B",
        textAlign: "center",
    },

    loginSubtitle: {
        fontSize: 15,
        color: "#6C757D",
        marginTop: 6,
        textAlign: "center",
    },
    loginForm: {
        marginBottom: 35,
    },

    loginInputGroup: {
        marginBottom: 20,
    },

    loginLabel: {
        fontSize: 15,
        fontWeight: "600",
        color: "#495057",
        marginBottom: 6,
    },
    loginInput: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#D0D4DA",
        color: "#212529",
        elevation: 1,
    },
    loginEyeButton: {
        position: "absolute",
        right: 15,
        top: 16,
    },

    loginButtons: {
        alignItems: "center",
        marginTop: 10,
    },
    loginBtnPrimary: {
        backgroundColor: "#4C6EF5",
        paddingVertical: 14,
        borderRadius: 12,
        width: "100%",
        alignItems: "center",
        marginBottom: 8,
        elevation: 2,
    },

    loginBtnSecondary: {
        backgroundColor: "#E9ECEF",
        paddingVertical: 14,
        borderRadius: 12,
        width: "100%",
        alignItems: "center",
    },

    loginBtnText: {
        fontSize: 17,
        fontWeight: "600",
        color: "white",
    },

    loginBtnTextSecondary: {
        fontSize: 17,
        fontWeight: "600",
        color: "#495057",
    },
    loginSeparator: {
        marginVertical: 10,
        fontSize: 15,
        color: "#6C757D",
    },

});