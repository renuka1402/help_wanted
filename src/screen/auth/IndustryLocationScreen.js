import {React,  useMemo ,useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './auth'; // ✅ Correct

import Geolocation from '@react-native-community/geolocation'; // install this if not using Expo
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { useWindowDimensions } from 'react-native';

const IndustryLocationScreen = ({navigation}) => {
      const { width } =useWindowDimensions()
        const isTablet = width >= 460;
      
        const styles = useMemo(() => createStyles(isTablet), [isTablet]);
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');

  const getLocation = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission denied', 'Location permission is required.');
        return;
      }
    }

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Lat: ${latitude.toFixed(3)}, Lon: ${longitude.toFixed(3)}`);
      },
      (error) => {
        Alert.alert('Error', error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
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
            placeholderTextColor="#000"
            value={industry}
            onChangeText={setIndustry}
          />
        </View>

        <TouchableOpacity style={styles.inputContainer} onPress={getLocation}>
          <Feather name="map-pin" size={18} color="#A0AEC0" style={styles.icon} />
          <Text style={[styles.input, { paddingVertical: 10 }]}>
            {location || ' Location'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity   style={[
    styles.signInButton,
    { marginTop: isTablet ? 10 : 120 }
  ]}onPress={() => navigation.navigate('Notification')}>
          <Text style={styles.signInText}>Continue</Text>
          <AntDesign name="right" size={15} color="#fff"  style={styles.rightarrow}/>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// ... (Keep the existing styles)




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#EDF2F7',
//   },
//   content: {
//     padding: 20,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginTop: 60,
//     marginBottom: 30,
//   },
//   logo: {
//     width: 280,
//     height: 130,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 10,
//     color: '#111',
//     marginTop: 20,
//   },
  // instruction: {
  //   fontSize: 13,
  //   color: '#4A5568',
  //   marginBottom: 20,
  // },
  // bold: {
  //   fontWeight: 'bold',
  //   color: '#1A202C',
  // },
//   email: {
//     fontWeight: '600',
//     color: '#1A202C',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 3,
//     marginBottom: 15,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 2,
//   },
//   icon: {
//     marginRight: 30,
//     marginLeft: 25,
//   },
//   input: {
//     flex: 1,
//     color: '#1A202C',
//     fontSize: 14,
//   },
//   continueButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(32, 41, 84, 1)',
//     paddingVertical: 12,
//     borderRadius: 10,
//     marginTop: 110,
//   },
//   continueText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   rightarrow: {
//     position: 'absolute',
//     right: 10,
//   },
// });

export default IndustryLocationScreen;
