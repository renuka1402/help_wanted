import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Settings = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
       <TouchableOpacity style={styles.backArrow}>
              <AntDesign name="left" size={18} color="rgba(32, 41, 84, 1)" />
            </TouchableOpacity>
    
            <Text style={styles.title}>Setting</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <SettingItem title="Account Information" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
        <SettingItem title="Privacy" />
      </TouchableOpacity>

    
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <SettingItem title="Notifications" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const SettingItem = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{title}</Text>
    <Icon name="chevron-right" size={20} color="rgba(32, 41, 84, 1)" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fbff',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#333',
  },
     backArrow: {
          position: 'absolute',
          top: 10,
          left: 8,
          zIndex: 1,
        },
        title: {
          fontSize:20,
          fontWeight: '800',
          textAlign: 'center',
          color: '#1E2A78',
          marginBottom: 30,
        },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: "rgba(32, 41, 84, 1)",
    fontWeight: '500',
  },
});

export default Settings;
