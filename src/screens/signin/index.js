import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native'
import { useContext, useState } from 'react'
import { Input } from "react-native-elements";
// Icons
import Icon from "react-native-vector-icons/FontAwesome"
import IconEntypo from 'react-native-vector-icons/Entypo';
import { SignInStyles } from './style'
import Button from '../../components/button';
import api from '../../context/api';
import { AuthContext } from '../../context/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignInScreen() {

  const { container, containerBg, containerLogo, logo, titleText, bodyStyle, keyboardStyle, containerInput,
    input, footer, footerText, footerLink } = SignInStyles;
  const bgLogin = require("../../assets/anslogin.png");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const { setUser, signIn } = useContext(AuthContext);

  async function HandleSignin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/tecnicos/login", {
        email,
        password,
      })
        if (response.data) {
                //Guarda o token no cabeçário para reaproveitar na aplicação:
                api.defaults.headers.common['authorization'] = "Bearer " + response.data.token;
                signIn(response.data)
            }  
    } catch (error) {
      if (error.response?.data.error)
        console.log(error.response.data.error);
      alert("Login failed. Please check your credentials.");
    }
  }
  return (
    <>
      <ImageBackground source={bgLogin} style={containerBg}>
        <View style={container}>
          <Text style={titleText}>Seus problemas resolvidos</Text>
          <View style={bodyStyle} >
            <KeyboardAvoidingView behavior='padding'
              style={keyboardStyle}>
              <Input
                placeholderTextColor={"#222"}
                inputStyle={{ color: "#333", fontWeight: 'bold', marginLeft: 10, width: '100%' }}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
                leftIcon={<Icon
                  name='envelope'
                  size={22}
                  color='#222'
                />}
              />
              <Input
                placeholder='Password'
                placeholderTextColor={"#222"}
                inputStyle={{ color: "#333", fontWeight: 'bold', marginLeft: 10 }}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={showPass}
                leftIcon={
                  <IconEntypo
                    name={showPass ? "eye-with-line" : "eye"}
                    size={22}
                    color='#222'
                    onPress={() => setShowPass(!showPass)}
                  />
                }
              />
              <Button onPress={HandleSignin} text="Login" theme="primary" />
            </KeyboardAvoidingView>
          </View>
        </View>
      </ImageBackground>
    </>
  )
}