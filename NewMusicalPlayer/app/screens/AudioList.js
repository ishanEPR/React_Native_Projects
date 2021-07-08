import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView,Dimensions } from 'react-native';
import {AudioContext} from '../context/AudioProvider';
import {RecyclerListView, LayoutProvider} from 'recyclerlistview';
import AudioListItem from '../components/AudioListItem';
import Screen from '../components/Screen.js';
import OptionModal from '../components/OptionModal.js';
export class AudioList extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            optionModalVisible: false,
        }
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
       
    })

    rowRender = (type,item) =>{
        console.log(item)
        return <AudioListItem
        title={item.filename} 
        duration={item.duration}

        onOptionPress={()=>{
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
                <OptionModal visible={this.state.optionModalVisible}/>
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



