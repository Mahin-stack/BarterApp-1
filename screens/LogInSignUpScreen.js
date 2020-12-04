import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class LogInSignUpScreen extends React.Component {
  constructor(){
    super()
    this.state={
    email: '',
    password: '',
    }
  }
  UserSignUp= (email, password)=>{
    firebase.auth().createUserWithEmailAndPassword(email, password).then(response =>{
      return Alert.alert('User Signed In Successfully')
    })
    .catch(error =>{
      var errorCode= error.code;
      var errorMessage= error.message;
      return Alert.alert(errorMessage)
    })
  }
  UserLogIn= (email,password)=>{
    firebase.auth().createUserWithEmailAndPassword(email, password).then(response =>{
      Alert.alert('User LoggedIn Successfully')
    })
    .catch(error =>{
      var errorCode= error.code;
      var errorMessage= error.message;
      return Alert.alert(errorMessage)
    })
  }
  render(){
  return(
    <View style={styles.container}>
<Text style={styles.text}>Barter App</Text>
   <TextInput
   style={styles.inputBox2}
   placeholder={'abcd@gmail.com'}
   keyboardType={'email-address'}
   onChangeText={(text)=>{
     this.setState({
       email: text
     })
   }}
   />

<TextInput
   style={styles.inputBox}
   placeholder={'enter the password'}
  secureTextEntry={true}
   onChangeText={(text)=>{
     this.setState({
       password: text
     })
   }}
   />

   <TouchableOpacity
   style={styles.button}
   onPress={()=>{
     this.UserLogIn(this.state.email, this.state.password);
   }}>
     <Text style={styles.buttonText}>Log In</Text>
   </TouchableOpacity>

   <TouchableOpacity
   style={styles.button1}
   onPress={()=>{
     this.UserSignUp(this.state.email, this.state.password);
   }}>
     <Text style={styles.buttonText}>Sign Up</Text>
   </TouchableOpacity>
    </View>

  )
  }
 
}

const styles = StyleSheet.create({
  inputBox:{
    width: 220,
    height:50,
    borderBottomWidth: 2.7,
    borderColor: 'black',
    fontSize: 20,
    marginBottom: 100,
    paddingLeft: 10,
    marginLeft: 90,
  },
  inputBox2:{
    width: 220,
    height:70,
    borderBottomWidth: 3,
    borderColor: 'yellow',
    borderRadius: 20,
    fontSize: 20,
    marginTop: 260,
    paddingLeft: 10,
    marginLeft: 90,
  },
  button1:{
    width: 280,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'red',
    shadowColor: 'black',
    marginLeft: 90,
    marginBottom: 10,
    shadowOffset: {
        width: 0,
        height: 8,
    },
  },
  button:{
    width: 270,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'red',
    shadowColor: 'black',
    marginLeft: 90,
    marginBottom: 30,
    shadowOffset: {
        width: 0,
        height: 8,
    },
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
   },
   text:{
     color: 'black',
     fontSize: 25,
     fontWeight: 'bold',
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 130,
     marginTop: 50,
   }
});
