import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home/Home';
import About from './src/screens/About/About';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      headerTitle: 'About',
    },
  },
});

export default createAppContainer(AppNavigator);
