import { StyleSheet } from "react-native";


export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "baseline",                
    },
    buttonLine: {
        display: "flex",
        flexDirection: "row",
        width: "99%",
        height: "20%",
        alignItems: "flex-start",
        justifyContent: "space-around",
        marginHorizontal: "auto",
        marginBottom: 20,
        padding: 5,
    },
    headerBg: {
        width: "100%",
        height: 100,
    },
    imageHeader: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        resizeMode: "cover"
    },
    headerText:{
        textAlign:"right",
        paddingRight:10,
        paddingBottom:10,
        color:"#fff",
    },
    bgHomeStyle:{
        display: "flex",
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
        justifyContent: "flex-start",
        paddingTop:30,
    },
    buttonBg: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "45%",
        height: 150,
        padding: 15,
        textAlign: "center",
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
})