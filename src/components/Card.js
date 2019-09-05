import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text, FlatList} from 'react-native';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {image: 15};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={{marginHorizontal: 10}}>
        <TouchableOpacity
          style={{
            borderTopColor: '#E4E4E4',
            margin: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={this.props.onPress}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            {this.props.data.name == null
              ? this.props.data.title
              : this.props.data.name}
          </Text>
          <Image
            resizeMode="stretch"
            style={{height: this.props.width * 1.5, width: this.props.width}}
            source={{
              uri:
                this.props.data.thumbnail.path +
                '.' +
                this.props.data.thumbnail.extension,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
