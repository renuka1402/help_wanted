import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ContactUsScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [images, setImages] = useState([]);

  const pickImage = () => {
    if (images.length >= 4) {
      Alert.alert('Limit Reached', 'You can only upload up to 4 images.');
      return;
    }

    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode) {
        setImages([...images, response.assets[0]]);
      }
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: rh(5) }}>
      <TouchableOpacity style={styles.backArrow}>
        <Icon name="arrow-left" size={rf(2.5)} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Contact US</Text>

      <Text style={styles.heading}>Get in Touch with Us</Text>
      <Text style={styles.subText}>
        We're here to help! Reach out to us for any inquiries, support, or feedback.
      </Text>

      {/* Feedback Input */}
      <TextInput
        style={styles.textArea}
        placeholder="Write your feedback here"
        placeholderTextColor="#aaa"
        multiline
        value={feedback}
        onChangeText={setFeedback}
      />

      <Text style={styles.imageLimitText}>Maximum 4 images</Text>

      {/* Image Picker Grid */}
      <View style={styles.imageRow}>
        {Array.from({ length: 4 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageBox}
            onPress={pickImage}
            disabled={index > images.length}
          >
            {images[index] ? (
              <Image
                source={{ uri: images[index].uri }}
                style={{ height: '100%', width: '100%', borderRadius: rw(2) }}
              />
            ) : (
              <Icon name="image" size={rf(2.5)} color="#bbb"  style={styles.img}/>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f9',
    paddingHorizontal: rw(5),
    paddingTop: rh(4),
  },
backArrow: {
    position: 'absolute',
    top:1,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize:  19 ,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1E2A78',
    marginBottom: 30,
  },
  heading: {
    fontSize: rf(2.5),
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: rh(1),
  },
  subText: {
    fontSize: rf(1.8),
    color: '#666',
    marginBottom: rh(3),
  },
  textArea: {
    height: rh(25),
    backgroundColor: '#fff',
    borderRadius: rw(3),
    padding: rw(4),
    fontSize: rf(2),
    textAlignVertical: 'top',
    elevation: 2,
  },
  imageLimitText: {
    marginTop: rh(2),
    fontSize: rf(1.7),
    color: '#999',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: rh(1.5),
  },
  imageBox: {
    height: rh(8),
    width: rw(17),
  
    borderWidth: 2,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: rw(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#1a2c64',
    paddingVertical: rh(1.8),
    borderRadius: rw(2),
    marginTop: rh(28),
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: rf(2.1),
    fontWeight: '600',
  },

});
