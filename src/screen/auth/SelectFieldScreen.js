import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SelectFieldScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.logoContainer}>
          <Image
            source={require('../../assests/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Job Seeker</Text>
          <Text style={styles.sectionDescription}>
            Find the perfect job effortlessly! Explore top opportunities, connect with employers,
            and take the next step in your career today.
          </Text>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SelectUser')}>
            <Text style={styles.buttonText}>I'm a Job Seeker</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Employer</Text>
          <Text style={styles.sectionDescription}>
            Find the perfect job effortlessly! Explore top opportunities, connect with employers,
            and take the next step in your career today.
          </Text>
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SelectUser')}>
            <Text style={styles.buttonText}>I'm an Employer</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F7',
  },
  scrollContent: {
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 250,
    height: 100,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A202C', 
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#1A202C',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#CBD5E0',
    marginVertical: 10,
  },
});

export default SelectFieldScreen;
