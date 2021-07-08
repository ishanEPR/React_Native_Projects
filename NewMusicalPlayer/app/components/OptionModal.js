import React from 'react'
import { View, Text,Modal,StatusBar,StyleSheet,TouchableWithoutFeedback } from 'react-native'
import color from '../misc/color';

const OptionModal = ({visible,onClose}) => {
    return (
       <>
       <StatusBar hidden/>
        <Modal animationType='slide' transparent visible={visible}>
            <View style={styles.modal}>
                <Text 
                numberOfLines={2}
                style={styles.title}>Dynamic text</Text>
                <View style={styles.optionContainer}>
                    <Text  style={styles.option}>Play</Text>
                    <Text style={styles.option}> Add to PlayList</Text>
                </View>
            </View>
            <TouchableWithoutFeedback
            onPress={onClose}>
                 <View style={styles.modalBg}/>
            </TouchableWithoutFeedback>
           
       
       </Modal>
       </>
    )
}

const styles=StyleSheet.create({
    modal:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        backgroundColor:color.APP_BG,
        borderTopLeftRadius:20,
        borderTopRighttRadius:20,
        zIndex:1000,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        padding:20,
        paddingBottom: 0,
        color: color.FONT_MEDIUM,

    },
    optionContainer:{
        padding:20,


    },
    option:{

        fontSize:16,
        fontWeight:'bold',
        color: color.FONT,
        paddingVertical:10,
        letterSpacing:1,
    },
    modalBg:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0,
        backgroundColor:color.MODAL_BG,
    }
})

export default OptionModal
