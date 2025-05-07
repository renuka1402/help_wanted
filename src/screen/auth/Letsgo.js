import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const LetsgoScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assests/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.heading}>Let’s get you set up</Text>
        <Text style={styles.subText}>
        We’ll create an account for abcd@gmail.com. We’ll send you a verification code
        </Text>

        <TouchableOpacity style={styles.signInButton} onPress={()=>navigation.navigate('Emailverify')}>
          <Text style={styles.signInText}>Contineu</Text>
          <Icon name="arrow-forward-outline" size={18} color="#fff" />
        </TouchableOpacity>

        <View style={styles.bottomRow}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

      
      </ScrollView>
    </SafeAreaView>
  );
};

export default LetsgoScreen;


const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'rgba(239, 243, 246, 1)',
    },
    container: {
      padding: 24,
      paddingBottom: 60,
    },
    logoContainer: {
      alignItems: 'center',
      marginTop: 50,
      marginBottom: 30,
    },
    logo: {
      width: 300,
      height: 120,
    },
    heading: {
      fontSize: 24,
      fontWeight: '600',
      marginBottom: 10,
      color: '#111',
    },
    subText: {
      fontSize: 14,
      color: '#555',
      marginBottom: 6,
      lineHeight: 20,
    },
    authButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginTop: 16,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 2,
    },
    icon: {
      marginRight: 10,
    },
    authText: {
      fontSize: 16,
      color: '#000',
    },
    orText: {
      textAlign: 'center',
      marginVertical: 16,
      color: '#888',
      fontSize: 14,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 2,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 1,
      marginTop: 30,
    },
    input: {
      flex: 1,
      marginLeft: 10,
      fontSize: 15,
      color: '#000',
    },
    signInButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(32, 41, 84, 1)',
      paddingVertical: 12,
      borderRadius: 10,
      marginTop: 330,
    },
    signInText: {
      color: '#fff',
      fontSize: 16,
      marginRight: 8,
    },
    bottomRow: {
      marginTop: 12,
      alignItems: 'flex-end',
    },
    forgotText: {
      fontSize: 13,
      color: '#777',
    },
    registerRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    registerText: {
      color: '#0033cc',
      fontWeight: '500',
    },
  });
  
