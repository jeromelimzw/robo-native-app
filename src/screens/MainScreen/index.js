import React, {Component} from 'react';
import Button from '../../components/Button';
import PanelList from '../../components/PanelList';
import NavBar from '../../components/NavBar';
import {Logo} from '../../../assets/icons';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
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

  currencyFormatter = input => {
    return input.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  handleDeposit = amount => {
    const newWorth = this.state.netWorth + amount;
    this.setState({netWorth: newWorth});
  };

  openDrawer = () => {
    this.refs.navDrawer.openDrawer();
  };

  render() {
    const {netWorth} = this.state;
    const {navigate} = this.props.navigation;
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
        <View style={styles.top}>
          <NavBar toggleNav={this.toggleModal} openDrawer={this.openDrawer} />
          <View style={styles.netWorthBlock}>
            <Text style={styles.title}>TOTAL NET WORTH</Text>
            <Text style={styles.price}>
              ${this.currencyFormatter(netWorth)}
            </Text>
          </View>
        </View>
        <ScrollView style={styles.bottom}>
          <PanelList navigate={navigate} />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button buttonText="Deposit" handleDeposit={this.handleDeposit} />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
