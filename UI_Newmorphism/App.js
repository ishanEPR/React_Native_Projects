import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View
}from 'react-native';
import Home from './screens/home';
import Navigator from './routes/drawer';



export default function App() {
 
    return (
      <View>
          <Navigator/>
      </View>
   
  );


  
}



///////use google font

// import React,{useState} from 'react';
// import * as Font from 'expo-font';
// import Home from './screens/home';
// import {AppLoading} from 'expo';

// const getFonts=()=> Font.loadAsync({
//   'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
//   'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
// })

// export default function App() {
//   const [fontLoaded,setFontsLoaded]=useState(false);

//   if (fontLoaded) {
//     return (
//    <Home/>
//   );
//   }else{
//       return(
//         <AppLoading
//         startAsync={getFonts}
//         onFinish={()=>setFontsLoaded(true)}
//         />
//               )

//   }

  
// }




