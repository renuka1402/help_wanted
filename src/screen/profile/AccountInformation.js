import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AccountInformation = () => {
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = () => {
    Alert.alert('Select Option', 'Choose Image Source', [
      {
        text: 'Camera',
        onPress: () => {
          launchCamera({ mediaType: 'photo' }, response => {
            if (!response.didCancel && !response.errorCode) {
              setProfileImage(response.assets[0].uri);
            }
          });
        },
      },
      {
        text: 'Gallery',
        onPress: () => {
          launchImageLibrary({ mediaType: 'photo' }, response => {
            if (!response.didCancel && !response.errorCode) {
              setProfileImage(response.assets[0].uri);
            }
          });
        },
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow}>
        <Icon name="arrow-left" size={rf(2.5)} color="#000" />
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.heading}>Account Information</Text>

      {/* Profile Image with Picker */}
      <TouchableOpacity onPress={pickImage} style={styles.profileWrapper}>
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : { uri: 'https://randomuser.me/api/portraits/men/41.jpg' }
          }
          style={styles.profileImage}
        />
        <View style={styles.cameraIcon}>
          <Icon name="camera" size={rf(2)} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* Name and Phone */}
      <Text style={styles.name}>Adarsh Gachha</Text>
      <View style={styles.phoneRow}>
        <Icon name="phone" size={rf(2)} color="#666" />
        <Text style={styles.phoneText}>+19283757778</Text>
      </View>

      {/* Email Card */}
      <View style={styles.emailCard}>
        <View style={styles.emailRow}>
          <Icon name="mail" size={rf(2.2)} color="#2b2b2b" />
          <Text style={styles.email}>adarshgachha@gmail.com</Text>
        </View>
        <Text style={styles.address}>1234 Elm Street</Text>
        <Text style={styles.address}>Los Angeles, CA 90001</Text>
        <Text style={styles.address}>United States</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f9',
    padding: rw(5),
    paddingTop: rh(6),
  },

  backArrow: {
    position: 'absolute',
    top: rh(1),
    left: rw(2),
    zIndex: 1,
  },
  title: {
    fontSize: rf( 2.2),
    fontWeight: '600',
    textAlign: 'center',
    color: '#1E2A78',
    marginBottom: rh(3),
  },
  heading: {
    fontSize: rf(2.5),
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: rh(3),
    color: '#1a1a1a',
  },
  profileWrapper: {
    alignSelf: 'center',
    position: 'relative',
  },
  profileImage: {
    height: rh(12),
    width: rh(12),
    borderRadius: rh(6),
    borderWidth: 2,
    borderColor: '#fff',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#333',
    borderRadius: rf(5),
    padding: rw(1.5),
  },
  name: {
    fontSize: rf(2.4),
    fontWeight: '600',
    textAlign: 'center',
    color: '#1a1a1a',
    marginTop: rh(2),
  },
  phoneRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: rh(1),
  },
  phoneText: {
    marginLeft: rw(2),
    fontSize: rf(2),
    color: '#666',
  },
  emailCard: {
    backgroundColor: '#e6effc',
    borderRadius: rw(2),
    padding: rw(4),
    marginTop: rh(4),
  },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rh(1),
  },
  email: {
    marginLeft: rw(2),
    fontSize: rf(2),
    color: '#1a1a1a',
  },
  address: {
    fontSize: rf(1.8),
    color: '#888',
    marginTop: rh(0.5),
  },
});

export default AccountInformation;
