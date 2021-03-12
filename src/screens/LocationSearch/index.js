import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'

import searchResults from '../../../assets/data/search'

const LocationSearchScreen = () => {

    const [inputText, setInputText] = useState('')
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate("Guest Screen")} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name="location-pin" size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default LocationSearchScreen


const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    textInput: {
        fontSize: 20,
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    iconContainer: {
        backgroundColor: '#e7e7e7',
        padding: 7,
        borderRadius: 10,
        marginRight: 15,
    },
    locationText: {

    }
})