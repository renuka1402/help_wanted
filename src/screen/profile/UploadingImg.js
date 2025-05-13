import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const screenWidth = Dimensions.get('window').width;
const isTablet = screenWidth >= 468;

const TABS = ['All', 'Profile', 'Banner'];

const dummyImages = new Array(9).fill(
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39'
);

const UploadedImagesScreen = () => {
  const [activeTab, setActiveTab] = useState('All');

  const renderImage = ({ item }) => (
    <View style={styles.imageWrapper}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}

       <TouchableOpacity style={styles.backArrow}>
                       <AntDesign name="left" size={18} color="rgba(32, 41, 84, 1)" />
                     </TouchableOpacity>
             
                     <Text style={styles.title}>Uploaded Image</Text>
     

      {/* Tabs */}
      <View style={styles.tabRow}>
        {TABS.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.tabItem}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeLine} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Date title */}
      <Text style={styles.sectionTitle}>Today</Text>

      {/* Images Grid */}
      <FlatList
        data={dummyImages}
        renderItem={renderImage}
        keyExtractor={(_, index) => index.toString()}
        numColumns={isTablet ? 4 : 3}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

export default UploadedImagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5f9',
    paddingHorizontal: isTablet ? rw(7) : rw(5),
    paddingTop: rh(3),
  },

 
  backArrow: {
    position: 'absolute',
    top:26,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize:  19 ,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1E2A78',
    marginBottom:rw(4)

  
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: rh(2),
  },
  tabItem: {
    alignItems: 'center',
    paddingVertical: rh(1),
    flex: 1,
  },
  tabText: {
    fontSize: rf(2),
    color: '#666',
  },
  activeTabText: {
    color: '#1a1a1a',
    fontWeight: '600',
  },
  activeLine: {
    marginTop: rh(0.5),
    height: 2,
    width: '60%',
    backgroundColor: '#1a1a1a',
    borderRadius: 2,
  },
  sectionTitle: {
    fontSize: rf(2),
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: rh(1.5),
  },
  gridContainer: {
    paddingBottom: rh(4),
  },
  imageWrapper: {
    flex: 1,
    margin: rw(1),
    aspectRatio: 1,
    borderRadius: rw(2),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
