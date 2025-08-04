import { COLORS, FONT_SIZE } from "../../context/constants";


export const styles = {
    appointment: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.gray4,
        borderRadius: 12,
        marginBottom: 10,
        shadowColor: COLORS.gray1,
        shadowOffiset: { width: 1, height: 2 },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        // alignItems:"center"
    },
    headerBg: {
        width: "100%",
        height: 100,
    },

    imageHeader: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-end",
        resizeMode: "cover",
        position: "relative",
        flexDirection: "row",
        width: "100%",
    },
    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginBottom: 2,
    },
    specialty: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginBottom: 4
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    bookingDate: {
        fontSize: FONT_SIZE.sm - 1,
        color: COLORS.gray2,
        marginTop: 3
    },
    bookingHour: {
        fontSize: FONT_SIZE.sm - 2,
        color: COLORS.gray2,
        marginTop: 3
    },
    booking: {
        flexDirection: "row"
    },
    containerBooking: {
        flex: 1
    },
    containerButton: {
        marginTop: 15,
    },
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: COLORS.gray5
    },
    headerText: {
        textAlign: "right",
        paddingRight: 10,
        paddingBottom: 5,
        color: "#fff",
    },
    headerTextTop: {
        textAlign: "left",
        justifyContent: "flex-start",
        color: "#fff",
        fontSize: 16,
        paddingBottom: 5,
        paddingLeft: 10,
    },
}