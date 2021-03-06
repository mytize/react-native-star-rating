// React and react native imports
import React, {
  Component,
  PropTypes,
} from 'react';
import { View, Image, Text } from 'react-native'

// Third party imports
import Button from 'react-native-button';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import EvilIconsIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcons from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import ZocialIcons from 'react-native-vector-icons/Zocial';

const iconSets = {
  Entypo: EntypoIcons,
  EvilIcons: EvilIconsIcons,
  FontAwesome: FontAwesomeIcons,
  Foundation: FoundationIcons,
  Ionicons: IoniconsIcons,
  MaterialIcons: MaterialIconsIcons,
  Octicons: OcticonsIcons,
  Zocial: ZocialIcons,
};

class StarButton extends Component {

  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    this.props.onStarButtonPress(this.props.rating);
  }

  render() {
    const Icon = iconSets[this.props.iconSet];

    return (
      <Button
        activeOpacity={0.20}
        disabled={this.props.disabled}
        onPress={this.onButtonPress}
        style={{
          height: this.props.starSize,
          width: this.props.starSize,
        }}
      >
        { this.props.symbol
          ?
          <Text style={[this.props.style, this.props.symbolEmpty && {opacity: 0.5}]}>{this.props.symbol}</Text>
          :
          <Image source={this.props.iconName} style={this.props.style} />
        }
      </Button>
    );
  }
}

StarButton.propTypes = {
  disabled: PropTypes.bool,
  rating: PropTypes.number,
  onStarButtonPress: PropTypes.func,
  iconSet: PropTypes.string,
  starSize: PropTypes.number,
  iconName: PropTypes.string,
  starColor: PropTypes.string,
};

export default StarButton;
