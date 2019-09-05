import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import Card from './../../components/Card';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params.array);
  }
  render() {
    return (
      <SafeAreaView style={styles.background}>
        <ScrollView style={styles.scrollView}>
          <FlatList
            style={{padding: 10}}
            data={this.props.navigation.state.params.array}
            renderItem={({item}) => (
              <Card
                data={item}
                width={Dimensions.get('window').width * 0.7}
                onPress={() => {
                  this.props.navigation.navigate('Details', {
                    array: item,
                  }),
                    console.log('item', item);
                }}
              />
            )}
          />
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
  scrollView: {
    flex: 1,
  },
});
