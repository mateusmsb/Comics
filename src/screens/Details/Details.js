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
      this.setState({responseArray: response}),
        console.log('response', response);
      console.log('array', this.props.navigation.state.params.array);
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.background}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              height: Dimensions.get('window').width * 0.7,
              width: Dimensions.get('window').width,
              flexDirection: 'row',
            }}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={{color: 'white'}}>
                {this.props.navigation.state.params.array.name}
              </Text>
              <Image
                source={{
                  uri:
                    this.props.navigation.state.params.array.thumbnail.path +
                    '.' +
                    this.props.navigation.state.params.array.thumbnail
                      .extension,
                }}
                style={{
                  height: Dimensions.get('window').height * 0.3,
                  width: Dimensions.get('window').width * 0.3,
                }}
              />
            </View>
            <View style={{height: 100, width: 200}}>
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
              style={{
                padding: 10,
                alignSelf: 'center',
              }}
              horizontal={true}
              data={this.state.responseArray.results}
              renderItem={({item}) => (
                <Card
                  data={item}
                  width={Dimensions.get('window').width / 3.05}
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
