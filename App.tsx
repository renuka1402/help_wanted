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
import NotificationScreen from './src/screen/auth/Notification';
import InformationScreen from './src/screen/auth/Information';
import StartScreen from './src/screen/auth/Startjob';
import BottomTabs from './src/navigation/Bottomnav';
import SearchPageScreen from './src/screen/search/Searchpage';
import { Settings } from 'react-native';
import AccountSettings from './src/screen/profile/AccountSetting';
import AccountInformation from './src/screen/profile/AccountInformation';
import AddPhoneNumberScreen from './src/screen/profile/AddPhoneNumber';
import PaymentMethodsScreen from './src/screen/profile/PaymentMethod';
import UploadedImagesScreen from './src/screen/profile/UploadingImg';
import ContactUsScreen from './src/screen/profile/Contactus';
import AddNewCardScreen from './src/screen/profile/AddCardNew';
import EditProfileScreen from './src/screen/profile/EditProfile';
import BasicDetailsScreen from './src/screen/profile/BasicDetail';
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
        <Stack.Screen name='Notification' component={NotificationScreen}/>
        <Stack.Screen name='Information' component={InformationScreen}/>
 
        <Stack.Screen name='Startjob' component={StartScreen}/>
        <Stack.Screen name='Home' component={BottomTabs}/>
        <Stack.Screen name='SearchPage' component={SearchPageScreen}/>
        <Stack.Screen name='Setting' component={AccountSettings}/>
        <Stack.Screen name='AccountInformation' component={AccountInformation}/>
        <Stack.Screen name='AddPhone' component={AddPhoneNumberScreen}/>
        <Stack.Screen name='PaymentMethodsScreen' component={PaymentMethodsScreen}/>
        <Stack.Screen name='UploadingImg' component={UploadedImagesScreen}/>
        <Stack.Screen name='Contact' component={ContactUsScreen}/>
        <Stack.Screen name='AddNewCard' component={AddNewCardScreen}/>
        <Stack.Screen name='EditProfile' component={EditProfileScreen}/>
        <Stack.Screen name='BasicDetail' component={BasicDetailsScreen}/>


     </Stack.Navigator>
    </NavigationContainer>
  );
}
