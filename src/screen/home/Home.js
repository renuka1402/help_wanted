import React from 'react';
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

const useResponsiveStyles = () => {
  const { width } = useWindowDimensions(); 
  const isTablet = width >= 468;

  const styles = React.useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: '#f0f4f8',
        paddingHorizontal: rw(isTablet ? 5 : 4),
        paddingTop: rh(3),
      },
      customSearchBar: {
        backgroundColor: '#fff',
        borderRadius: rw(2),
        paddingVertical: isTablet ? rh(5) : rh(2),
        paddingHorizontal: rw(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: rh(2),
        elevation: 2,
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
      },
      sectionTitle: {
        fontSize: rf(isTablet ? 2.8 : 2.1),
        fontWeight: '600',
        marginBottom: rh(1.5),
        marginTop:isTablet ? rw(2) : rw(1),
        color: 'rgba(32, 41, 84, 1)',
      },
      horizontalList: {
        marginBottom: rh(1.2),
      },
      companyWrapper: {
        alignItems: 'center',
        marginRight: rw(4),
      },
      companyIconCard: {
        backgroundColor: '#fff',
        padding: isTablet ? rw(4) : rw(4),
        borderRadius: rw(1),
        marginBottom: rh(0.8),
        marginTop:isTablet ? rw(2) : rw(1),
        elevation: 1,
      },
      companyLogo: {
        width: rw(isTablet ? 5 : 8),
        height: rw(isTablet ? 4: 8),
        resizeMode: 'contain',
      },
      companyTitle: {
        fontSize: rf(isTablet ? 2.2 : 1.5),
        fontWeight: '600',
        textAlign: 'center',
        color: 'rgba(32, 41, 84, 1)',
        
      },
      companyJobs: {
        fontSize: rf(1.4),
        color: '#888',
      },
      recommendedHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      viewAll: {
        fontSize: rf(isTablet ? 2: 1.5),
        color: '#007bff',
        marginRight:isTablet ? rw(2) : rw(1),
      },
      jobCard: {
        backgroundColor: '#fff',
        borderRadius: isTablet ? rw(2.2) : rw(2.4),
        padding: rw(4),
        marginVertical: rh(1),
        marginRight: rw(4),
        marginTop:isTablet ? rw(2) : rw(1),
        width: rw(isTablet ? 45 : 75), 
        height: rh(isTablet ? 59 : 25), 
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
        marginTop:isTablet ? rw(-1) : rw(0),
      },
      jobLogo: {
        width: rw(isTablet ? 4 : 9), 
        height: rw(6),
        resizeMode: 'contain',
        marginTop: rw(isTablet ? -2 : 0), 
      },
      companyName: {
        fontSize: rf(isTablet ? 1.9 :1.6),
        fontWeight: '600',
        marginTop:isTablet ? rw(-1) : rw(-0.8),

      },
      jobLocation: {
        fontSize: rf(1.6),
        color: '#666',
        marginBottom: rh(1),
        marginTop:isTablet ? rw(2) : rw(2),
      },
      tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: rh(1),
        marginTop:isTablet ? rw(0.6) : rw(0),
      },
      tag: {
        backgroundColor: '#eee',
        paddingHorizontal: rw(2),
        paddingVertical: rh(0.6),
        borderRadius: rw(2),
        marginRight: rw(2),
        marginBottom: rh(1),
        
      
      },
      tagText: {
        fontSize: rf(1.4),
      },
      postedTime: {
        fontSize: rf(1.3),
        color: '#888',
        marginBottom: rh(0.5),
      },
      actionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: rw(0),
        marginTop:isTablet ? rw(0.6) : rw(1),

      },
      applyButton: {
        borderWidth:1,
        borderColor: 'rgb(8, 23, 101)',
        borderRadius: rh(isTablet ? 3: 0.9), 
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: rh(isTablet ? 2.1: 0.5), 
        paddingHorizontal: rh(isTablet ? 7: 2.5), 
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
        borderRadius: rw(1),
          borderWidth:1,
          borderColor: 'rgb(8, 23, 101)',
        backgroundColor:"#fff",
        paddingVertical: rh(isTablet ? 2: 0.5), 
        paddingHorizontal: rh(isTablet ? 3: 0.9), 
        elevation: 2,
      },
      jobFooter: {
        alignItems: 'flex-end',
      },
      timer:{
        flexDirection:'row'
      },
      timer1:{
       
        marginRight:rh(isTablet ? 1: 0.9), 
      }
    });
  }, [isTablet, width]); 

  return styles;
};

