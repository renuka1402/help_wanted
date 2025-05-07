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
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './auth';


const PasswordScreen = ({navigation}) => {
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

        <Text style={styles.heading}>Enter Your Password</Text>
        <Text style={styles.subText}>
        Enter your password to continue and take the next step toward success.
        </Text>
   

      

        <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={22} color="#777"  style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity style={[styles.signInButton, { marginTop: 250 }]} onPress={() => navigation.navigate('SelectField')}>
          <Text style={styles.signInText}>Contineu</Text>
             <AntDesign name="right" size={15} color="#fff"  style={styles.rightarrow}/>
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

export default PasswordScreen;




