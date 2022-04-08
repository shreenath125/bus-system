import React,{useState} from 'react';
import {StyleSheet,View,Text,Button,TextInput,Alert} from 'react-native';
import PhoneInput from "react-native-phone-number-input";

const Details = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>NAME</Text>
            <TextInput style={styles.input} placeholder='Enter your name'></TextInput>
            <Text style={styles.txt}>MOBILE NO.</Text>
            <PhoneInput style={styles.num}/>
            <Text style={styles.txt}>DATE</Text>
            <TextInput style={styles.input} placeholder='Enter date(dd/mm/yyyy)'></TextInput>
            <View style={styles.btn}><Button onPress={() => Alert.alert("Ticket Booked successfully")} title="Submit"/></View>
        </View>
    )
}
const styles =StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    input: {
        width: '70%',
        paddingTop: 14,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 18,
        padding: 10,
        borderColor: 'blue',
    },
    num: {
        alignSelf: 'center',
        marginTop: '20%',
    },
    txt: {
        fontWeight: 'bold',
        marginTop: '20%',
    },
    btn: {
        marginTop: '10%',
    }
})

export default Details;