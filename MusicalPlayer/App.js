//class definition
import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';


  const Person = (props) =>{
    return(
      <View>
        <Text>Hello My Name Is {props.name}</Text>
      </View>
    )
  }

  const PersonAge= (props)=>{
    return(
      <View>
          <Text>My age is: {props.age}</Text>
      </View>
    );
  }

export default class App extends Component{

  state={count:0};
  render()
  {
    
     return(
  
   
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Person name={this.state.count<5? "Ishan":"Why"}/>
        <Person name="Reshmika"/>
        <PersonAge age="23"/>
        <Text>{this.state.count}</Text>
       
        <Button
        title='Submit'
        disabled={this.state.count>5}
          onPress= {()=>{
            this.setState({count:this.state.count+1})
          }
          }
        />
      </View>
        
    
  )
  }
}
//functional component
// import React from 'react';
// import {View,Text,StyleSheet,Button} from 'react-native';

// export default function App(){
//   state={count:0};
//   return(
  
   
//       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//         <Text>{this.state.count}</Text>
       
//         <Button
//           onPress= {()=>{
//             this.setState({count:1})
//           }
//           }
//         />
//       </View>
        
    
//   )
// }
