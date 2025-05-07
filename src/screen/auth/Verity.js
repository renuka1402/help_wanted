import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EmailVerificationScreen = ({navigation}) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleInputChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <SafeAreaView style={styles.container}>
  
      <View style={styles.logoContainer}>
        <Image
         source={require('../../assests/images/logo.png')}
          style={styles.logo}
        />
      </View>

 
      <Text style={styles.title}>Please verify your email address</Text>
      <Text style={styles.subtitle}>
        We just sent a 6-digit verification code to your email:{" "}
        <Text style={styles.email}>abcd@gmail.com</Text>. Please enter the code
      </Text>

      <Text style={styles.title}>Enter Verification code</Text>
      <View style={styles.codeInputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={text => handleInputChange(text, index)}
          />
        ))}
      </View>

      <Text style={styles.spamNote}>
        Can't find the email? Try checking your spam folder,
      </Text>

      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
          {`0${Math.floor(timer / 60)}`}:{`${timer % 60 < 10 ? '0' : ''}${timer % 60}`}
        </Text>
        <TouchableOpacity onPress={() => setTimer(120)}>
          <Text style={styles.resendText}>Send a new code</Text>
        </TouchableOpacity>
      </View>

     <TouchableOpacity style={styles.signInButton} onPress={()=>navigation.navigate('IndustryLocation')}>
             <Text style={styles.signInText}>Contineu</Text>
             <Icon name="arrow-forward-outline" size={18} color="#fff" />
           </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EmailVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F7',
    padding: 20,
  },
 
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
    marginTop:50,
  },
  logo: {
    width: 200,
    height: 120,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 20,
  },
  email: {
    fontWeight: 'bold',
    color: '#1A202C',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  codeInput: {
    width: 45,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 18,
    elevation: 2,
  },
  spamNote: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 10,
  },
  timerContainer: {
 
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  timerText: {
    color: '#E53E3E',
    fontWeight: 'bold',
  },
  resendText: {
    color: '#1A202C',
    fontWeight: '600',

  },
  verifyButton: {
    backgroundColor: '#1A202C',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(32, 41, 84, 1)',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 150,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
});
