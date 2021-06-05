import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyleButton from '../StyleButton/StyleButton';
import styles from './styles';


const CarItem = (props) => {
    return(
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image}></ImageBackground>
            <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>Starting at $59,420</Text>
            </View>

            <StyleButton type="primary" content={"Custom Order"} onPress={() => {console.warn("custom order pressed")}}></StyleButton>
            <StyleButton type="secondary" content={"Existing Inventory"} onPress={() => {console.warn("Existing Inventory pressed")}}></StyleButton>
      </View>
    )
}

export default CarItem;