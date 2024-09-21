import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';


interface formprops {
    title:string,
    value: string,
    setValue: (value: string) => void;
    placeHolder:string
}

const FormFill: React.FC<formprops> = ({title,value, setValue, placeHolder}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    return (
        <View style={styles.ffield}>
            <Text style={styles.iptitle}>
                {title}
            </Text>
            <View style={styles.ifield}>
            <TextInput style={styles.input} value={value} placeholder={placeHolder} onChangeText={setValue} secureTextEntry={title === 'Password' && !showPassword } />
            {title === 'Password' ? <TouchableOpacity onPress={()=>setShowPassword(!showPassword)} style={styles.eye} >
                <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-sharp'} size={22} color='#3710AD' style={styles.eye} />
            </TouchableOpacity> : null}
            </View>
        </View>
    )
}

export default FormFill;

const styles = StyleSheet.create({
    ffield:{
        width:'90%',
        margin:'auto',
        gap:2,
    },
    input:{
        fontSize:17,
        fontFamily:'monospace',
        flex:1,
        paddingHorizontal:5,
    },
    iptitle:{
        fontSize:17,
    },
    eye:{
        paddingRight:2,
    },
    ifield:{
        flexDirection:'row',
        width:'auto',
        borderBottomWidth:2,
        borderBottomColor:'black',
    }
})