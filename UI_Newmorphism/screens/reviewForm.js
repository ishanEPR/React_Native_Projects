import React from 'react';
import {StyleSheet,Button,TextInput,View,Text} from 'react-native';
import {globalStyles} from '../styles/global.js';
import {Formik} from 'formik';


export default function ReviewForm() {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title: '',body: '',rating: ''}}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            />

            {
                (props)=>(
                    <View>
                        <TextInput
                        style={globalStyles.input}
                        placeholder='Review title'
                        onChangeText={props.handleChane('title')}
                        value={props.values.title}
                        />


                        <TextInput
                        multiline
                        style={globalStyles.input}
                        placeholder='Review body'
                        onChangeText={props.handleChane('body')}
                        value={props.values.body}
                        />


                        <TextInput
                        style={globalStyles.input}
                        placeholder='Rating'
                        onChangeText={props.handleChane('rating')}
                        value={props.values.rating}
                        />
                        <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                    </View>
                )
            }

        </View>
    )
}
