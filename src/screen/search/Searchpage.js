import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const useResponsiveStyles = () => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 468;

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: '#f0f4f8',
        paddingTop: rh(3),
      },
      searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: rh(2),
        paddingHorizontal: rw(4),
      },
      iconWrapper: {
        padding: rw(1.5),
      },
      searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: rw(4),
        marginBottom: rh(2),
      },
      centerSearch: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: rw(2),
        paddingVertical: isTablet ? rh(4) : rh(1.8),
        paddingHorizontal: rw(3),
        marginHorizontal: rw(2),
        elevation: 2,
        justifyContent: 'space-between',
      },
      searchText: {
        fontSize: rf(1.8),
        color: '#333',
      },
      boldText: {
        fontWeight: 'bold',
        color: '#1a1a1a',
      },
      sectionWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: rh(2),
        marginBottom: rh(2.5),
        paddingHorizontal: rw(isTablet ? 5 : 4),
      },
      sectionTitle: {
        fontSize: rf(isTablet ? 2.8 : 2.1),
        fontWeight: '600',
        marginBottom: rw(isTablet ? 2.8 : 5),
        marginTop: rw(isTablet ? 2.8 : 2),
        color: 'rgba(32, 41, 84, 1)',
        marginLeft: rw(isTablet ? 6.8 : 10),
      },
      recommendedHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      jobCardWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: isTablet ? 'space-between' : 'center',
      },
      jobCard: {
        backgroundColor: '#fff',
        borderRadius: isTablet ? rw(2.2) : rw(2.4),
        padding: rw(4),
        marginBottom: rh(2),
        width: rw(isTablet ? 42 : 90),
        marginRight: isTablet ? rw(2) : rw(0),
        height: rh(isTablet ? 70 : 29),
      },
      jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      jobTitle: {
        fontWeight: 'bold',
        fontSize: rf(isTablet ? 2.4 : 2.1),
        flex: 1,
        color: 'rgba(32, 41, 84, 1)',
        marginRight: rw(2),
        marginTop: isTablet ? rw(-1) : rw(0),
      },
      jobLogo: {
        width: rw(isTablet ? 4 : 9),
        height: rw(6),
        resizeMode: 'contain',
        marginTop: rw(isTablet ? -2 : 0),
      },
      companyName: {
        fontSize: rf(isTablet ? 1.9 : 1.6),
        fontWeight: '600',
        marginTop: isTablet ? rw(-2) : rw(-0.8),
      },
      jobLocation: {
        fontSize: rf(1.6),
        color: 'rgba(32, 41, 84, 1)',
        fontWeight: '600',
        marginBottom: rh(1),
      },
      jobLocation1: {
        fontSize: rf(1.6),
        color: '#666',
        marginBottom: rh(1),
      },
      tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: rh(1),
      },
      tag: {
        backgroundColor: '#eee',
        paddingHorizontal: rw(2),
        paddingVertical: rh(0.6),
        borderRadius: rw(2),
        marginRight: rw(1),
        marginBottom: rh(1),
      },
      tagText: {
        fontSize: rf(1.4),
      },
      postedTime: {
        fontSize: rf(1.3),
        color: '#000',
        marginBottom: rh(0.5),
      },
      actionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: isTablet ? rw(0.6) : rw(1),
      },
      applyButton: {
        borderWidth: 1,
        borderColor: 'rgb(8, 23, 101)',
        borderRadius: rh(isTablet ? 3 : 0.9),
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: rh(isTablet ? 2 : 0.9),
        paddingHorizontal: rh(isTablet ? 7 : 2.5),
        alignItems: 'center',
      },
      applyText: {
        marginRight: rw(1),
        fontWeight: 'bold',
        fontSize: rf(1.5),
        color: 'rgb(11, 25, 93)',
      },
      saveIcon: {
        marginLeft: rw(2),
        borderRadius: rw(1.2),
        borderWidth: 1,
        borderColor: 'rgb(8, 23, 101)',
        backgroundColor: '#fff',
        paddingVertical: rh(isTablet ? 2 : 0.8),
        paddingHorizontal: rh(isTablet ? 3 : 0.9),
        elevation: 2,
      },
      jobFooter: {
        alignItems: 'flex-end',
      },
      timer: {
        flexDirection: 'row',
      },
      timer1: {
        marginRight: rh(isTablet ? 1 : 0.9),
        color: '#000',
      },
      tabsWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#f1f5fb',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      tabButton: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        alignItems: 'center',
      },
      tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2e3557',
      },
      activeTabText: {
        color: '#2e3557',
      },
      underline: {
        marginTop: 6,
        height: 3,
        backgroundColor: '#2e3557',
        width: '100%',
        borderRadius: 2,
      },
    });
  }, [isTablet, width]);

  return styles;
};

