import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

async function getComicFromApi(url) {
  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.log(error);
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', APIresponse: ''};
  }

  URL =
    'https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=';
  key =
    '&apikey=82ce1d6dce6d9ac7247955f72200b95e&hash=f98a46b9172ced518265f5c6d8936eaa';

  render() {
    return (
      <SafeAreaView style={styles.background}>
        <View style={styles.searchComponent}>
          <TextInput
            style={styles.searchBar}
            placeholder={'Buscar herói...'}
            placeholderTextColor="white"
            onChangeText={entry => {
              this.setState({text: entry});
            }}
          />
          <View style={styles.searchButtonConteiner}>
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => {
                getComicFromApi(this.URL + this.state.text + this.key).then(
                  response => {
                    this.setState({APIresponse: response});
                    console.log(this.state.APIresponse);
                  },
                );
              }}
            />
          </View>
        </View>
        <View style={{flex: 1, height: 100}}>
          <Text>{this.state.APIresponse}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#333333',
    padding: 8,
  },
  searchBar: {
    alignSelf: 'flex-start',
    fontSize: 20,
    color: 'white',
    width: '90%',
  },
  searchComponent: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
  },
  searchButton: {
    flex: 1,
    backgroundColor: 'red',
    margin: 5,
  },
  searchButtonConteiner: {
    flex: 1,

    padding: 4,
  },
});
