import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 20,
  },
  avatarBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  panel: {
    backgroundColor: '#fdfdfd',
    height: 73,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#eaeaec',
    borderBottomWidth: 3,
    width: '100%',
    paddingHorizontal: '3%',
  },
  content: {
    alignSelf: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 15,
  },
});

const Panel = ({picURL, title, money, route, navigate}) => {
  return (
    <TouchableOpacity style={styles.panel} onPress={() => navigate(route)}>
      <View style={styles.avatarBlock}>
        <Image source={picURL} style={styles.avatar} />
        <Text style={styles.content}>{title}</Text>
      </View>
      <Text style={styles.content}>{money}</Text>
    </TouchableOpacity>
  );
};

export default Panel;
