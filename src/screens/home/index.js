import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import { homeStyles } from './style';

export default function Home() {
  const { container, buttonLine, headerText, text, buttonBg, bgHomeStyle, headerBg, imageHeader } = homeStyles;
  return (
    <>
      <View style={headerBg}>
        <ImageBackground style={imageHeader} source={require("../../assets/logo.png")}>
          <Text style={headerText}>V. 1.0.0</Text>
        </ImageBackground>
      </View>
      <View style={container}>
        <ImageBackground source={require("../../assets/bgHome.png")} style={bgHomeStyle}>
          <View style={buttonLine}>
            <TouchableOpacity style={buttonBg}>
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
            <TouchableOpacity style={buttonBg}>
              <Image source={require("../../assets/config.png")} style={{ width: 100, height: 100 }} />
              <Text style={text}>Config</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  )
}