import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { responsiveFontSize as rf, responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const cards = [
  {
    id: '1',
    brand: 'visa',
    holder: 'NAMAN MANZOOR',
    last4: '2345',
    expiry: '02/30',
    logo: require('../../assests/images/logo3.png'),
    logo1: require('../../assests/images/logo2.png'),
  },
  {
    id: '2',
    brand: 'mastercard',
    holder: 'Noman Manzoor',
    last4: '2345',
    expiry: '02/30',
    logo: require('../../assests/images/logo1.png'),
    logo1: require('../../assests/images/logo2.png'),
  },
  {
    id: '3',
    brand: 'amex',
    holder: 'Noman Manzoor',
    last4: '2345',
    expiry: '02/30',
    logo: require('../../assests/images/logo1.png'),
    logo1: require('../../assests/images/logo2.png'),
  },
];

const PaymentMethodsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
   <TouchableOpacity style={styles.backArrow}>
                   <AntDesign name="left" size={18} color="rgba(32, 41, 84, 1)" />
                 </TouchableOpacity>
   
         <Text style={styles.title}>Payment Method</Text>
      <Text style={styles.subtitle}>Available Cards</Text>

      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={{ marginBottom: rh(3) }}>
            <View style={[styles.card, index === 0 && styles.selectedCard]}>
              <View style={styles.cardHeader}>
                <Image source={item.logo} style={styles.logo} resizeMode="contain" />
                <Image source={item.logo1} style={styles.logo} resizeMode="contain" />
              </View>

              <Text style={styles.cardNumber}>**** **** **** {item.last4}</Text>

              <View style={styles.cardDetails}>
                <View>
                  <Text style={styles.label}>Card Holder name</Text>
                  <Text style={styles.value}>{item.holder}</Text>
                </View>
                <View>
                  <Text style={styles.label}>Expiry Date</Text>
                  <Text style={styles.value}>{item.expiry}</Text>
                </View>
              </View>
            </View>

            {/* Delete & Edit outside card */}
            <View style={styles.cardActionsOutside}>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon name="trash-can-outline" size={rf(2.2)} color="#FF4C4C" />
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon name="pencil-outline" size={rf(2.2)} color="#1e2e5a" />
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: rh(2) }}
      />

      <TouchableOpacity style={styles.addButton}  onPress={()=>navigation.navigate('AddNewCard')}>
        <Text style={styles.addButtonText}>+ New Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: rw(8),
    backgroundColor: '#f6f9fc',
  },
backArrow: {
    position: 'absolute',
    top:rh(5),
    left: rw(7),
    zIndex: 1,
  },
  title: {
    fontSize:  19 ,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1E2A78',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: rf(2),
    marginBottom: rh(1),
    marginLeft:rw(10),
    color: '#1e2e5a',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: rw(3),
    padding: rw(5),
    width:rw(89),
    alignSelf:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedCard: {
    borderWidth: 1.5,
    borderColor: '#1e2e5a',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rh(1),
  },
  logo: {
    width: rw(15),
    height: rh(4),
  },
  cardNumber: {
    fontSize: rf(2.4),
    letterSpacing: 2,
    marginVertical: rh(1),
    color: '#1e2e5a',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: rh(1),
  },
  label: {
    fontSize: rf(1.4),
    color: 'gray',
  },
  value: {
    fontSize: rf(1.8),
    fontWeight: '600',
    color: '#1e2e5a',
  },
  cardActionsOutside: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: rw(5),
    marginTop: rh(1),
    marginRight: rw(10),
  
    borderBottomWidth:1,
    borderBottomColor:'#eee'
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: rw(1),
      marginBottom:rh(2),
  },
  delete: {
    color: '#FF4C4C',
    fontSize: rf(1.8),
    marginLeft: rw(1),
  },
  edit: {
    color: '#1e2e5a',
    fontSize: rf(1.8),
    marginLeft: rw(1),
  },
  addButton: {
    backgroundColor: '#1e2e5a',
    paddingVertical: rh(1.6),
    borderRadius: rw(2),
    alignItems: 'center',
    width: rw(90),
    alignSelf: 'center',
    marginTop: rh(2), 
    marginBottom: rh(3),
  },

  addButtonText: {
    color: 'white',
    fontSize: rf(2.2),
    fontWeight: '600',
  },
});
