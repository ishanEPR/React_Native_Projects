import React,{useState} from 'react';
import {StyleSheet,View,Text,Button,FlatList,TouchableOpacity,Modal} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
export default function Home({navigation})
{


    const [modalOpen,setModalOpen]=useState(false)
    const [reviews,setReviews]=useState([
        {title:'ishannnnnnn',rating:5,body:'lorem ipsum',key:'1'},
        {title:'ishannnnnnn1',rating:4,body:'lorem ipsum',key:'2'},
        {title:'ishannnnnnn2',rating:3,body:'lorem ipsum',key:'3'},
    ])


   
    return(
    <View style={globalStyles.container}>

        <Modal visible={modalOpen} animationType='slide'>
            <View>
                 <MaterialIcons name='close' 
                size={24}
                onPress={() =>setModalOpen(false)}/>
                <Text>Hello from Modal</Text>
            
            </View>

        </Modal>

        <MaterialIcons name='add' 
        size={24}
        onPress={() =>setModalOpen(true)}
        />
       <FlatList
       data={reviews}
       renderItem={({item})=>(

           <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                <Card>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                </Card>
           </TouchableOpacity>
       )}
       />
       
    </View>
    );
}