const HomeScreen = () => {
  const styles = useResponsiveStyles();

  const popularSearches = [
    { title: 'Engineer', jobs: 17, logo: require('../../assests/images/engineer.png') },
    { title: 'Driver', jobs: 816, logo: require('../../assests/images/driver.png') },
    { title: 'Nurse', jobs: 20, logo: require('../../assests/images/nurse.png') },
    { title: 'Educator', logo: require('../../assests/images/architure.png') },
    { title: 'Architect', jobs: 5, logo: require('../../assests/images/educator.png') },
    { title: 'Nurse', jobs: 20, logo: require('../../assests/images/nurse.png') },
    { title: 'Educator', logo: require('../../assests/images/architure.png') },
    { title: 'Architect', jobs: 5, logo: require('../../assests/images/educator.png') },
  ];

  const companies = [
    { name: 'Google', logo: require('../../assests/images/google.png'), jobs: 915 },
    { name: 'Airbnb', logo: require('../../assests/images/airbnb.png'), jobs: 815 },
    { name: 'Facebook', logo: require('../../assests/images/facebook.png'), jobs: 725 },
    { name: 'Amazon', logo: require('../../assests/images/logo.png'), jobs: 920 },
    { name: 'Netflix', logo: require('../../assests/images/logo.png'), jobs: 612 },
    { name: 'Facebook', logo: require('../../assests/images/facebook.png'), jobs: 725 },
    { name: 'Amazon', logo: require('../../assests/images/logo.png'), jobs: 920 },
    { name: 'Netflix', logo: require('../../assests/images/logo.png'), jobs: 612 },
  ];

  const jobList = [
    {
      title: 'Sr. UX Designer',
      company: 'Google',
      location: 'New York',
      tags: ['NEW YORK', 'CALIFORNIA', 'USA'],
      time: 'Posted 4 days ago',
      logo: require('../../assests/images/blackgoogle.png'),
    },
    {
      title: 'React Developer',
      company: 'Facebook',
      location: 'San Francisco',
      tags: ['REMOTE', 'CONTRACT'],
      time: 'Posted 2 days ago',
      logo: require('../../assests/images/blackgoogle.png'),
    },
    {
      title: 'Product Manager',
      company: 'Amazon',
      location: 'Seattle',
      tags: ['FULL-TIME'],
      time: 'Posted 1 day ago',
      logo: require('../../assests/images/blackgoogle.png'),
    },
    {
      title: 'Marketing Lead',
      company: 'Netflix',
      location: 'Los Angeles',
      tags: ['PART-TIME'],
      time: 'Posted 3 days ago',
      logo: require('../../assests/images/blackgoogle.png'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={styles.customSearchBar}>
        <Text style={styles.searchText}>
          <Text style={styles.boldText}>Sales</Text> Jobs in <Text style={styles.boldText}>Boston</Text>
        </Text>
        <Icon name="search-outline" size={rf(2)} color="#1a1a1a" />
      </View>

      <View style={styles.sectionWrapper}>
        <Text style={styles.sectionTitle}>Popular Searches</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {popularSearches.map((item, index) => (
            <View key={index} style={styles.companyWrapper}>
              <View style={styles.companyIconCard}>
                <Image source={item.logo} style={styles.companyLogo} />
              </View>
              <Text style={styles.companyTitle}>{item.title}</Text>
              <Text style={styles.companyJobs}>{item.jobs} jobs</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.sectionWrapper}>
        <Text style={styles.sectionTitle}>Companies Hiring Near You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {companies.map((item, index) => (
            <View key={index} style={styles.companyWrapper}>
              <View style={styles.companyIconCard}>
                <Image source={item.logo} style={styles.companyLogo} />
              </View>
              <Text style={styles.companyTitle}>{item.name}</Text>
              <Text style={styles.companyJobs}>{item.jobs} jobs</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.sectionWrapper}>
        <View style={styles.recommendedHeader}>
          <Text style={styles.sectionTitle}>Jobs recommended in your area</Text>
          <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {jobList.map((job, index) => (
            <View key={index} style={styles.jobCard}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Image source={job.logo} style={styles.jobLogo} />
              </View>
              <Text style={styles.companyName}>{job.company}</Text>
              <Text style={styles.jobLocation}>{job.location}</Text>
              <View style={styles.tagContainer}>
                {job.tags.map((tag, i) => (
                  <View key={i} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.jobFooter}>
                <View style={styles.timer}> <Icon name="time-outline" size={rf(2.5)} color="#888"  style={styles.timer1}/>
                <Text style={styles.postedTime}>{job.time}</Text></View>
               
                <View style={styles.actionsRow}>
                  <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.applyText}>Apply Now</Text>
                    <Icon name="chevron-forward" size={rf(2)} color="#000" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.saveIcon}>
                    <Icon name="bookmark-outline" size={rf(2)} color="#444" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
