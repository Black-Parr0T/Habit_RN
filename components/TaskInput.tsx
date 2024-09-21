import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'


interface inputProps{
    multiline: boolean;
    title: string;
    setValue: (value: string) => void;
    value: string
}
const TaskInput: React.FC<inputProps> = ({title, multiline=false, setValue ,value}) => {
  return (
    <View style={styles.ipCont}>
      <Text style={{color:'#B0CEF3',}}>{title}</Text>
      <TextInput style={styles.input} onChangeText={setValue} multiline={multiline} numberOfLines={multiline ? 3 : 1} textAlignVertical='top' value={value} />
    </View>
  )
}

export default TaskInput;

const styles = StyleSheet.create({
    input:{
        paddingVertical:2,
        paddingHorizontal:1,
        width:'98%',
        margin:'auto',
        color:'#ffffff',
    },
    ipCont:{
        backgroundColor:'#063D82',
        paddingVertical:4,
        paddingHorizontal:5,
        borderRadius:10,
    }
})