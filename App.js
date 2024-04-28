import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { BlurView } from "expo-blur";
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-web';
import { input } from '@tensorflow/tfjs';

const uri = "https://img.freepik.com/vector-gratis/patron-aseo-mascotas-dibujado-mano_23-2150016008.jpg?w=740&t=st=1714259908~exp=1714260508~hmac=726cd5c081bc414c82198c4e04f6f54a0ab2e5e7919a1f916ec1ce07b8a09603";
const profilePicture = require("./assets/pic.png");
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} resizeMode="cover" />
      
     
      
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width:"100%",
         height:"100%",


        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: 'purple', transform: [{ rotate: '25deg' }], position: 'absolute' }}></View>

      <View style={{ width: 100, height: 100, backgroundColor: 'blue',transform: [{ rotate: '25deg' }],top:120, position: 'absolute' }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: 'orange',bottom:120,transform: [{ rotate: '50deg' }], position: 'absolute' }}></View>
        <BlurView intensity={90} >
          
          <View style={styles.login}>
            <Image source={profilePicture} style={styles.profilePicture} />
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: "black" }}>
                E-mail
              </Text>
              <TextInput style={styles.input} placeholder="carinidemarchi@gmail.com" />
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: "black" }}>
                Password
              </Text>
              <TextInput style={styles.input} placeholder="password" secureTextEntry={true} />
            </View>
            <TouchableOpacity  style={[styles.button ,{backgroundColor:'#00CFEB90'}]} > 
          <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity   style={[styles.button ,{backgroundColor:'#6792f090'}]} > 
          <Text>Create Account</Text>
          </TouchableOpacity>
          </View>
        
        </BlurView>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
  },
  login: {
    width: 350,
    height: 500,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo semitransparente para visualizar el contenido
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',

  },

  profilePicture: {
    width: 100,
    height: 100,
    marginVertical: 30,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 50,

  },

  input: {
    width: 250,
    height: 40,
    padding: 10,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
    marginBottom: 20,
  },

  button : {
    width: 250,
    height: 40,
    borderRadius: 10,
    
    alignItems:"center",
    justifyContent:"center",
    marginVertical:10,
    borderWidth:1,
    borderColor:"fff"
  },
});
