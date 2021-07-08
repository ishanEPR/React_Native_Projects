import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView,Dimensions } from 'react-native';
import {AudioContext} from '../context/AudioProvider';
import {RecyclerListView, LayoutProvider} from 'recyclerlistview';

export class AudioList extends Component {


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
        return <Text>{item.filename}</Text>


    }
    render() {
        return <AudioContext.Consumer>
        {
            ({dataProvider}) =>{
                return <View style={{flex:1}}>
                    <RecyclerListView
                    dataProvider={dataProvider}
                    layoutProvider={this.layoutProvider}
                    rowRender={this.rowRender}
                />
                </View>

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



