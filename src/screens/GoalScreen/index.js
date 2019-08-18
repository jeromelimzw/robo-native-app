import React, {Component} from 'react';

import {Logo} from '../../../assets/icons';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  DrawerLayoutAndroid,
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    marginBottom: 3,
    color: 'white',
  },
  price: {
    fontFamily: 'Lato-Regular',
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  top: {
    height: '22%',
    backgroundColor: '#964b94',
    justifyContent: 'center',
    borderBottomColor: 'rgba(97,23,97,0.1)',
    borderBottomWidth: 10,
  },
  bottom: {
    height: '78%',
    backgroundColor: '#f1f2f6',
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    backgroundColor: 'transparent',
  },

  netWorthBlock: {
    height: '75%',
    justifyContent: 'flex-end',
    paddingBottom: '7%',
  },
  drawerHeader: {
    backgroundColor: '#ce7fca',
    height: '30%',
    paddingTop: 20,
    paddingHorizontal: 13,
  },
  drawerContents: {
    backgroundColor: '#5a965c',
    height: '70%',
    paddingTop: 20,
    paddingHorizontal: 13,
  },

  logoText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Lato-Regular',
    alignSelf: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white',
    alignSelf: 'center',
  },
  triangleCorner: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 270,
    height: 70,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 40,
    borderTopWidth: 50,
    borderRightColor: 'transparent',
    borderTopColor: '#964b94',
  },
});

export default class App extends Component {
  state = {
    netWorth: 1597523.58,
  };

  static navigationOptions = {
    title: 'Goal',
  };

  render() {
    let navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.drawerHeader}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.logoText}>bambu</Text>
        </View>
        <View style={styles.drawerContents} />
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        ref="navDrawer">
        <StatusBar backgroundColor="#964b94" barStyle="light-content" />
        <View>
          <Text>Goals Screen</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
