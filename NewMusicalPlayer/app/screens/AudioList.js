import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView,Dimensions } from 'react-native';
import {AudioContext} from '../context/AudioProvider';
import {RecyclerListView, LayoutProvider} from 'recyclerlistview';
import AudioListItem from '../components/AudioListItem';
import Screen from '../components/Screen.js';
import OptionModal from '../components/OptionModal.js';

import {Audio} from 'expo-av';
export class AudioList extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            optionModalVisible: false,
            playbackObj:null,
            soundObj: null,
        }

        this.currentItem={}
    }


    static contextType=AudioContext;

    layoutProvider=new LayoutProvider((i) => 'audio',(type,dim)=>{
        switch(type)
        {
            case 'audio':
                dim.width= Dimensions.get('window').width;
                dim.height=70;
                break;
             default:
               dim.width=0;
               dim.height=0;   
        }
       
    });

    handleAudioPress = async audio=>{
        //console.log(audio)
      //  console.log('press audio');
      const playbackObj=new Audio.Sound()
      const status=await playbackObj.loadAsync(
          {uri: audio.uri},
          {shouldPlay: true});
          console.log(status);
    }

    rowRender = (type,item) =>{
        console.log(item)
        return <AudioListItem
        title={item.filename} 
        duration={item.duration}
        onAudionPress={() => this.handleAudioPress(item)}

        onOptionPress={()=>{
            this.currentItem=item;
           // console.log('opening option');
           this.setState({...this.state,optionModalVisible:true})
        }}

        />


    }
    render() {
        return <AudioContext.Consumer>
        {
            ({dataProvider}) =>{
                return <Screen>
                    <RecyclerListView
                    dataProvider={dataProvider}
                    layoutProvider={this.layoutProvider}
                    rowRender={this.rowRender}
                />
                <OptionModal 
                onPlayPress={()=>console.log('playing audio')}
                onPlayListPress={()=>console.log('adding new list')}

                currentItem={this.currentItem}
                onClose={()=>{
                    this.setState({...this.state,optionModalVisible: false})
                }} visible={this.state.optionModalVisible}/>
                </Screen>

            }
        }
        </AudioContext.Consumer>
    }
}



const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default AudioList

// useEffect(() => {
//     MediaLibrary.getPermissionsAsync().then(data => {
//       alert(JSON.stringify(data));
//     });
//   }, []);



