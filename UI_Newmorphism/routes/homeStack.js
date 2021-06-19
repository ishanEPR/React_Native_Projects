import {createStackNavigator} from "react-navigation-stack";

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';


const screens={
    
    Home:{
        screen:Home,
        navigationOptions:{
            title:"Welcome Page",
            headerTintColor:'#444',
            
         //   headerStyle:{backgroundColor:'#eee'}
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:'Review Details',
            headerStyle:{backgroundColor:'#eee'}
        }
    }
    
}

const HomeStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#000',height:60}
    }
});
export default HomeStack;