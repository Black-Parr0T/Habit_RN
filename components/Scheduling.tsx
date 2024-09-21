import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TextInput } from 'react-native';

interface SchedulingProps{
  Repeats:string;
  repeatTime:number;
  setRepeats: (Repeat:string) => void
  setRepeatTime: (repeartime:number) => void
}

const Scheduling: React.FC<SchedulingProps> = ({ repeatTime,Repeats,setRepeatTime,setRepeats}) => {
  // const [Repeats, setRepeats] = useState<string>('Daily');
  // const [repeatTime, setRepeartime] = useState<number>(1);
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<string>('Days');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scheduling</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <View style={{ marginHorizontal: 10, width: '40%' }}>
          <View style={styles.dropCont}>
            <Text style={styles.subtext}>Repeats</Text>
            <View style={styles.ddCont}>
              <TouchableOpacity
                onPress={() => setDisplayMenu(!displayMenu)}
                style={{ width: '70%' }}
                activeOpacity={0.7}
              >
                <Text style={{ fontWeight: '500', color: '#193239' }}> {Repeats} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setDisplayMenu(!displayMenu)}
                activeOpacity={0.7}
              >
                <MaterialIcons name="arrow-drop-down" size={24} color="#B0CEF3" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={displayMenu ? styles.menu : styles.hideMenu}>
            <TouchableOpacity
              onPress={() => { setRepeats('Daily'); setRepeat('Days'); setDisplayMenu(false) }}
              activeOpacity={0.7}
            >
              <Text style={{ fontWeight: '500', color: '#193239' }}>Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { setRepeats('Weekly'); setRepeat('Weeks'); setDisplayMenu(false) }}
              activeOpacity={0.7}
            >
              <Text style={{ fontWeight: '500', color: '#193239' }}>Weekly</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { setRepeats('Monthly'); setRepeat('Months'); setDisplayMenu(false) }}
              activeOpacity={0.7}
            >
              <Text style={{ fontWeight: '500', color: '#193239' }}>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { setRepeats('Yearly'); setRepeat('Years'); setDisplayMenu(false) }}
              activeOpacity={0.7}
            >
              <Text style={{ fontWeight: '500', color: '#193239' }}>Yearly</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginHorizontal: 10, width: '40%' }}>
          <View style={styles.dropCont}>
            <Text style={styles.subtext}>Every</Text>
            <View style={styles.ddCont}>
              <TextInput
                inputMode='numeric'
                style={styles.input}
                value={String(repeatTime)}
                onChangeText={(text) => setRepeatTime(Number(text))}
              />
              <Text style={{}}>{repeat}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Scheduling

const styles = StyleSheet.create({
  container:{
    marginTop:20,
  },
    text: {
        color: '#B0CEF3',
        fontWeight: '500',
        fontSize: 17,
        marginBottom: 10,
    },
  subtext: {
    fontFamily: 'monospace',
    fontWeight: '600',
    color: '#B0CEF3'
  },
  ddCont: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dropCont: {
    backgroundColor: '#72ACBE',
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 10,
    justifyContent: 'center',
    paddingVertical: 5,
  },
  menu: {
    position: 'absolute',
    backgroundColor: '#D0EAF2',
    width: '80%',
    alignItems: 'center',
    gap: 10,
    top: 55,
    zIndex: 2,
    borderRadius: 4,
    paddingVertical: 5,
  },
  hideMenu: {
    display: 'none'
  },
  input: {
    width: '50%',
    borderBottomWidth: 2,
    paddingLeft: 5,
    borderBottomColor: '#10A7D5'
  }
});
