import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const userData = {
  //   nome: dados.name,
  //   email: dados.email,
  //   token: dados.token, // token fictício
  // };
  const signIn = async (dados) => {    
      await AsyncStorage.setItem('@user_data', JSON.stringify(dados));
      console.log('Login bem-sucedido e dados armazenados!');
      setUser(dados);
      return true;
    };


    const signOut = async () => {
      try {
        await AsyncStorage.removeItem('@user_data');
      } catch (e) {
        console.error('Erro ao remover dados do usuário:', e);
      }
      // setUser(null);
    };

    useEffect(() => {
      const loadUserData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@user_data');
          if (jsonValue != null) {
            setUser(JSON.parse(jsonValue));
          }
        } catch (e) {
          console.error('Erro ao carregar dados do usuário:', e);
        }
      };

      loadUserData();
    }, []);

    return (
      <AuthContext.Provider value={{ user, signIn, signOut }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
  };
