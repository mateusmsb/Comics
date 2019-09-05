import React, {Component} from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
import Card from './../../components/Card';

export default class About extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#333333',
        }}>
        <Image
          source={require('./../../../src/me.jpg')}
          style={{
            height: Dimensions.get('window').height * 0.3,
            width: Dimensions.get('window').width * 0.4,
            borderRadius: 25,
          }}
        />
        <Text style={{marginTop: 50, textAlign: 'center', color: 'white'}}>
          Aplicativo programado utilizando React-Native {'\n'} por Mateus
          siqueira{'\n'}
          @mateusmsb
        </Text>
      </View>
    );
  }
}
