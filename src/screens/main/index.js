import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";

// Abas
import Home from "../home/index.js";
import AbaCalendar from "../appointments/index.js";
import { COLORS } from "../../context/constants.js";


const Stack = createNativeStackNavigator();

function Main() {
        const headerBg = require("../assets/anslogin.png");

     return <Stack.Navigator screenOptions={{
          headerShown: false,
      }}>
          
          {/* <Stack.Screen name="Main" component={Main} /> */}
         
          <Stack.Screen name="Agenda" component={AbaCalendar}
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
          
          <Stack.Screen name="Profile" component={Home} options={{
              headerTitle: "Fazer uma reserva",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerTintColor: COLORS.blue
          }} />
      </Stack.Navigator>
}

export default Main;