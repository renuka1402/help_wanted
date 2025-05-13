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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const useResponsiveStyles = () => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 468;

  return useMemo(() => StyleSheet.create({
    container: {
      backgroundColor: '#f0f4f8',
      paddingTop: rh(3),
      flex: 1,
    },
    backArrow: {
      position: 'absolute',
      top: rh(4),
      left: rw(2),
      zIndex: 1,
    },
    rightarrow: {
      padding: rw(2),
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
      color: '#2e3557',
      marginBottom: rh(1),
    },
    tabsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#f1f5fb',
    },
    tabButton: {
      paddingVertical: rh(2),
      paddingHorizontal: rw(5),
      alignItems: 'center',
      position: 'relative',
    },
    tabText: {
      fontSize: rf(1.8),
      fontWeight: '600',
      color: '#2e3557',
    },
    activeTabText: {
      color: '#2e3557',
    },
    underline: {
      position: 'absolute',
      bottom: 0,
      height: 3,
      backgroundColor: '#2e3557',
      width: '100%',
      borderRadius: 2,
    },
    sectionWrapper: {
      paddingBottom: rh(1),
      marginBottom: rh(1),
      paddingHorizontal: rw(isTablet ? 5 : 4),
    },
    jobCardWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: isTablet ? 'space-between' : 'center',
    },
    jobCard: {
      backgroundColor: '#fff',
      borderRadius: rw(2),
      padding: rw(4),
      marginBottom: rh(2),
      width: rw(isTablet ? 42 : 90),
      marginRight: isTablet ? rw(2) : 0,
      height: rh(isTablet ? 70 : 29),
      marginTop: rh(isTablet ? 10 : 2),
      position: 'relative',
    },
    appliedTopRight: {
      position: 'absolute',
      top: rh(1),
      right: rw(3),
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#e6ffe6',
      paddingVertical: rh(0.3),
      paddingHorizontal: rw(2),
      borderRadius: rw(2),
    },
    appliedDateTop: {
      fontSize: rf(1.4),
      color: 'green',
      fontWeight: 'bold',
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
    },
    jobLogo: {
      width: rw(isTablet ? 4 : 9),
      height: rw(6),
      resizeMode: 'contain',
    },
    companyName: {
      fontSize: rf(isTablet ? 1.9 : 1.6),
      fontWeight: '600',
    },
    jobLocation: {
      fontSize: rf(1.6),
      color: 'rgba(32, 41, 84, 1)',
      fontWeight: '600',
      marginBottom: rh(0.5),
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
      marginTop: rh(1),
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
  }), [isTablet, width]);
};

const MyjobScreen = ({ navigation }) => {
  const styles = useResponsiveStyles();
  const [activeTab, setActiveTab] = useState('Saved');

  const savedJobs = [
    {
      title: 'Sr. UX Designer',
      company: 'Google',
      location: 'Boston, MA | San Francisco, CA',
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
  ];

  const appliedJobs = [
    {
      title: 'Sr. UX Designer',
      company: 'Google',
      location: 'New York',
      dis: 'UX Designers are the synthesis of design and development...',
      tags: ['$24/hr', '3 years exp.', 'Fulltime'],
      appliedDate: 'Jun 20, 2025',
      logo: require('../../assests/images/blackgoogle.png'),
    },
    {
      title: 'Sr. UX Designer',
      company: 'Google',
      location: 'New York',
      dis: 'UX Designers are the synthesis of design and development...',
      tags: ['$24/hr', '3 years exp.', 'Fulltime'],
      appliedDate: 'Jun 20, 2025',
      logo: require('../../assests/images/blackgoogle.png'),
    },
  ];

  const jobsToDisplay = activeTab === 'Saved' ? savedJobs : appliedJobs;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={18} color="rgba(32, 41, 84, 1)" style={styles.rightarrow} />
      </TouchableOpacity>

      <Text style={styles.title}>My Jobs</Text>

      <View style={styles.tabsWrapper}>
        <TouchableOpacity onPress={() => setActiveTab('Saved')} style={styles.tabButton}>
          <Text style={[styles.tabText, activeTab === 'Saved' && styles.activeTabText]}>
            Saved Jobs
          </Text>
          {activeTab === 'Saved' && <View style={styles.underline} />}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('Applied')} style={styles.tabButton}>
          <Text style={[styles.tabText, activeTab === 'Applied' && styles.activeTabText]}>
            Applied Jobs
          </Text>
          {activeTab === 'Applied' && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.sectionWrapper}>
          <View style={styles.jobCardWrapper}>
            {jobsToDisplay.map((job, index) => (
              <View key={index} style={styles.jobCard}>
                {activeTab === 'Applied' && (
                  <View style={styles.appliedTopRight}>
                    <AntDesign name="checkcircle" size={rf(2.2)} color="green" style={{ marginRight: rw(1) }} />
                    <Text style={styles.appliedDateTop}>Applied {job.appliedDate}</Text>
                  </View>
                )}
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
                {activeTab === 'Saved' && (
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
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyjobScreen;
