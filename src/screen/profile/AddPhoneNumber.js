import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const AddPhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <Text style={styles.screenTitle}>Add Phone Number</Text>

        {/* Title & Subtitle */}
        <Text style={styles.title}>Add New Phone Number</Text>
        <Text style={styles.subtitle}>
          Enter your new number to continue and verify number
        </Text>

        {/* Phone Input */}
        <View style={styles.inputWrapper}>
          <Text style={styles.countryCode}>🇮🇳 +91</Text>
          <TextInput
            placeholder="Phone Number"
            keyboardType="phone-pad"
            style={styles.input}
            maxLength={10}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Icon name="phone" size={20} color="#aaa" />
        </View>

        {/* Validation Points */}
        <View style={styles.validationWrapper}>
          <Text style={styles.validationText}>Minimum 8 characters</Text>
          <Text style={styles.validationText}>Includes uppercase and lowercase letters</Text>
          <Text style={styles.validationText}>Must contains numbers</Text>
          <Text style={styles.validationText}>Must contains special characters</Text>
          <Text style={styles.validationText}>No spaces allowed</Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
          <Icon name="arrow-right" size={18} color="#fff" style={{ marginLeft: 8 }} />
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddPhoneNumberScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  screenTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a4c',
    marginBottom: 30,
    alignSelf: 'center',
  },
  title: {
    fontSize: isTablet ? 22 : 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: isTablet ? 14 : 12,
    color: '#6e6e6e',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  validationWrapper: {
    marginBottom: 30,
  },
  validationText: {
    fontSize: 13,
    color: '#999',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#1a1a4c',
    borderRadius: 10,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
