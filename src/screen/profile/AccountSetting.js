import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AccountSettings = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
       <TouchableOpacity style={styles.backArrow}>
                   <AntDesign name="left" size={18} color="rgba(32, 41, 84, 1)" />
                 </TouchableOpacity>
         
                 <Text style={styles.title}>Setting</Text>

      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('AccountInformation')}>
        <Text style={styles.itemText}>Account Information</Text>
        <Icon name="chevron-right" size={20} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View>
          <Text style={styles.itemText}>Change Email</Text>
          <View style={styles.subTextRow}>
            <Text style={styles.subText}>abc@abc.com</Text>
            <Text style={styles.verified}>✔ Verified</Text>
          </View>
        </View>
        <Icon name="chevron-right" size={20} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('AddPhone')}>
        <Text style={styles.itemText}>Add Phone Number</Text>
        <Icon name="chevron-right" size={20} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Change Password</Text>
        <Icon name="chevron-right" size={20} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('PaymentMethodsScreen')}>
        <Text style={styles.itemText}>Payment Methods</Text>
        <Icon name="chevron-right" size={20} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('PaymentMethodsScreen')}>
        <Text style={styles.itemText}>Uploaded Images</Text>
        <Icon name="chevron-right" size={20} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Contact')}>
        <Text style={styles.itemText}>Contact Us</Text>
        <Icon name="chevron-right" size={20} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteAccount}>
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout}>
        <Text style={styles.logoutText}>Log Out</Text>
        <Icon name="log-out" size={20} color="red" style={styles.logoutIcon} />
      </TouchableOpacity>

      <Text style={styles.version}>V–25.2</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9fbff',
    flex: 1,
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
          top:8,
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
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 15,
   color:"rgba(32, 41, 84, 1)",
   fontWeight:'500'
  },
  subTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  subText: {
    fontSize: 15,
color:"rgba(32, 41, 84, 1)"
  },
  verified: {
    fontSize: 14,
    color: 'green',
    marginLeft: 10,
  },
  deleteAccount: {
    marginTop: 160,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    
    borderColor: '#ccc',
  },
  deleteText: {
    fontSize: 15,
  color:"rgba(32, 41, 84, 1)"
  },
  logout: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 10,
  },
  logoutText: {
    fontSize: 15,
    color: 'red',
    marginRight: 10,
  },
  version: {
    fontSize: 10,
    color: '#999',
    marginTop: 10,
    marginBottom:30
    
  },
  logoutIcon:{
    textAlign:'right',
    alignItems:'flex-end'
  }
});

export default AccountSettings;
