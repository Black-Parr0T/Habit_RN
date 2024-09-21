import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

interface ValueProps {
    value: string;
    checked: boolean;
}

interface ChecklistProps {
    checklist: ValueProps[];
    setCheckList: React.Dispatch<React.SetStateAction<ValueProps[]>>;
}

const Checklist: React.FC<ChecklistProps> = ({ checklist, setCheckList }) => {

    const handleChInput = (value: string, index: number) => {
        const newCh = [...checklist];
        newCh[index].value = value;
        setCheckList(newCh);

        if (index === checklist.length - 1 && value.trim() !== '') {
            setCheckList([...checklist, { value: '', checked: false }]);
        }
    };

    const handleRemove = (index: number) => {
        if (index + 1 !== checklist.length) {
            const newCh = checklist.filter((_, i) => i !== index);
            setCheckList(newCh);
        }
    };

    const toggleChecked = (index: number) => {
        const newCh = [...checklist];
        newCh[index].checked = !newCh[index].checked;
        setCheckList(newCh);
    };
    

    return (
        <View style={{marginTop:20}}>
            <Text style={styles.text}>Checklist</Text>
            <View style={styles.chlistCont}>
                {checklist.map((chlist, index) => (
                    <View style={styles.chCont} key={index}>
                        <TouchableOpacity onPress={() => handleRemove(index)}>
                            <Entypo name={index === checklist.length - 1 ? 'plus' : 'cross'} color="#B0CEF3" size={22} />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.chInput}
                            placeholder="Create New Checklist"
                            value={chlist.value}
                            onChangeText={(text) => handleChInput(text, index)}
                            placeholderTextColor="#B0CEF3"
                        />
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Checklist

const styles = StyleSheet.create({
    text: {
        color: '#B0CEF3',
        fontWeight: '500',
        fontSize: 17,
        marginBottom: 10,
    },
    chlistCont: {
        gap: 5,
    },
    chCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#063D82',
        borderRadius: 10,
        height:30,
    },
    chInput: {
        fontSize:17,
        paddingVertical: 1,
        paddingHorizontal: 8,
        width: '90%',
        color: 'white',
    },
})
