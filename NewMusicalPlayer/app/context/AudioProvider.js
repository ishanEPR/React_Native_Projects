import React, { Component } from 'react'
import { Text, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export class AudioProvider extends Component {

    constructor(props){
        super(props) 
    }


    getPermission = async ()=>{
        const permission=await MediaLibrary.getPermissionAsync()
        console.log(permission);
    }
    componentDidMount(){

        getPermission()
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

export default AudioProvider
