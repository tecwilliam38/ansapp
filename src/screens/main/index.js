import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
// import AbaProfileScreen from "../abaprofile";
import { COLORS } from "../../context/constants.js";

// Abas
// import AbaCalendar from "../abacalendar";
import icon from "../../context/icon.js";
import Home from "../home/index.js";
// import AbaHome from "../abahome";


const Tab = createBottomTabNavigator();

function Main() {
    return <Tab.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: COLORS.green3 },
        headerShown: false,
    }}>
        <Tab.Screen name="Calendar" component={Home} options={{
            tabBarShowLabel: false,
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => {
                return <Image source={icon.home} style={
                    {
                        width: 25,
                        height: 25,
                        textDecorationLine: focused ? "underline" : "none",
                        borderColor: focused ? COLORS.white : "transparent",
                        borderWidth: focused ? 1 : 0,
                        borderRadius: focused ? 12.5 : 0,
                        opacity: focused ? 1 : 0.8
                    }
                } />
            }
        }} />

        <Tab.Screen name="Home" component={Home} options={{
            headerTitleAlign: "center",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
                return <Image source={icon.calendar} style={
                    {
                        width: 25,
                        height: 25,
                        textDecorationLine: focused ? "underline" : "none",
                        borderColor: focused ? COLORS.white : "transparent",
                        borderWidth: focused ? 1 : 0,
                        borderRadius: focused ? 12.5 : 0,
                        opacity: focused ? 1 : 0.8,
                        color: focused ? COLORS.red : COLORS.red,
                    }
                } />
            }
        }} />
        <Tab.Screen name="Profile" component={Home} options={{
            headerTitleAlign: "center",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => {
                return <Image source={icon.profile} style={
                    {
                        width: 25,
                        height: 25,
                        textDecorationLine: focused ? "underline" : "none",
                        borderColor: focused ? COLORS.white : "transparent",
                        borderWidth: focused ? 1 : 0,
                        borderRadius: focused ? 12.5 : 0,
                        opacity: focused ? 1 : 0.8,
                        color: focused ? COLORS.red : COLORS.red,
                    }
                } />
            }
        }} />
    </Tab.Navigator>
}

export default Main;