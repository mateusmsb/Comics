import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import Card from './../../components/Card';

async function getMagsFromApi(url) {
  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.log(error);
  }
}

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseArray: '',
    };
  }

  URL = 'https://gateway.marvel.com:443/v1/public/characters/';
  key =
    '/comics?apikey=82ce1d6dce6d9ac7247955f72200b95e&hash=f98a46b9172ced518265f5c6d8936eaa&ts=1&limit=10&hasDigitalIssue=true';

  componentDidMount() {
    getMagsFromApi(
      this.URL + this.props.navigation.state.params.array.id + this.key,
    ).then(response => {
      this.setState({responseArray: response}), console.log(response);
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.background}>
        <ScrollView style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Card
              data={this.props.navigation.state.params.array}
              width={Dimensions.get('window').width / 2.5}
              onPress={() => {
                console.log(item);
              }}
            />

            <View style={{flex: 1}}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'left',
                  margin: 4,
                }}>
                {this.props.navigation.state.params.array.description}
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <FlatList
              horizontal={true}
              data={this.state.responseArray.results}
              renderItem={({item}) => (
                <Card
                  data={item}
                  width={Dimensions.get('window').width / 3.05}
                  onPress={() => {
                    console.log(item);
                  }}
                />
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#333333',
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
});
