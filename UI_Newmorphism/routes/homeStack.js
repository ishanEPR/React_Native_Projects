import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';


const screens={
    ReviewDetails:{
        screen:ReviewDetails
    },
    Home:{
        screen:Home
    }
    
}

const HomeStack=createStackNavigator(screens);
export default createAppContainer(HomeStack);