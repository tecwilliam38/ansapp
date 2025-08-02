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
        width: "100%",
        height: "30%",
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
        height: "110%",
        resizeMode: "stretch",
        justifyContent: "flex-start",
        paddingTop:30,
    },
    buttonBg: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "49%",
        height: 160,
        padding: 10,
        borderRadius: 15,
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        width: "110%",
        textShadowColor:"#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
})