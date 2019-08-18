import React from 'react';
import Panel from '../Panel';
import {StyleSheet, Text, SectionList} from 'react-native';
import {
  Burn,
  ElectricTower,
  WaterDrop,
  Sprout,
  Nico,
  Honoka,
  Umaru,
  Yoshika,
} from '../../../assets/icons';

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    marginTop: '4%',
    marginBottom: '1%',
    marginLeft: '3%',
    color: '#121418',
    textTransform: 'uppercase',
  },
  list: {
    paddingBottom: '20%',
  },
});

const data = [
  {
    title: 'everyday accounts',
    data: [
      {
        picURL: Nico,
        title: 'Checking',
        money: '$10,000.34',
      },
      {
        picURL: Honoka,
        title: 'Savings',
        money: '$10,000.34',
      },
      {
        picURL: Umaru,
        title: 'Others',
        money: '$10,000.34',
      },
      {
        picURL: Yoshika,
        title: 'Regular',
        money: '$10,000.34',
      },
    ],
  },
  {
    title: 'investment goals',
    data: [
      {
        picURL: WaterDrop,
        title: 'Retirement',
        money: '$10,000.34',
      },
      {
        picURL: Burn,
        title: 'Safety Net',
        money: '$10,000.34',
      },
      {
        picURL: ElectricTower,
        title: 'General Investing',
        money: '$10,000.34',
      },
      {
        picURL: Sprout,
        title: 'Education',
        money: '$10,000.34',
      },
    ],
  },
];

const PanelList = () => {
  return (
    <SectionList
      sections={data}
      renderItem={({item}) => (
        <Panel picURL={item.picURL} title={item.title} money={item.money} />
      )}
      renderSectionHeader={({section}) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
      keyExtractor={(item, index) => index}
      style={styles.list}
    />
  );
};

export default PanelList;
