import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  responsiveFontSize as rf,
  responsiveHeight as rh,
  responsiveWidth as rw,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PrivacySettings = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backArrow}>
                  <AntDesign name="left" size={18} color="rgba(32, 41, 84, 1)" />
                </TouchableOpacity>
        
                <Text style={styles.title}>Setting</Text>

   
      <SettingItem title="Privacy Policy" />
      <SettingItem title="Terms of Use" />
      <SettingItem title="Cookie Policy" />
    


    </ScrollView>
  );
};

const SettingItem = ({ title, subText, verified }) => (
  <TouchableOpacity style={styles.item}>
    <View>
      <Text style={styles.itemText}>{title}</Text>
      {subText && (
        <View style={styles.subTextRow}>
          <Text style={styles.subText}>{subText}</Text>
          {verified && <Text style={styles.verified}>✔ Verified</Text>}
        </View>
      )}
    </View>
    <Icon name="chevron-right" size={rf(2.5)} color="#888" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: rw(5),
    backgroundColor: '#f9fbff',
    flex: 1,
  },
  heading: {
    fontSize: rf(3),
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: rh(3),
    color: '#333',
  },
  backArrow: {
    position: 'absolute',
    top:1,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize:  19 ,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1E2A78',
    marginBottom: 30,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: rh(2),
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: rf(2.1),
    color: 'rgba(32, 41, 84, 1)',
    fontWeight: '500',
  },
  subTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rh(0.5),
  },
  subText: {
    fontSize: rf(1.8),
    color: '#666',
  },
  verified: {
    fontSize: rf(1.8),
    color: 'green',
    marginLeft: rw(2),
  },
  deleteAccount: {
    marginTop: rh(3),
  },
  deleteText: {
    fontSize: rf(2.2),
    color: '#000',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: rh(2),
  },
  logoutText: {
    fontSize: rf(2.2),
    color: 'red',
    marginRight: rw(2),
  },
  version: {
    fontSize: rf(1.6),
    color: '#999',
    marginTop: rh(3),
    alignSelf: 'center',
  },
});

export default PrivacySettings;
