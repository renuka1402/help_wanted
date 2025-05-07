import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screen/auth/Opening';

import PasswordScreen from './src/screen/auth/Password';
import SigningScreen from './src/screen/auth/Signing';
import SelectFieldScreen from './src/screen/auth/SelectFieldScreen';
import SelectUserScreen from './src/screen/auth/SelectUserFrom';
import LetsgoScreen from './src/screen/auth/Letsgo';
import EmailVerificationScreen from './src/screen/auth/Verity';
import IndustryLocationScreen from './src/screen/auth/IndustryLocationScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name='Signing' component={SigningScreen}/>
        <Stack.Screen name='Password' component={PasswordScreen}/>
        <Stack.Screen name='SelectField' component={SelectFieldScreen}/>
        <Stack.Screen name='SelectUser' component={SelectUserScreen}/>
        <Stack.Screen name='Letsgo' component={LetsgoScreen}/>
        <Stack.Screen name='Emailverify' component={EmailVerificationScreen}/>   
        <Stack.Screen name='IndustryLocation'     component={IndustryLocationScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}




// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// const AskLocation = () => {
//   const [coords, setCoords] = useState(null);

//   const requestPermission = async () => {
//     const permissionType =
//       Platform.OS === 'ios'
//         ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//         : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

//     const result = await request(permissionType);

//     if (result === RESULTS.GRANTED) {
//       Geolocation.getCurrentPosition(
//         (position) => {
//           setCoords(position.coords);
//         },
//         (error) => {
//           Alert.alert('Location Error', error.message);
//         },
//         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//       );
//     } else {
//       Alert.alert('Permission Denied', 'Location access is needed.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={requestPermission} style={styles.button}>
//         <Text style={styles.buttonText}>Get My Location</Text>
//       </TouchableOpacity>
//       {coords && (
//         <Text style={styles.coordsText}>
//           Lat: {coords.latitude}, Lon: {coords.longitude}
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   button: {
//     backgroundColor: '#2B6CB0',
//     padding: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   coordsText: { marginTop: 20, fontSize: 16 },
// });

// export default AskLocation;
