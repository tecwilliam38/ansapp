import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthContext } from '../context/auth.js';
import PublicRoutes from './publicRoutes.js';
import SignInScreen from '../screens/signin/index.js';
import Home from '../screens/home/index.js';

const Routes = (props) => {
    const { user } = useContext(AuthContext);

    return user ? <ProtectedRoutes />
        : <PublicRoutes />;    
}

export default Routes;
