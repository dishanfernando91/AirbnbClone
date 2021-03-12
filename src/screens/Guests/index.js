import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const GuestsScreen = () => {
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    const navigation = useNavigation()
    return (
        <View style={{ justifyContent: 'space-between', height: '100%' }}>
            <View>
                {/* Adult row */}
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Adults</Text>
                        <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            onPress={() => setAdults(Math.max(0, adults - 1))} //Math.max('minimum_value, function)
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>

                        <Pressable
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>

                </View>

                {/* Child Row */}
                <View style={styles.row}>

                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Children</Text>
                        <Text style={{ color: '#8d8d8d' }}>Ages 2 to 12</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            onPress={() => setChildren(Math.max(0, children - 1))} //Math.max('minimum_value, function)
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{children}</Text>

                        <Pressable
                            onPress={() => setChildren(children + 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>

                </View>

                {/* Infant Row */}
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Infants</Text>
                        <Text style={{ color: '#8d8d8d' }}>Under 2</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable
                            onPress={() => setInfants(Math.max(0, infants - 1))} //Math.max('minimum_value, function)
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{infants}</Text>

                        <Pressable
                            onPress={() => setInfants(infants + 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>

                </View>
            </View>

            <Pressable
                onPress={() => //check this
                    navigation.navigate('Home', {
                        screen: 'Explore',
                        params: {
                            screen: 'SearchResults'
                        }
                    })}
                style={{
                    marginBottom: 20,
                    backgroundColor: '#f15454',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 10,
                }}
            >
                <Text style={{
                    fontSize: 18,
                    color: 'white',
                    fontWeight: 'bold'
                }}>Search</Text>
            </Pressable>

        </View>
    )
}

export default GuestsScreen

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#676767'
    },


})