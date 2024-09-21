import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'

const statusHeight = StatusBar.currentHeight || 0;

const Header = () => {
    const level = 1;
    const [silver, setSilver] = useState<number>(0);
    const [gold, setGold] = useState<number>(0);
    const [diamond, setDiamond] = useState<number>(0);
    return (
        <View style= {styles.Header}>
            <View>
                <Image source={require('@/assets/images/react-logo.png')} style={styles.ProfileImage} />
                <Text style={{ fontWeight: '600', color: '#00000' }}>
                    lvl.{level}
                </Text>
            </View>
            <View style={styles.coinsCo}>
                <View style={styles.coinsContainer}>
                    <Image source={require('@/assets/images/silver.png')} style={styles.Coins} />
                    <Text style={styles.CoinText}>{silver} </Text>
                </View>
                <View style={styles.coinsContainer}>
                    <Image source={require('@/assets/images/gold.png')} style={styles.Coins} />
                    <Text style={styles.CoinText}>{gold} </Text>
                </View>
                <View style={styles.coinsContainer}>
                    <Image source={require('@/assets/images/diamond.png')} style={{ height: 22, width: 30, marginLeft: 10 }} />
                    <Text style={styles.CoinText}>{diamond} </Text>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Header:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:statusHeight+10,
        paddingHorizontal:10,
        backgroundColor:'#EBEAEC',
    },
    ProfileImage: {
        height: 90,
        width: 90,
        borderWidth:1.5,
        borderColor:'#545255',
        borderRadius:15,
    },
    Coins: {
        height: 25,
        width: 30,
        marginLeft: 10,
    },
    coinsCo: {
        gap: 7
    },
    coinsContainer: {
        flexDirection: 'row',
        backgroundColor: 'black',
        width: 150,
        height: 30,
        paddingVertical: 1,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    CoinText: {
        backgroundColor: 'white',
        width: '70%',
        borderRadius: 10,
        height: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'semibold',
    }
})