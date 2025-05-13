import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const useResponsiveStyles = () => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 468;

  return useMemo(() =>
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F6F8FA',
        padding: rw(isTablet ? 4 : 4),
        paddingTop: rh(3),
      },
      backArrow: {
        position: 'absolute',
        top: rh(1),
        left: rw(2),
        zIndex: 1,
      },
      title: {
        fontSize: rf(isTablet ? 2.8 : 2.2),
        fontWeight: '600',
        textAlign: 'center',
        color: '#1E2A78',
        marginBottom: rh(3),
      },
      inputBox: {
        width:rw(isTablet ? 90 :90),
        backgroundColor: '#fff',
        borderRadius: rw(3),
        paddingHorizontal: rw(3),
        paddingVertical: rh(1.5),
        marginBottom: rh(2),
        elevation: 2,
        alignSelf:'center'
      },
      inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        paddingVertical: rh(1),
      },
      input: {
        flex: 1,
        fontSize: rf(1.8),
        color: '#333',
      },
      sliderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: rh(2),
      },
      sliderLabel: {
        fontSize: rf(1.8),
        fontWeight: '500',
        color: '#333',
      },
      sliderValue: {
        fontSize: rf(1.7),
        color: '#888',
      },
      btn: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      searchBtn: {
        backgroundColor: 'rgba(32, 41, 84, 1)',
        paddingVertical: rw(isTablet ? 2 :3.5),
        borderRadius:  rw(isTablet ? 1.3 :2),
        marginVertical: rh(2.5),
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
      },
      searchText: {
        color: '#fff',
        fontSize: rf(1.9),
        fontWeight: '600',
      },
      popularHeading: {
        fontSize: rw(isTablet ? 2.5 :4.3),
        fontWeight: '600',
        color: '#1E2A78',
        marginBottom:  rw(isTablet ? 3 :4),
        marginTop:  rw(isTablet ? 3 :4),
      },
      popularItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: rh(2),
      },
      iconBox: {
        backgroundColor: '#fff',
        padding:rw(isTablet ? 2 :3.5),
        borderRadius: rw(isTablet ? 1 :2),
        marginRight: rw(3),
        marginLeft: rw(1),
        elevation: 2,
      },
      popularLabel: {
        flex: 1,
        fontSize: rf(1.8),
        color: '#1E2A78',
        fontWeight: '500',
      },
      popularCount: {
        fontSize: rw(isTablet ? 2 :3.5),
        color: '#666',
      },
    }), [width]
  );
};

const SearchScreen = ({ navigation }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState(100);
  const styles = useResponsiveStyles();

  const popularSearches = [
    { id: '1', icon: 'user-cog', label: 'Engineer', count: 17 },
    { id: '2', icon: 'car', label: 'Driver', count: 917 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.backArrow}>
          <AntDesign name="left" size={18} color="rgba(32, 41, 84, 1)" />
        </TouchableOpacity>

        <Text style={styles.title}>Job Search</Text>

        <View style={styles.inputBox}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Keyword Jobs"
              placeholderTextColor="black"
              style={styles.input}
              value={keyword}
              onChangeText={setKeyword}
            />
            <Ionicons name="search" size={18} color="#888" />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Location"
              placeholderTextColor="black"
              style={styles.input}
              value={location}
              onChangeText={setLocation}
            />
            <Ionicons name="location-outline" size={18} color="#888" />
          </View>
        </View>

        <View style={styles.sliderHeader}>
          <Text style={styles.sliderLabel}>Radius</Text>
          <Text style={styles.sliderValue}>{radius} miles</Text>
        </View>

        <Slider
          style={{ width: '100%' }}
          minimumValue={0}
          maximumValue={200}
          step={1}
          value={radius}
          onValueChange={setRadius}
          minimumTrackTintColor="#1E2A78"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#1E2A78"
        />

        <View style={styles.btn}>
          <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.navigate('SearchPage')}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.popularHeading}>Popular Searches</Text>

        <FlatList
          data={popularSearches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.popularItem}>
              <View style={styles.iconBox}>
                <FontAwesome5 name={item.icon} size={18} color="#FF7F50" />
              </View>
              <Text style={styles.popularLabel}>{item.label}</Text>
              <Text style={styles.popularCount}>• {item.count}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
