import React, { useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/signin';

const Stack = createNativeStackNavigator();

const PublicRoutes = () => {
    const [loading, setLoading] = useState(true);

    return <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
}

export default PublicRoutes;