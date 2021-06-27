import {StyleSheet} from 'react-native';

export const globalStyles=StyleSheet.create({
    container:{
        padding:24,
    },
    titleText:{
        fontSize:18,
        fontWeight:'bold'
    },
    input:{
        borderWidth:1,
        borderColor: '#ddd',
        padding: 10,
        fontSize:18,
        borderRadius: 6,
    },
    paragraph:{
        marginVertical:8,
        lineHeight: 20
    }
})

export const images={
    ratings:{
        '1': require('../assets/1.png'),
        '2': require('../assets/icon.png'),
        '3': require('../assets/3.png'),
        '4': require('../assets/1.png'),
        '5': require('../assets/1.png')
    }
}; 