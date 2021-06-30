import React,{useState} from 'react';
import Home from './screens/home';
import Navigator from './routes/drawer';



export default function App() {
 
    return (
      <View>
          <Navigator/>
      </View>
   
  );
  //  "dependencies": {
  //   "@react-native-community/masked-view": "0.1.10",
  //   "@react-navigation/native": "^5.9.4",
  //   "expo": "~41.0.1",
  //   "expo-status-bar": "~1.0.4",
  //   "formik": "^2.2.9",
  //   "react": "16.13.1",
  //   "react-dom": "16.13.1",
  //   "react-native": "https://github.com/expo/react-native/archive/sdk-41.0.0.tar.gz",
  //   "react-native-gesture-handler": "~1.10.2",
  //   "react-native-reanimated": "~2.1.0",
  //   "react-native-safe-area-context": "3.2.0",
  //   "react-native-screens": "~3.0.0",
  //   "react-native-web": "~0.13.12",
  //   "react-navigation": "^4.4.4",
  //   "react-navigation-drawer": "^2.7.1",
  //   "react-navigation-stack": "^2.10.4",
  //   "yup": "^0.32.9"
  // },

  
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




