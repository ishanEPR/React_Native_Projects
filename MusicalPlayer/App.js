import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import * as Location from 'expo-location'
 




export default function App(){

  useEffect(() =>{
    load()

  },[])
  const [errorMessage,setErrorMessage]=useState(null)

  async function load(){
    try {
      let {status}=await Location.requestPermissionAsync()

      if(status != 'granted'){
        setErrorMessage('Access to location is needed to run the app')
        return 
      }
      
      
    } catch (error) {
      
    }
  }
  



     return(
       <View  style={styles.container}>
          <Text>Ishan Reshmika1</Text>
       </View>
       
  );



}

const styles=StyleSheet.create({
   container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
   }
})
