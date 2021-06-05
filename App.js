import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import CarItem from './Components/CarItem/CarItem';
import CarsList from './Components/CarsList/CarsList';
import Header from './Components/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem name={"Model 3"} tagLine={"Order Online For"} tagLineCTA={"Touchless Delivery"} image={require('./assets/images/Model3.jpeg')}/> */}
      <Header/>
      <CarsList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
