import {React,  useMemo ,useState} from 'react';
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
import { useWindowDimensions } from 'react-native';// assuming your shared base styles are here

const CreatePasswordScreen = ({ navigation }) => {
      const { width } =useWindowDimensions()
        const isTablet = width >= 460;
      
        const styles = useMemo(() => createStyles(isTablet), [isTablet]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Validation conditions
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const noSpaces = !/\s/.test(password);
  const passwordsMatch = password === confirmPassword;

  const isValid =
    minLength &&
    hasUpper &&
    hasLower &&
    hasNumber &&
    hasSpecial &&
    noSpaces &&
    passwordsMatch;

  const getRuleStyle = (condition) => {
    if (condition) return styles.pass;
    if (submitted) return styles.fail;
    return styles.default;
  };

  const handleContinue = () => {
    if (!isValid) {
      setSubmitted(true);
      return;
    }

    Alert.alert('Success', 'Password created!');
    navigation.navigate('NextScreen'); 
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
        <Text style={styles.title}>Set Your Password</Text>
        <Text style={styles.subtitle}>
          Set your password to continue and take the next step toward accessing your access.
        </Text>

        <View style={styles.inputContainer}>
          <AntDesign name="lock" size={16} color="#aaa" style={styles.icon} />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <AntDesign name="lock" size={16} color="#aaa" style={styles.icon} />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

       
        <View style={styles.rules}>
          <Text style={[styles.ruleText, getRuleStyle(minLength)]}>
            Minimum 8 characters
          </Text>
          <Text style={[styles.ruleText, getRuleStyle(hasUpper && hasLower)]}>
            Includes uppercase and lowercase letters
          </Text>
          <Text style={[styles.ruleText, getRuleStyle(hasNumber)]}>
            Must contain numbers
          </Text>
          <Text style={[styles.ruleText, getRuleStyle(hasSpecial)]}>
            Must contain special characters
          </Text>
          <Text style={[styles.ruleText, getRuleStyle(noSpaces)]}>
            No spaces allowed
          </Text>
        
        </View>

        <TouchableOpacity
          style={[styles.signInButton, { marginTop: 50 }]}
          onPress={handleContinue}
        >
          <Text style={styles.signInText}>Continue</Text>
          <AntDesign name="right" size={15} color="#fff" style={styles.rightarrow} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePasswordScreen;
