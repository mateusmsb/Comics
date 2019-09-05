import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import Card from './../../components/Card';

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
    this.state = {
      text: 'spider',
      APIresponse: '123456',
    };
  }

  URL = 'https://gateway.marvel.com/v1/public/characters?ts=1&nameStartsWith=';
  key =
    '&limit=15&apikey=82ce1d6dce6d9ac7247955f72200b95e&hash=f98a46b9172ced518265f5c6d8936eaa&offset=1';

  componentDidMount() {
    getComicFromApi(this.URL + this.state.text + this.key)
      .then(response => {
        this.setState({responseArray: response.results});
      })
      .then(console.log('did', this.state.responseArray));

    getComicFromApi(this.URL + 'spider' + this.key).then(response => {
      this.setState({responseSpider: response.results});
    });

    getComicFromApi(this.URL + 'iron' + this.key).then(response => {
      this.setState({responseIron: response.results});
    });

    getComicFromApi(this.URL + 'super' + this.key).then(response => {
      this.setState({responseSuper: response.results});
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.background}>
        <View style={styles.searchComponent}>
          <TextInput
            style={styles.searchBar}
            placeholder={'Search Hero...'}
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
                    this.props.navigation.navigate('Results', {
                      array: response.results,
                    });
                  },
                );
              }}>
              <Text>Search!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, height: 100}}></View>

        <ScrollView style={{margin: 8}}>
          <FlatList
            horizontal={true}
            data={this.state.responseSpider}
            renderItem={({item}) => (
              <Card
                data={item}
                width={Dimensions.get('window').width / 3.05}
                onPress={() =>
                  this.props.navigation.navigate('Details', {
                    array: item,
                  })
                }
              />
            )}
          />
          <FlatList
            horizontal={true}
            data={this.state.responseIron}
            renderItem={({item}) => (
              <Card
                data={item}
                width={Dimensions.get('window').width / 3.05}
                onPress={() =>
                  this.props.navigation.navigate('Details', {
                    array: item,
                  })
                }
              />
            )}
          />
          <FlatList
            horizontal={true}
            data={this.state.responseSuper}
            renderItem={({item}) => (
              <Card
                data={item}
                width={Dimensions.get('window').width / 3.05}
                onPress={() =>
                  this.props.navigation.navigate('Details', {
                    array: item,
                  })
                }
              />
            )}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('About');
            }}
            style={{
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              height: Dimensions.get('window').width / 10,
              width: Dimensions.get('window').width / 6,
              backgroundColor: 'skyblue',
              borderRadius: 6,
            }}>
            <Text>About</Text>
          </TouchableOpacity>
        </ScrollView>
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
    flex: 0.95,
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
    width: Dimensions.get('window').width * 0.95,
  },
  searchButton: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonConteiner: {
    flex: 0.25,
    padding: 5,
  },
});
