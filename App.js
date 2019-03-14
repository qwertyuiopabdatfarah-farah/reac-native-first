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
    this.state = {}
  }

 
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
       </View>
       <View style={styles.calculation}>
          <Text style{styles.calculationText}>111</Text>
       </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}></View>
             <View style={styles.row}>
                 <Button title="0" />
                 <Button title="0" />
                 <Button title="0" />
               </View> 
              <View style={styles.row}>
                 <Button title="0" />
                 <Button title="0" />
                 <Button title="0" />
              </View>
             <View style={styles.row}>
                 <Button title="0" />
                 <Button title="0" />
                 <Button title="0" />
             </View>
             <View style={styles.row}>
                <Button title="0" />
                <Button title="0" />
                <Button title="0" />
             </View>
          <View style={styles.operations}>
           <Button title="+" />
           <Button title="+" />
           <Button title="+" />
           <Button title="+" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculationText:{
    fontSize: 20,
    color: 'white',
  },
  resultText:{
    fontSize: 24,
    color: 'white', 
  },
  row:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  }
  result: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',  
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green'
  },
  buttons: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: 'black'
  },

});
