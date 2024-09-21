import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const ShowCheckList = () => {
    return (
        <View style={styles.chdCont}>
            <Ionicons name="checkbox" size={24} color="black" style={styles.icon} />
            <Text style={styles.chtext}>ShowCheckListShowCheckList</Text>
        </View>
    )
}

export default ShowCheckList

const styles = StyleSheet.create({
    chdCont: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        height:'auto',
        alignItems:'center',
        paddingBottom:5
    },
    chtext: {
        width: '90%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontWeight:'500'
    },
    icon: {
        width: '10%',
        textAlign: 'center',
        alignSelf:'center'
    }
})