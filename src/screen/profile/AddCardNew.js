import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AddNewCardScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: rh(4) }}>
    <TouchableOpacity style={styles.backArrow}>
                    <AntDesign name="left" size={18} color="rgba(32, 41, 84, 1)" />
                  </TouchableOpacity>
    
          <Text style={styles.title}>Add New Card</Text>

      <Text style={styles.sectionTitle}>Card Details</Text>
<View style={styles.card}>
      <View style={styles.cardNumberBox}>
        <TextInput
          placeholder="xxxx-xxxx-xxxx-2345"
          style={styles.cardNumberInput}
          placeholderTextColor="#999"
        />
        <Text style={styles.visaText}>VISA</Text>
      </View>

      <View style={styles.row}>
        <TextInput placeholder="Expiry Date" style={styles.halfInput} placeholderTextColor="#999" />
        <TextInput placeholder="CVV Code" style={styles.halfInput} placeholderTextColor="#999" />
      </View>

      <View style={styles.row}>
        <TextInput placeholder="First Name*" style={styles.halfInput} placeholderTextColor="#999" />
        <TextInput placeholder="Last Name*" style={styles.halfInput} placeholderTextColor="#999" />
      </View>
      </View>

      <Text style={styles.sectionTitle}>Billing Address</Text>

      <TextInput placeholder="Address Line 1*" style={styles.fullInput} placeholderTextColor="#999" />
      <TextInput placeholder="Address Line 2" style={styles.fullInput} placeholderTextColor="#999" />

      <View style={styles.row}>
        <TextInput placeholder="Country*" style={styles.halfInput} placeholderTextColor="#999" />
        <TextInput placeholder="Select State*" style={styles.halfInput} placeholderTextColor="#999" />
      </View>

      <View style={styles.row}>
        <TextInput placeholder="Select City*" style={styles.halfInput} placeholderTextColor="#999" />
        <TextInput placeholder="Zip Code*" style={styles.halfInput} placeholderTextColor="#999" />
      </View>

      <TouchableOpacity style={styles.clearBtn}>
        <Text style={styles.clearText}>Clear</Text>
        <Icon name="x" size={rf(2)} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addText}>Add</Text>
       <AntDesign name="right" size={15} color="#fff"  style={styles.rightarrow}/>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddNewCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: rw(5),
    paddingTop: rh(4),
  },
  title: {
    fontSize: rf(2.3),
    fontWeight: '600',
    textAlign: 'center',
    color: '#1E2A78',
    marginBottom: rh(3),
    borderBottomWidth:2,
    borderBottomColor:'#ddd'
  },
  backArrow: {
    position: 'absolute',
    top: rh(0.2),
    left: rw(4),
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: rf(2),
    fontWeight: '600',
    color: '#555',
    marginBottom: rh(1.5),
  },
  cardNumberBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: rw(2),
    padding: rw(3),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: rh(2),
    elevation: 3,
    
  },
  cardNumberInput: {
    fontSize: rf(1.9),
    color: '#000',
    flex: 1,
  },
  visaText: {
    fontWeight: 'bold',
    color: '#1e3a8a',
    fontSize: rf(2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rh(2),
  },
  halfInput: {
    backgroundColor: '#fff',
    borderRadius: rw(2),
    width: rw(42.5),
    paddingVertical: rh(1.8),
    paddingHorizontal: rw(3),
    fontSize: rf(1.9),
    color: '#000',
    elevation: 3,
  },
  card:{
   borderBottomWidth:2,
    borderBottomColor:'#ddd'
  },
  fullInput: {
    backgroundColor: '#fff',
    borderRadius: rw(2),
    paddingVertical: rh(1.8),
    paddingHorizontal: rw(3),
    fontSize: rf(1.9),
    color: '#000',
    marginBottom: rh(2),
    elevation: 3,
  },
  clearBtn: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: rh(2),
  },
  clearText: {
    color: '#888',
    fontSize: rf(1.9),
    marginRight: rw(1.5),
  },
    rightarrow: {
    position: 'absolute',
    right: rw(4),
    top: rw(5)
  },
  addBtn: {
   backgroundColor: '#1e2e5a',
    borderRadius: rw(2),
    paddingVertical: rh(1.8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:rh(9)
  },
  addText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: rf(2.1),
    marginRight: rw(2),
  },
});
