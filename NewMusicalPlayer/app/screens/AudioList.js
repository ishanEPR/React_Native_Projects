import React,{useEffect} from 'react'
import { View, Text,StyleSheet } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export default function AudioList() {

useEffect(() => {
    MediaLibrary.getPermissionsAsync().then(data => {
      alert(JSON.stringify(data));
    });
  }, []);
    return (
        <View style={styles.container}>
            <Text>Audio List</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})
