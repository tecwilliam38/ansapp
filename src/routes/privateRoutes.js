import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../context/constants.js";

// Pages
import { Image, StyleSheet } from "react-native";
import Home from "../screens/home";
import Main from "../screens/main/index.js";
import AbaCalendar from "../screens/appointments/index.js";


const Stack = createNativeStackNavigator()

function ProtectedRoutes() {
    const headerBg = require("../assets/anslogin.png");
    return <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        
        <Stack.Screen name="Main" component={Main} />
       
        <Stack.Screen name="Services" component={AbaCalendar}
            options={{
                headerBackground: () => (
                    <Image
                        style={StyleSheet.absoluteFill}
                        source={headerBg}
                    />
                ),
                headerTitle: "Serviços",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerTintColor: COLORS.white,
            }} />
        
        <Stack.Screen name="Agenda" component={Home} options={{
            headerTitle: "Fazer uma reserva",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTintColor: COLORS.blue
        }} />
    </Stack.Navigator>
}

export default ProtectedRoutes;