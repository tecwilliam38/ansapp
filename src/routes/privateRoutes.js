

// Pages
import { Image, StyleSheet } from "react-native";
import Home from "../screens/home";
import AbaCalendar from "../screens/appointments/index.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Icons
import icon from "../context/icon.js";
import { COLORS } from "../context/constants.js";

const Tab = createBottomTabNavigator();

function ProtectedRoutes() {

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
                            borderWidth: focused ? 2 : 0,
                            borderRadius: focused ? 12.5 : 0,
                            opacity: focused ? 1 : 0.8
                        }
                    } />
                }
            }} />
    
            <Tab.Screen name="Agenda" component={AbaCalendar} options={{
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
                            borderWidth: focused ? 2 : 0,
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
                            borderWidth: focused ? 2 : 0,
                            borderRadius: focused ? 12.5 : 0,
                            opacity: focused ? 1 : 0.8,
                            color: focused ? COLORS.red : COLORS.red,
                        }
                    } />
                }
            }} />
        </Tab.Navigator>
}

export default ProtectedRoutes;