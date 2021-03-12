import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    ImageBackground,
    Text,
    Pressable,
} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';


const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/wallpaper.jpg')}
                style={styles.image}
            >
                <Pressable
                    style={styles.searchButton}
                    onPress={() => navigation.navigate('Destination Search')}
                >
                    <Fontisto name="search" color={"#f15454"} size={25} />
                    <Text style={styles.buttonText}>Where are you going?</Text>
                </Pressable>

                <Text style={styles.title}>Go Near</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => console.log('Explore Btn clicked')}
                >
                    <Text style={styles.buttonText}>Explore nearby stays.</Text>
                </Pressable>
            </ImageBackground>

        </View>
    )
}

export default HomeScreen
