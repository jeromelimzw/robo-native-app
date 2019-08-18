import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faGift} from '@fortawesome/free-solid-svg-icons';
import {Logo} from '../../../assets/icons';

const styles = StyleSheet.create({
  nav: {
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginHorizontal: 10,
    paddingTop: 15,
  },
  logo: {
    height: 40,
    width: 40,
    marginTop: -10,
  },
});

const NavBar = ({toggleNav}) => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => alert('a winner is you')}>
        <FontAwesomeIcon icon={faBars} color={'white'} size={20} />
      </TouchableOpacity>
      <Image source={Logo} style={styles.logo} />
      <TouchableOpacity onPress={() => alert('modal stand in')}>
        <FontAwesomeIcon icon={faGift} color={'white'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
