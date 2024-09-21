import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import FormFill from '@/components/FormFill';
import { Link } from 'expo-router';

const SignUp = () => {
  const [form, setForm ] = useState({
    email:'',
    password:''
  })

  const submit = () =>{
    if (form.email ==='' || form.password === '') {
      alert('Fill all the data');
    }
    console.log(form);
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.formCont}>
        <Text style={styles.heading}>Login your account</Text>
        <View style={styles.inputCont}>
        <FormFill title='Email' value={form.email} setValue={(e) =>{setForm({...form,email:e})}} placeHolder='Enter email' />
        <FormFill title='Password' value={form.password} setValue={(e) =>{setForm({...form,password:e})}} placeHolder='Enter Password' />
        </View>
        <TouchableOpacity style={styles.btnc}>
          <Text style={styles.btn} onPress={submit}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.misc}>
          Don't have an account?<Link href={'/SignUp'} style={styles.sin}> Sign Un</Link>
        </Text>
      </View>
    </View>
  )
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    paddingTop: 35,
    borderWidth: 2,
    borderColor: 'gray',
    gap:30,
  },
  formCont:{
    backgroundColor:'#F7F7EE',
    height:'auto',
    width:'95%',
    margin:'auto',
    paddingVertical:30,
    paddingHorizontal:20,
    borderRadius:20,
  },
  btnc:{
    alignItems:'flex-end',
    marginTop:20,
  },
  btn:{
    width:'40%',
    color:'black',
    backgroundColor:'#9F86AA',
    textAlign:'center',
    fontSize:20,
    paddingVertical:2,
    fontWeight:'400',
    borderRadius:10,
  },
  heading:{
    fontSize:24,
    fontWeight:'500',
    fontFamily:'serif',
    margin:'auto'
  },
  inputCont:{
    marginVertical:20,
    gap:25,
  },
  misc:{
    marginTop:20,
    textAlign:'center',
    fontSize:16,
    fontWeight:'400',
    fontFamily:'monospace',
  },
  sin:{
    fontWeight:'700',
    fontFamily:'serif',
    color:'#3710AD'
  }
})