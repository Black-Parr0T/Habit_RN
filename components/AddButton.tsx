import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {  usePathname } from 'expo-router';
import Create from './Create';
import { useState } from 'react';

const AddButton = () => {
    const pathname = usePathname();
    const [editMode, setEditMode] = useState<boolean>(false)
    const addClick = () => {
        setEditMode(!editMode)
    }
    return (
        <>
          {editMode ? (
            <Create path={pathname} setMode={setEditMode} editMode={editMode} />
          ) : (
            <View style={styles.addbtn}>
              <Ionicons name='add' size={30} color='#ffffff' onPress={addClick} />
            </View>
          )}
        </>
      );
}

export default AddButton;

const styles = StyleSheet.create({
    addbtn: {
        position: 'absolute',
        zIndex: 1,
        bottom: 80,
        right: 25,
        backgroundColor: '#8E08B7',
        padding: 10,
        borderRadius: 10,
    }
})