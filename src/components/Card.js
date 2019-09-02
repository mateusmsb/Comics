import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {fontSize: 15};
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            flex: 1,
            borderTopColor: '#E4E4E4',
            margin: 2,
            justifyContent: 'center',
          }}
          onPress={() => {}}>
          <Image
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
