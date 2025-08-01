import { COLORS, FONT_SIZE } from "../../context/constants.js";

export const ButtonStyles = {
    btn: {
        width: "100%",
        borderRadius: 6,
        padding: 12,
        borderRadius: 12,
        marginBottom: 15,
    },
    primary: {
        backgroundColor: COLORS.green1,
        marginBottom: 10,
    },
    danger: {
        backgroundColor: COLORS.red1,
        marginBottom: 10,
    },
    text: {
        color: "#fff",
        fontSize: FONT_SIZE.md,
        textAlign: "center",
        fontWeight: "bold",
        textShadowColor: "#999",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
        textAlign: "center",
    }

}