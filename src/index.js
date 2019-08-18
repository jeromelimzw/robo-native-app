import React, {Component} from 'react';
import Button from './components/Button';
import PanelList from './components/PanelList';
import NavBar from './components/NavBar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Modal,
  TouchableHighlight,
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
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: '5%',
    marginVertical: 15,
  },

  netWorthBlock: {
    height: '75%',
    justifyContent: 'flex-end',
    paddingBottom: '7%',
  },
  modal: {
    backgroundColor: 'black',
    marginTop: '45%',
    marginHorizontal: '10%',
  },
  modalText: {
    color: 'red',
    fontSize: 30,
  },
});

export default class App extends Component {
  state = {
    netWorth: 1597523.58,
    isModalVisible: false,
  };

  currencyFormatter = input => {
    return input.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  toggleModal = () => {
    const currState = this.state.isModalVisible;
    this.setState({isModalVisible: !currState});
  };

  handleDeposit = amount => {
    const newWorth = this.state.netWorth + amount;
    this.setState({netWorth: newWorth});
  };

  navBarContent = () => {
    return (
      <View style={styles.modal}>
        <TouchableHighlight onPress={() => this.toggleModal()}>
          <Text style={styles.modalText}>Hide Modal</Text>
        </TouchableHighlight>
      </View>
    );
  };

  render() {
    const {netWorth} = this.state;

    return (
      <View>
        <StatusBar backgroundColor="#964b94" barStyle="light-content" />
        <View style={styles.top}>
          <NavBar toggleNav={this.toggleModal} />
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}>
          {this.navBarContent()}
        </Modal>
      </View>
    );
  }
}
