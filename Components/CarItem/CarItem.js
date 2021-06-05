import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyleButton from '../StyleButton/StyleButton';
import styles from './styles';


const CarItem = (props) => {
    const {name, tagLine, tagLineCTA, image} = props;
    return(
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image}></ImageBackground>
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagLine} {' '} <Text style={styles.subtitleCTA}>{tagLineCTA}</Text></Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyleButton type="primary" content={"Custom Order"} onPress={() => {console.warn("custom order pressed")}}></StyleButton>
                <StyleButton type="secondary" content={"Existing Inventory"} onPress={() => {console.warn("Existing Inventory pressed")}}></StyleButton>
            </View>
            
        </View>
    )
}

export default CarItem;