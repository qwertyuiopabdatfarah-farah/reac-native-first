/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
          StyleSheet,
          Text,
          View,
          TextInput,
          Button 
        } from 'react-native';


export default class App extends Component {

  constructor() {
    super()
    this.buttonPressed = this.buttonPressed.bind(this)
  }

  buttonPressed(){
   
   console.log(this.state.username, this.state.password)
  }

 
 
  render() {
    return (
      <View style={styles.container}>
      
      <Text>Username</Text>
        <TextInput 
          defaultValue = {this.state.username}
          onChangeText = {text => this.setState({username: text})}
        />

        <Text>Password</Text>
        <TextInput 
          defaultValue = {this.state.password}
          onChangeText = {text => this.setState({password: text})}
        />

        <Button
          title="Learn More"
          onPress={this.buttonPressed}
          color="#841584"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
});
