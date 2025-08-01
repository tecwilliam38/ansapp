import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthContext } from '../context/auth.js';

// Routes.jsx
import PublicRoutes from './publicRoutes.js';
import ProtectedRoutes from './privateRoutes.js';

const Routes = (props) => {
    const { user } = useContext(AuthContext);

    return user ? <ProtectedRoutes />
        : <PublicRoutes />;    
}

export default Routes;
