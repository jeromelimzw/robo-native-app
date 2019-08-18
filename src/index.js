import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/MainScreen';
import AccountScreen from './screens/AccountScreen';
import GoalScreen from './screens/GoalScreen';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Account: {
    screen: AccountScreen,
  },
  Goal: {
    screen: GoalScreen,
  },
});

const App = createAppContainer(MainNavigator);

export default App;
