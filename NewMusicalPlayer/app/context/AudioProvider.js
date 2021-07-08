// import React, { useEffect,useState,createContext } from 'react'
// import { Text, View ,Alert} from 'react-native';
// import * as MediaLibrary from 'expo-media-library';

// export const AudioContext=createContext();

// export default function AudioProvider(props) {

//     const [granted,setGranted]=useState(false);
//     const [canAskAgain,setcanAskAgain]=useState(true);
//     const [status,setStatus]=useState("undetermined");
//     const [expires,setExpires]=useState("never");

    
// //{
//     // "granted":false,
//     // "canAskAgain":true,
//     // "status":"undetermined",
//     // "expires":"never"
//     // }
//     permissionAlert = () => {
//        Alert.alert("Permission Required","This app needs to audio files!",
//        [{
//            text:"I am ready",
//            onPress: () => useEffect()
//        },
//        {
//            text: 'cancle',
//            onPress: () => permissionAlert()
//        }
//        ])
//     }

//     getAudioFiles =  () =>{
//         const media= MediaLibrary.getAssetAsync({
//             mediaType:'auto'
//         })
//         console.log(media)
//     }

// useEffect(() => {
//     MediaLibrary.getPermissionsAsync().then(data => {
     
//       if (granted) {
//           // alert(JSON.stringify(data.canAskAgain));

//           //we want to get all the audio files
//           getAudioFiles();
//       }
     
//   if(!granted && canAskAgain){
//       const {status,canAskAgain}= MediaLibrary.requestPermissionsAsync();
//       if(status === 'denied' && canAskAgain)
//       {
//           //we are going to display alert that user
//           // must allow this permission to work this app
//           permissionAlert();

//       }
//       if(status ==='granted'){
//             //we want to get all the audio files
//             getAudioFiles();
//       }

//       if(status === 'denied' && !canAskAgain)
//       {
//           //we want to display some error to the user

//       }
//   }

    
//     });
//   }, []);
   
   
   
//         return <AudioContext.Provider value={{}}>
//         {props.children}

//         </AudioContext.Provider>
    
// }


import React, { Component,createContext } from 'react'
import { Text, View,Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export const AudioContext=createContext();

export class AudioProvider extends Component {

    constructor(props){
        super(props);
        this.state={
            audioFiles: []
        }
    }

    componentDidMount(){
        this.getPermission()
    }

    getPermission = async ()=>{
        const permission=await MediaLibrary.getPermissionsAsync()
       // console.log(permission);

        if (permission.granted) {
          // alert(JSON.stringify(data.canAskAgain));

          //we want to get all the audio files
          this.getAudioFiles();
      }


       
  if(!permission.granted  && permission.canAskAgain){
      const {status,canAskAgain}=await MediaLibrary.requestPermissionsAsync();
      if(status === 'denied' && canAskAgain)
      {
          //we are going to display alert that user
          // must allow this permission to work this app
          this.permissionAlert();

      }
      if(status ==='granted'){
            //we want to get all the audio files
            this.getAudioFiles();
      }

      if(status === 'denied' && !canAskAgain)
      {
          //we want to display some error to the user

      }
  }


    }

     permissionAlert = () => {
       Alert.alert("Permission Required","This app needs to audio files!",
       [{
           text:"I am ready",
           onPress: () => this.getPermission()
       },
       {
           text: 'cancle',
           onPress: () => this.permissionAlert()
       }
       ])
    }


    getAudioFiles = async () =>{
        let media= await  MediaLibrary.getAssetsAsync({
            mediaType:'audio'
        });
        media= await  MediaLibrary.getAssetsAsync({
            mediaType:'audio',
            first: media.totalCount,
        });
      //  console.log(media.assets.length)
      this.setState({...this.state,audioFiles: media.assets})
    }

    render() {
           return <AudioContext.Provider value={{audioFiles: this.state.audioFiles}}>
        {this.props.children}

        </AudioContext.Provider>
    }
}

export default AudioProvider

