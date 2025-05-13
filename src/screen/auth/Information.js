import {React,  useMemo ,useState} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,Dimensions,Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './auth';

import { useWindowDimensions } from 'react-native';

const InformationScreen = ({navigation}) => {
      const { width } = useWindowDimensions();
        const isTablet = width >= 460;
      
        const styles = useMemo(() => createStyles(isTablet), [isTablet]);
  const [showAlert, setShowAlert] = useState(false);

  const handleContinue = () => {
    setShowAlert(true);
  };
  const handleAllow = () => {
    navigation.navigate('Startjob');
    setShowAlert(false);
    console.log('Notifications Allowed');
  };
  

  const handleDontAllow = () => {
    setShowAlert(false);
    console.log('Notifications Denied');
  };

  return (
    <SafeAreaView style={styles.safeArea}>

    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assests/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Share information with HelpWanted.com another apps & sites</Text>

      <Text style={styles.instruction}>
        <Text style={styles.bold}>Industry:</Text> just sent a 6-digit verification code to your email: <Text style={styles.email}>abcd@gmail.com</Text>. Please enter the code{'\n\n'}
        <Text style={styles.bold}>Location:</Text> just sent a 6-digit verification code to your email: <Text style={styles.email}>abcd@gmail.com</Text>. Please enter the code
      </Text>
      <TouchableOpacity   style={[
    styles.signInButton,
    { marginTop: isTablet ? 20 : 220 }
  ]} onPress={handleContinue}>
        <Text style={styles.signInText}>Continue</Text>
        <AntDesign name="right" size={15} color="#fff"  style={styles.rightarrow}/>
      </TouchableOpacity>
    </ScrollView>

    {/* Custom iOS-style Alert */}
    <Modal transparent visible={showAlert} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <Text style={styles.alertTitle}>
            “JobStack for Work” Would Like to Send You Notifications
          </Text>
          <Text style={styles.alertMessage}>
            Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.
          </Text>

          <View style={styles.dividerTop} />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonHalf} onPress={handleDontAllow}>
              <Text style={styles.buttonText}>Don’t Allow</Text>
            </TouchableOpacity>

            <View style={styles.verticalDivider} />

            <TouchableOpacity style={styles.buttonHalf} onPress={ handleAllow}>
              <Text style={styles.buttonText}>Allow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  </SafeAreaView>
);
};

export default InformationScreen;