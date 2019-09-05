import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home/Home';
import About from './src/screens/About/About';
import Results from './src/screens/Results/Results';
import Details from './src/screens/Details/Details';

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
  Results: {
    screen: Results,
    navigationOptions: {
      headerTitle: 'Results',
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default createAppContainer(AppNavigator);
