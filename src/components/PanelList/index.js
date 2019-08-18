import React from 'react';
import Panel from '../Panel';
import {StyleSheet, Text, SectionList} from 'react-native';

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
});

const data = [
  {
    title: 'everyday accounts',
    data: [
      {
        picURL:
          'http://images6.fanpop.com/image/photos/37500000/Yazawa-Nico-3-love-live-school-idol-project-37589016-748-600.jpg',
        title: 'Checking',
        money: '$10,000.34',
      },
      {
        picURL: '',
        title: 'Savings',
        money: '$10,000.34',
      },
      {
        picURL: '',
        title: 'Others',
        money: '$10,000.34',
      },
    ],
  },
  {
    title: 'investment goals',
    data: [
      {
        picURL: '',
        title: 'Retirement',
        money: '$10,000.34',
      },
      {
        picURL: '',
        title: 'Safety Net',
        money: '$10,000.34',
      },
      {
        picURL: '',
        title: 'General Investing',
        money: '$10,000.34',
      },
      {
        picURL: '',
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
        <Panel picUrl={item.picURL} title={item.title} money={item.money} />
      )}
      renderSectionHeader={({section}) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default PanelList;
