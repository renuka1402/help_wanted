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

const LetsgoScreen = ({navigation}) => {
      const { width } = useWindowDimensions()
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

        <Text style={styles.heading}>Let’s get you set up</Text>
        <Text style={styles.subText}>
        We’ll create an account for abcd@gmail.com. We’ll send you a verification code
        </Text>

        <TouchableOpacity   style={[
    styles.signInButton,
    { marginTop: isTablet ? 30 : 290 }
  ]} onPress={()=>navigation.navigate('Emailverify')}>
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

export default LetsgoScreen;



  
