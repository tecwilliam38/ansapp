import { View, Text, TouchableOpacity, ImageBackground, Image, StatusBar, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { homeStyles } from './style';
import api from '../../context/api';
import { useAuth } from '../../context/auth';

import Appointment from '../../components/appointment/index';



export default function Home(props) {
  const { container, buttonLine, headerText, text, buttonBg, bgHomeStyle, headerBg, imageHeader, headerTextTop } = homeStyles;
  const [appointments, setAppointments] = useState([]);
  const [idTecnico, setIdTecnico] = useState(user); // Default value for idTecnico

  const { user, signOut } = useAuth();
  // const idTecnico = user?.id_tecnico || 1; // Use a default value if id_tecnico is not available

  async function LoadData() {
    try {
      const response = await api.get("/appointments/listar/tecnico",
        {
          headers: { Authorization: `Bearer ${user.token}` },
          params: { id_tecnico: idTecnico }
        }
      );
      if (response.data)
        setAppointments(response.data);

    } catch (error) {
      if (error.response?.data.error)
        Alert.alert(error.response.data.error)
    }
  }

  async function deleteData(id_appointment) {
    try {
       const response = await api.delete("/appointments/" + id_appointment, {
          headers: { Authorization: `Bearer ${user.token}` }
      });
      if (response.data?.id_appointment)
        LoadData();
    } catch (error) {
      if (error.response?.data.error)
        Alert.alert(error.response.data.error)
    }
  }
  useEffect(() => {
    LoadData();
  },);
  


  return (
    <>
      <View style={headerBg}>
        <ImageBackground style={imageHeader} source={require("../../assets/logo.png")}>
          <Text style={headerTextTop}>{user.email}</Text>
          <Text style={headerText}>V. 1.0.0</Text>
        </ImageBackground>
      </View>
      <View style={container}>
        <ImageBackground source={require("../../assets/bgHome.png")} style={bgHomeStyle}>
          <View style={buttonLine}>              
            <TouchableOpacity style={buttonBg} onPress={() => props.navigation.navigate("Services")}>
              <Image source={require("../../assets/chamados.png")} style={{ width: 100, height: 100 }} />
              <Text style={text}>Chamados Agendados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={buttonBg}>
              <Image source={require("../../assets/deslocamento.png")} style={{ width: 100, height: 100 }} />
              <Text style={text}>Em deslocamento</Text>
            </TouchableOpacity>
          </View>
          <View style={buttonLine}>
            <TouchableOpacity style={buttonBg}>
              <Image source={require("../../assets/clients.png")} style={{ width: 100, height: 100 }} />
              <Text style={text}>Clientes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={buttonBg} onPress={signOut}>
              <Image source={require("../../assets/config.png")} style={{ width: 100, height: 100 }} />
              <Text style={text}>Config</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  )
}