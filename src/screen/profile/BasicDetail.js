import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const BasicDetailsScreen = () => {
  const [profileMode, setProfileMode] = useState('Locked');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Basic Details</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Adarsh Gachha"
          placeholderTextColor="#aaa"
        />

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Boston, MA"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Country"
            placeholderTextColor="#aaa"
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Experience"
          placeholderTextColor="#aaa"
        />

        <View style={styles.aboutContainer}>
          <View style={styles.toolbar}>
            <Icon name="align-left" size={rf(2.2)} />
            <Icon name="align-center" size={rf(2.2)} style={{ marginLeft: rw(2) }} />
            <Icon name="align-right" size={rf(2.2)} style={{ marginLeft: rw(2) }} />
          </View>
          <TextInput
            style={styles.aboutInput}
            placeholder="About me"
            multiline
            numberOfLines={5}
            placeholderTextColor="#aaa"
          />
        </View>
      </View>

      {/* Profile Mode Section */}
      <View style={styles.card}>
        <Text style={styles.profileHeader}>Profile Mode</Text>

        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setProfileMode('Unlocked')}
        >
          <View style={styles.radioCircle}>
            {profileMode === 'Unlocked' && <View style={styles.selectedRb} />}
          </View>
          <View>
            <Text style={styles.radioText}>Unlocked</Text>
            <Text style={styles.radioSubText}>
              Your profile will be viewed by employer they may contact you
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setProfileMode('Locked')}
        >
          <View style={styles.radioCircle}>
            {profileMode === 'Locked' && <View style={styles.selectedRb} />}
          </View>
          <View>
            <Text style={styles.radioText}>Locked</Text>
            <Text style={styles.radioSubText}>
              Your profile will not be viewed by employer they may contact you
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: rw(5),
    backgroundColor: '#f1f5f9',
  },
  header: {
    fontSize: rf(2.8),
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: rh(2),
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: rw(2),
    padding: rw(4),
    marginBottom: rh(2),
    elevation: 3,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: rw(2),
    paddingHorizontal: rw(4),
    paddingVertical: rh(1.2),
    fontSize: rf(2),
    marginBottom: rh(1.5),
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  aboutContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: rw(2),
    padding: rw(2),
    backgroundColor: '#f9f9f9',
  },
  toolbar: {
    flexDirection: 'row',
    marginBottom: rh(1),
  },
  aboutInput: {
    height: rh(12),
    textAlignVertical: 'top',
    fontSize: rf(2),
    color: '#000',
  },
  profileHeader: {
    fontSize: rf(2.2),
    fontWeight: '500',
    marginBottom: rh(1),
    color: '#000',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: rh(1.5),
  },
  radioCircle: {
    height: rw(5),
    width: rw(5),
    borderRadius: rw(2.5),
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: rw(3),
    marginTop: rh(0.5),
  },
  selectedRb: {
    width: rw(3),
    height: rw(3),
    borderRadius: rw(1.5),
    backgroundColor: '#1e3a8a',
  },
  radioText: {
    fontSize: rf(2),
    fontWeight: '500',
    color: '#000',
  },
  radioSubText: {
    fontSize: rf(1.6),
    color: '#555',
    width: rw(75),
    marginTop: rh(0.5),
  },
  addButton: {
    backgroundColor: '#1e3a8a',
    borderRadius: rw(2),
    paddingVertical: rh(2),
    marginTop: rh(2),
    marginBottom: rh(4),
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: rf(2.2),
    fontWeight: '600',
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
});

export default BasicDetailsScreen;
