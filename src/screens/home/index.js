import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
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
            <TouchableOpacity style={homeStyles.buttonBg}>
              <Text style={text}>Home Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.buttonBg}>
              <Text style={text}>Home Screen</Text>
            </TouchableOpacity>
          </View>
          <View style={buttonLine}>
            <TouchableOpacity style={homeStyles.buttonBg}>
              <Text style={text}>Home Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.buttonBg}>
              <Text style={text}>Home Screen</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  )
}