const SearchPageScreen = () => {
  const styles = useResponsiveStyles();
  const [activeTab, setActiveTab] = useState('Saved');

  const jobList = [
    {
      title: 'Sr. UX Designer',
      company: 'Google',
      location: 'Boston, MA |San Francisco, CA',
      dis: 'UX Designers are the synthesis of design and development...',
      tags: ['$24/hr', '3 years exp.', 'Fulltime'],
      time: 'Posted 4 days ago',
      logo: require('../../assests/images/blackgoogle.png'),
    },
    {
      title: 'React Developer',
      company: 'Facebook',
      location: 'San Francisco',
      dis: 'UX Designers are the synthesis of design and development...',
      tags: ['REMOTE', 'CONTRACT'],
      time: 'Posted 2 days ago',
      logo: require('../../assests/images/blackgoogle.png'),
    },
    {
      title: 'Product Manager',
      company: 'Amazon',
      location: 'Seattle',
      dis: 'UX Designers are the synthesis of design and development...',
      tags: ['FULL-TIME'],
      time: 'Posted 1 day ago',
      logo: require('../../assests/images/blackgoogle.png'),
    },
    {
      title: 'Marketing Lead',
      company: 'Netflix',
      location: 'Los Angeles',
      dis: 'UX Designers are the synthesis of design and development...',
      tags: ['PART-TIME'],
      time: 'Posted 3 days ago',
      logo: require('../../assests/images/blackgoogle.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={styles.searchBarContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
          <AntDesign name="left" size={20} color="rgba(32, 41, 84, 1)" />
        </TouchableOpacity>

        <View style={styles.centerSearch}>
          <Text style={styles.searchText}>
            <Text style={styles.boldText}>Sales</Text> Jobs in{' '}
            <Text style={styles.boldText}>Boston</Text>
          </Text>
          <TouchableOpacity>
            <Icon name="search-outline" size={rf(2.5)} color="#1a1a1a" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.iconWrapper}>
          <AntDesign name="filter" size={rf(3.5)} color="#1a1a1a" />
        </TouchableOpacity>
      </View>

      <View style={styles.recommendedHeader}>
          <Text style={styles.sectionTitle}>1000 job founds</Text>
        </View>
<ScrollView>
      <View style={styles.sectionWrapper}>
     

        <View style={styles.jobCardWrapper}>
          {jobList.map((job, index) => (
            <View key={index} style={styles.jobCard}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Image source={job.logo} style={styles.jobLogo} />
              </View>
              <Text style={styles.companyName}>{job.company}</Text>
              <Text style={styles.jobLocation}>{job.location}</Text>
              <Text style={styles.jobLocation1}>{job.dis}</Text>
              <View style={styles.tagContainer}>
                {job.tags.map((tag, i) => (
                  <View key={i} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.jobFooter}>
                <View style={styles.timer}>
                  <Icon name="time-outline" size={rf(2.5)} color="#888" style={styles.timer1} />
                  <Text style={styles.postedTime}>{job.time}</Text>
                </View>
                <View style={styles.actionsRow}>
                  <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.applyText}>Apply Now</Text>
                    <Icon name="chevron-forward" size={rf(2)} color="#000" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.saveIcon}>
                    <Icon name="bookmark" size={rf(2)} color="#444" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default SearchPageScreen;
