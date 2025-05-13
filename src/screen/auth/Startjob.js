import {React,  useMemo } from 'react';
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

const StartScreen = ({navigation}) => {
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

      <View style={styles.card}>
        <Text style={styles.title}>Start my job search</Text>
        <Text style={styles.subtitle}>
          Find the perfect job effortlessly! Explore top opportunities, connect with employers, and take the next step in your career today.
        </Text>

        <TouchableOpacity style={styles.inputContainer}>
          <Icon name="search" size={20} color="#333" style={styles.icon} />
          <Text style={[styles.input, { paddingVertical: 10,marginLeft:20 }]}>Search Job</Text>
          <Icon name="chevron-forward" size={20} color="#333" style={styles.rightarrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <View style={styles.card}>
        <Text style={styles.title}>Elevate Your Profile</Text>
        <Text style={styles.subtitle}>
          Find the perfect job effortlessly! Explore top opportunities, connect with employers, and take the next step in your career today.
        </Text>

        <TouchableOpacity style={styles.inputContainer}onPress={()=>navigation.navigate('Home')}>
          <Icon name="person" size={20} color="#333" style={styles.icon} />
          <Text style={[styles.input, { paddingVertical: 10 ,marginLeft:10 }]}>Shape Your Presence</Text>
          <Icon name="chevron-forward" size={20} color="#333" style={styles.rightarrow} />
        </TouchableOpacity>
      </View>
      </ScrollView>
   </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#f0f4f8',
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 40,
//     paddingHorizontal: 16,
//   },
//   logo: {
//     width: 160,
//     height: 120,
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     width: '100%',
//     marginBottom: 20,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#1e1e2d',
//     marginBottom: 6,
//   },
//   subtitle: {
//     fontSize: 13,
//     color: '#5a5a5a',
//     marginBottom: 12,
//   },
//   button: {
//     backgroundColor: '#f6f7f9',
//     borderRadius: 8,
//     padding: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     marginRight: 10,
//   },
//   buttonText: {
//     flex: 1,
//     color: '#333',
//     fontWeight: '600',
//   },
//   arrow: {
//     marginLeft: 10,
//   },
// });

export default StartScreen;
