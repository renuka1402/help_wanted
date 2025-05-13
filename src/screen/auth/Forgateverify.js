import {React,  useMemo ,useState,useEffect} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './auth';
import { useWindowDimensions } from 'react-native';

const ForgateVerificationScreen = ({navigation}) => {
      const { width } = useWindowDimensions()
        const isTablet = width >= 460;
      
        const styles = useMemo(() => createStyles(isTablet), [isTablet]);
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

     <TouchableOpacity style={[styles.signInButton, { marginTop: 70 }]} onPress={()=>navigation.navigate('Createpassword')}>
             <Text style={styles.signInText}>Contineu</Text>
             <AntDesign name="right" size={15} color="#fff"  style={styles.rightarrow}/>
           </TouchableOpacity>
           </ScrollView>
    </SafeAreaView>
  );
};

export default ForgateVerificationScreen;