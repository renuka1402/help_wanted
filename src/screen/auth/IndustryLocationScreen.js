import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const IndustryLocationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Back button could be added here if needed */}

        <View style={styles.logoContainer}>
          <Image
            source={require('../../assests/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>Please enter your industry, location</Text>

        <Text style={styles.instruction}>
          <Text style={styles.bold}>Industry:</Text> just sent a 6-digit verification code to your email: <Text style={styles.email}>abcd@gmail.com</Text>. Please enter the code{'\n\n'}
          <Text style={styles.bold}>Location:</Text> just sent a 6-digit verification code to your email: <Text style={styles.email}>abcd@gmail.com</Text>. Please enter the code
        </Text>

        <View style={styles.inputContainer}>
          <FontAwesome5 name="industry" size={18} color="#A0AEC0" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Industry"
            placeholderTextColor="#A0AEC0"
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="map-pin" size={18} color="#A0AEC0" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Location"
            placeholderTextColor="#A0AEC0"
          />
        </View>

        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
          <Feather name="arrow-right" size={18} color="#fff" style={{ marginLeft: 6 }} />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F7',
  },
  content: {
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
    marginTop:50,
  },
  logo: {
    width: 280,
    height: 130,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 10,
  },
  instruction: {
    fontSize: 13,
    color: '#4A5568',
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
    color: '#1A202C',
  },
  email: {
    fontWeight: '600',
    color: '#1A202C',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#1A202C',
    fontSize: 14,
  },
  continueButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(32, 41, 84, 1)',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 180,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default IndustryLocationScreen;
