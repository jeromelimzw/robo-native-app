import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const url =
  'http://images6.fanpop.com/image/photos/37500000/Yazawa-Nico-3-love-live-school-idol-project-37589016-748-600.jpg';

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
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

const Panel = ({picURL, title, money}) => {
  return (
    <TouchableOpacity style={styles.panel}>
      <View style={styles.avatarBlock}>
        <Image source={{uri: url}} style={styles.avatar} />
        <Text style={styles.content}>{title}</Text>
      </View>
      <Text style={styles.content}>{money}</Text>
    </TouchableOpacity>
  );
};

export default Panel;
