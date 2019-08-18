import React, {Component} from 'react';
import Button from './components/Button';
import PanelList from './components/PanelList';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faGift} from '@fortawesome/free-solid-svg-icons';

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
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: '5%',
    marginVertical: 15,
  },
  nav: {
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingTop: 10,
  },
  netWorthBlock: {
    height: '75%',
    justifyContent: 'flex-end',
    paddingBottom: '7%',
  },
  logo: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    color: 'white',
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

  render() {
    const {netWorth} = this.state;
    return (
      <View>
        <View style={styles.top}>
          <View style={styles.nav}>
            <FontAwesomeIcon icon={faBars} color={'white'} size={20} />
            <Text style={styles.logo}>bambu</Text>
            <FontAwesomeIcon icon={faGift} color={'white'} size={20} />
          </View>
          <View style={styles.netWorthBlock}>
            <Text style={styles.title}>TOTAL NET WORTH</Text>
            <Text style={styles.price}>
              ${this.currencyFormatter(netWorth)}
            </Text>
          </View>
        </View>
        <ScrollView style={styles.bottom}>
          <PanelList />
          <View style={styles.buttonContainer}>
            <Button buttonText="Deposit" handleDeposit={this.handleDeposit} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
