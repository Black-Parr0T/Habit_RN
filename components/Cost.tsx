import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

interface Cost{
    coin:number;
    setCoin:(coin:number) => void;
}

const Cost:React.FC<Cost> = ({coin,setCoin}) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.text}>Cost</Text>
            <View style={styles.mainCont}>
                <TouchableOpacity style={styles.btn} onPress={()=>{setCoin(coin-1)}} >
                    <AntDesign name="caretdown" size={24} color="black"  />
                </TouchableOpacity>
                <View style={styles.coinCont}>
                    {/* <Text>{coin}</Text> */}
                    <Text>{coin}</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>{setCoin(coin+1)}}>
                    <AntDesign name="caretup" size={24} color="black"  />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cost;

const styles = StyleSheet.create({
    Container: {
        marginVertical: 20,
        
    },
    text: {
        color: '#B0CEF3',
        fontWeight: '500',
        fontSize: 17,
        marginBottom: 10,
    },
    mainCont: {
        flexDirection:'row',
        backgroundColor:'#DEEFF5',
        height:70,
    },
    coinImg: {},
    coinText: {

    },
    coinCont:{
        flexDirection:'row',
        width:'80%',
        alignItems:'center',
        justifyContent:'center',
    },
    btn:{
        backgroundColor:'#C9D0D3',
        height:'100%',
        justifyContent:'center',
        width:'10%',
        alignItems:'center'
    }
})