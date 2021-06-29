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
      const location=await Location.getCurrentPositionAsync()

      const {latitude,longitude}=location.coords
      alert('Latitude :${latitude}, Longitude: ${longitude} ')

      
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


// import React,{Component, useEffect,useState} from 'react';
// import {View,Text,StyleSheet,Button} from 'react-native';
// import {Location,Permissions} from 'expo'
 

// class App extends Component {
//   state={
//     location: {},
//     errorMessage: ''
//   }
//   componentDidMount()
//   {
//     this._getLocation();
//   }
//   _getLocation = async()=>{
//     const {status}=await Permissions.askAsync(Permissions.Location);
//     if(status !=='granted')
//     {
//       console.log('permission not granted');

//       this.setState({
//         errorMessage: 'permission not granted'
//       })
//     }

//     const userLocation=await Location.getCurrentPositionAsync();
//     this.setState({
//       location

//     })

//   }

//   render() { 
//     return (
//       <Text>{JSON.stringify(this.state.location)}</Text>
//       );
//   }
// }
 
// export default App;