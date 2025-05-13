import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './auth';
import { useWindowDimensions } from 'react-native';

const EmailVerificationScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 460;

  const styles = useMemo(() => createStyles(isTablet), [isTablet]);
  const [code, setCode] = useState(['', '', '', '', '', '']);


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

        <Text style={styles.title}>Please verify your email address</Text>
        <Text style={styles.subtitle}>
          We just sent a 6-digit verification code to your email:{" "}
          <Text style={styles.email}>abcd@gmail.com</Text>. Please enter the code
        </Text>

        <Text style={styles.title1}>Enter Verification code</Text>
        <View style={styles.codeInputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              
            />
          ))}
        </View>

        <Text style={styles.spamNote1}>
          Can't find the email? Try checking your spam folder.
        </Text>
        <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
          00:00
        </Text>
        <TouchableOpacity onPress={() => setTimer(120)}>
          <Text style={styles.resendText}>Send a new code</Text>
        </TouchableOpacity>
      </View>

        <TouchableOpacity
          style={[
            styles.signInButton,
            { marginTop: isTablet ? 10 : 100 }
          ]}
          onPress={() => navigation.navigate('IndustryLocation')}
        >
          <Text style={styles.signInText}>Continue</Text>
          <AntDesign name="right" size={15} color="#fff" style={styles.rightarrow} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmailVerificationScreen;
