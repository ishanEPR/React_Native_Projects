import React, { useEffect,useState } from 'react'
import { Text, View ,Alert} from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export default function AudioProvider() {

    const [granted,setGranted]=useState(false);
    const [canAskAgain,setcanAskAgain]=useState(true);
    const [status,setStatus]=useState("undetermined");
    const [expires,setExpires]=useState("never");

    
//{
    // "granted":false,
    // "canAskAgain":true,
    // "status":"undetermined",
    // "expires":"never"
    // }
    permissionAlert = () => {
       Alert.alert("Permission Required","This app needs to audio files!",
       [{
           text:"I am ready",
           onPress: () => useEffect()
       },
       {
           text: 'cancle',
           onPress: () => permissionAlert()
       }
       ])
    }

useEffect(() => {
    MediaLibrary.getPermissionsAsync().then(data => {
     
      if (granted) {
          // alert(JSON.stringify(data.canAskAgain));

          //we want to get all the audio files
      }
     
  if(!granted && canAskAgain){
      const {status,canAskAgain}= MediaLibrary.requestPermissionsAsync();
      if(status === 'denied' && canAskAgain)
      {
          //we are going to display alert that user
          // must allow this permission to work this app
          permissionAlert();

      }
      if(status ==='granted'){
            //we want to get all the audio files
      }

      if(status === 'denied' && !canAskAgain)
      {
          //we want to display some error to the user

      }
  }

    
    });
  }, []);
   
   
   
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    
}


