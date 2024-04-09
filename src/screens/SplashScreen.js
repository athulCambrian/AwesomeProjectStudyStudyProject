import {ImageBackground, StyleSheet, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const image = require('../assets/Homosap_logo.png');
const SplashScreen = ({ navigation }) =>{
    return(
        <View style={styles.container}>
        <ImageBackground source={image}  style={styles.image}>
        <Button
        style={styles.button}
      title="Click to Start"
      onPress={() =>
        navigation.navigate('Profile')
      }
    />
        </ImageBackground>
      </View>
    );

   
      
  }
  const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    button:{
        position: 'absolute',
        bottom:0,
        left:0,
    },
    image: {
        width: 300,
        height: 400,
      
    }
  });
  export default SplashScreen;

