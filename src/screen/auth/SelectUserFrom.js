import { React, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './auth';
import { useWindowDimensions } from 'react-native';

const SelectUserScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 460;

  const styles = useMemo(() => createStyles(isTablet), [isTablet]);
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

        <Text style={styles.heading}>Welcome!</Text>
        <Text style={styles.subText}>
          Sign in to access your account and take the next step toward success.
        </Text>
        <Text style={styles.subText}>
          Whether you're here to discover new opportunities or find top talent,
          we've got you covered!
        </Text>

        <TouchableOpacity style={styles.authButton}>
          <Icon name="logo-apple" size={25} color="#000" style={styles.icon} />
          <Text style={styles.authText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.authButton}>
          <Icon name="logo-google" size={25} color="#DB4437" style={styles.icon} />
          <Text style={styles.authText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or</Text>

        <View style={styles.inputContainer}>
          <Icon name="mail-outline" size={22} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Letsgo')}>
          <Text style={styles.signInText}>Contineu</Text>
          <AntDesign name="right" size={15} color="#fff" style={styles.rightarrow} />
        </TouchableOpacity>

        <View style={styles.bottomRow}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registerRow}>
          {/* <Text>By signing in, you accept our Terms of Use And Privacy Policy </Text> */}
          <TouchableOpacity>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectUserScreen;




