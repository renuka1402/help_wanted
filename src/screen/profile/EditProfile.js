import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5';

import { launchImageLibrary } from 'react-native-image-picker';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const EditProfileScreen = ({ navigation }) => {
  const [banner, setBanner] = useState(null);
  const [profile, setProfile] = useState(null);

  const pickImage = (setter) => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.5 }, (response) => {
      if (!response.didCancel && response.assets?.[0]) {
        setter(response.assets[0].uri);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Banner */}
      <TouchableOpacity onPress={() => pickImage(setBanner)} style={styles.bannerContainer}>
        <Image
          source={banner ? { uri: banner } : { uri: 'https://i.imgur.com/Bz8s1nF.jpg' }}
          style={styles.banner}
        />
        <View style={styles.iconRow}>
          <TouchableOpacity>
          
            <Icon name="lock-closed" size={rf(2.5)} color=  '#fff'/>
          </TouchableOpacity>
         
        </View>
      </TouchableOpacity>

      <View style={styles.card}>
        <TouchableOpacity onPress={() => pickImage(setProfile)} style={styles.profileImgWrapper}>
          <Image
            source={profile ? { uri: profile } : { uri: 'https://i.imgur.com/ZcLLrkY.jpg' }}
            style={styles.profileImg}
          />
        </TouchableOpacity>

        <View style={styles.info}>
          <Text style={styles.name}>Adarsh Gachha</Text>
          <View style={styles.row}>
            <Icon name="location-outline" size={rf(2)} color="#555" />
            <Text style={styles.infoText}>Boston, MA</Text>
          </View>
          <View style={styles.row}>
            <Icon name="time-outline" size={rf(2)} color="#555" />
            <Text style={styles.infoText}>3 years exp.</Text>
          </View>
        </View> 
        
        <TouchableOpacity onPress={()=>navigation.navigate('BasicDetail')}>
         <Feather name="edit-2" size={rf(2.5)} color='#1e2e5a'/></TouchableOpacity>
              <Text style={styles.edit}>Edit</Text>

        <View style={styles.lockIcon}>
         
        </View>
      </View>

      <View style={styles.section}>
        {/* Resume */}
                <View style={styles.sectionTitleRow}>
  <Text style={styles.sectionTitle}>Resume</Text>
  <View style={styles.redLine} />

</View>
        <View style={styles.resumeRow}>
          <Icon name="document-text-outline" size={rf(3.5)} color="#888" style={styles.ic} />
          <Text style={styles.resumeText}>Adarsh_Gachha_Resume.pdf</Text>
          <TouchableOpacity style={styles.downloadBtn}>
            <Icon name="download-outline" size={rf(3)} color="#999" />
          </TouchableOpacity>
      
        </View>
            <Text style={styles.file}>File type: DOCX, PDF</Text>

        {/* About Me */}
               <View style={styles.sectionTitleRow}>
  <Text style={styles.sectionTitle}>About Me</Text>
  <View style={styles.redLine} />

</View>

        <Text style={styles.bodyText}>
Frontend UI/UX Designer passionate about creating intuitive and user-centric digital experiences. Skilled in React and the MERN stack.
        </Text>
         <View style={styles.cardActionsOutside}>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon1 name="trash-can-outline" size={rf(2.2)} color="#FF4C4C" />
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon name="pencil-outline" size={rf(2.2)} color="#1e2e5a" />
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>




<View style={styles.entryBlock}>

</View>


        <View style={styles.entryHeaderRow}>
        <View style={styles.sectionTitleRow}>
  <Text style={styles.sectionTitle}>Experience</Text>
  <View style={styles.redLine} />

</View>

          <Text style={styles.dateText1}>Total 2 years</Text>
        </View>

        <View style={styles.entryBlock}>
          <View style={styles.entryContent}>
            <View style={styles.entryHeaderRow}>
              <View style={styles.entryLeft}>
                <View style={styles.row}>
                  <Icon name="briefcase-outline" size={rf(2)} color="#555" />
                  <Text style={styles.entryTitle}>Sales Associate</Text>
                </View>
                <View style={styles.row}>
                  <Icon name="business-outline" size={rf(2)} color="#555" />
                  <Text style={styles.companyText}>ABC Company, Bhopal, MP</Text>
                </View>
              </View>
              <Text style={styles.dateText}>Current-2Years</Text>
            </View>
            <Text style={styles.bodyText}>• Designed and developed intuitive UI/UX solutions for web and mobile applications.</Text>
            <Text style={styles.bodyText}> Built and optimized frontend components using React and the MERN stack. </Text>
                        <Text style={styles.bodyText}>• Collaborated with dev teams to deliver pixel-perfect designs</Text>
                                    <Text style={styles.bodyText}>• Collaborated with dev teams to deliver pixel-perfect designs</Text>
          </View>
        </View>
               <View style={styles.cardActionsOutside}>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon1 name="trash-can-outline" size={rf(2.2)} color="#FF4C4C" />
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon name="pencil-outline" size={rf(2.2)} color="#1e2e5a" />
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
                  <TouchableOpacity style={styles.addExperienceBtn}>
                     <FontAwesome6 name="equals" size={rf(2.6)} color="#888" /> 
</TouchableOpacity>
<View style={styles.centerBorder} /> 

        <View style={styles.entryBlock}>
          <View style={styles.entryContent}>
            <View style={styles.entryHeaderRow}>
              <View style={styles.entryLeft}>
                <View style={styles.row}>
                  <Icon name="briefcase-outline" size={rf(2)} color="#555" />
                  <Text style={styles.entryTitle}>Sales Associate</Text>
                </View>
                <View style={styles.row}>
                  <Icon name="business-outline" size={rf(2)} color="#555" />
                  <Text style={styles.companyText}>ABC Company, Bhopal, MP</Text>
                </View>
              </View>
              <Text style={styles.dateText}>Current-2Years</Text>
            </View>
            <Text style={styles.bodyText}>• Designed and developed intuitive UI/UX solutions for web and mobile applications.</Text>
            <Text style={styles.bodyText}> Built and optimized frontend components using React and the MERN stack. </Text>
                        <Text style={styles.bodyText}>• Collaborated with dev teams to deliver pixel-perfect designs</Text>
                                    <Text style={styles.bodyText}>• Collaborated with dev teams to deliver pixel-perfect designs</Text>
          </View>
                 <View style={styles.cardActionsOutside}>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon1 name="trash-can-outline" size={rf(2.2)} color="#FF4C4C" />
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon name="pencil-outline" size={rf(2.2)} color="#1e2e5a" />
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>

                      <TouchableOpacity style={styles.addExperienceBtn}>
                     <FontAwesome6 name="equals" size={rf(2.6)} color="#888" />
  <Text style={styles.addExperienceText}> <Feather name="plus-circle" size={rf(2)} color='rgba(39, 206, 86, 1)'/> Add Experience</Text>
</TouchableOpacity>
        </View>

        {/* Education */}
            <View style={styles.sectionTitleRow}>
  <Text style={styles.sectionTitle}>Education</Text>
  <View style={styles.redLine} />

</View>

        <View style={styles.entryBlock}>
          <View style={styles.entryContent}>
            <View style={styles.entryHeaderRow}>
              <View style={styles.entryLeft}>
                <View style={styles.row}>
                  <Icon name="school-outline" size={rf(2)} color="#555" />
                  <Text style={styles.entryTitle}>Bachelor's</Text>
                </View>
                <View style={styles.row}>
                  <Icon name="business-outline" size={rf(2)} color="#555" />
                  <Text style={styles.companyText}>JNC College, Bhopal, MP</Text>
                </View>
              </View>
              <Text style={styles.dateText}>Dec 2012 – Jun 2013</Text>
            </View>            <Text style={styles.bodyText}>• Designed and developed intuitive UI/UX solutions for web and mobile applications.</Text>
            <Text style={styles.bodyText}> Built and optimized frontend components using React and the MERN stack. </Text>
                        <Text style={styles.bodyText}>• Collaborated with dev teams to deliver pixel-perfect designs</Text>
                                    <Text style={styles.bodyText}>• Collaborated with dev teams to deliver pixel-perfect designs</Text>
          </View>
        </View>
               <View style={styles.cardActionsOutside}>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon1 name="trash-can-outline" size={rf(2.2)} color="#FF4C4C" />
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon name="pencil-outline" size={rf(2.2)} color="#1e2e5a" />
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
                                  <TouchableOpacity style={styles.addExperienceBtn}>
                     <FontAwesome6 name="equals" size={rf(2.6)} color="#888" />
 
</TouchableOpacity>
        <View style={styles.centerBorder} /> 

         <View style={styles.entryBlock}>
          <View style={styles.entryContent}>
            <View style={styles.entryHeaderRow}>
              <View style={styles.entryLeft}>
                <View style={styles.row}>
                  <Icon name="school-outline" size={rf(2)} color="#555" />
                  <Text style={styles.entryTitle}>Bachelor's</Text>
                </View>
                <View style={styles.row}>
                  <Icon name="business-outline" size={rf(2)} color="#555" />
                  <Text style={styles.companyText}>JNC College, Bhopal, MP</Text>
                </View>
              </View>
              <Text style={styles.dateText}>Dec 2012 – Jun 2013</Text>
            </View>            <Text style={styles.bodyText}>• Designed and developed intuitive UI/UX solutions for web and mobile applications.</Text>
            <Text style={styles.bodyText}> Built and optimized frontend components using React and the MERN stack. </Text>
                        <Text style={styles.bodyText}>• Collaborated with dev teams to deliver pixel-perfect designs</Text>
                                    <Text style={styles.bodyText}>• Collaborated with dev teams to deliver pixel-perfect designs</Text>
          </View>
              <View style={styles.cardActionsOutside}>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon1 name="trash-can-outline" size={rf(2.2)} color="#FF4C4C" />
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}>
                <Icon name="pencil-outline" size={rf(2.2)} color="#1e2e5a" />
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>
        </View>
            <TouchableOpacity style={styles.addExperienceBtn}>
                     <FontAwesome6 name="equals" size={rf(2.6)} color="#888" />
  <Text style={styles.addExperienceText}> <Feather name="plus-circle" size={rf(2)} color='rgba(39, 206, 86, 1)'/> Add Experience</Text>
</TouchableOpacity>
        {/* Skills */}
       <View style={styles.sectionTitleRow}>
  <Text style={styles.sectionTitle}>Skills</Text>
  <View style={styles.redLine} />
</View>
 <Text style={styles.sectionTitle1}> Technical Skills</Text>
        <View style={styles.skillsCardWhite}>
          <View style={styles.skillRow}>
            {['Figma', 'Frontend', 'Backend', 'React', 'JS','Backend', 'React', 'JS'].map(skill => (
              <Text key={skill} style={styles.skillPill}>{skill}</Text>
            ))}
          </View>
        </View>

        {/* Communication */}
        <Text style={styles.sectionTitle1}>Communication Skills</Text>
        <View style={styles.skillsCardWhite}>
          <View style={styles.skillRow}>
             {['Figma', 'Frontend', 'Backend', 'React', 'JS'].map(skill => (
              <Text key={skill} style={styles.skillPill}>{skill}</Text>
            ))}
          </View>
        </View>
                              <TouchableOpacity style={styles.addExperienceBtn}>
                    
  <Text style={styles.addExperienceText}> <Feather name="plus-circle" size={rf(2)} color='rgba(39, 206, 86, 1)'/> Add Skills</Text>
</TouchableOpacity>

  
    <View style={styles.sectionTitleRow}>
  <Text style={styles.sectionTitle}>References</Text>
  <View style={styles.redLine} />
</View>
<Text style={styles.bodyTextLight}>
  • Professor Harischandra, IP - Bombay{'\n'}
  • Mr. Praveen Chaturvedi, Colonal Pvt Ltd. +1234567890, adarshgachha@gmail.com


</Text>
    <View style={styles.cardActionsOutside}>
           
              <TouchableOpacity style={styles.actionBtn}>
                <Icon name="pencil-outline" size={rf(2.2)} color="#1e2e5a" />
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
            </View>

      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: rh(5),
  },
  file:{
    textAlign:'right',
    color:"#777",
    marginTop:rh(1),
     fontSize: rf(1.7),
  },
  bannerContainer: {
    position: 'relative',
  },
  banner: {
    width: '100%',
    height: rh(25),
    resizeMode: 'cover',
  },
  iconRow: {
    position: 'absolute',
    top: rh(2.5),
    right: rw(5),
    flexDirection: 'row',
    gap: rw(4),
  },
  card: {
    marginTop: -rh(6),
    backgroundColor: '#f9f9f9',
    borderTopLeftRadius: rw(8),
    borderTopRightRadius: rw(8),
    paddingHorizontal: rw(5),
    paddingBottom: rh(0.3),
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  profileImgWrapper: {
    marginTop: rh(6),
  },
  profileImg: {
    width: rw(31),
    height: rw(31),
    borderRadius: rw(15),
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: rh(-13),
  },
  info: {
    marginLeft: rw(2),
    flex: 1,
    marginTop: rh(6),
  },
  name: {
    fontSize: rf(2),
    fontWeight: '600',
    color: '#1e2e5a',

    marginTop: rh(-5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: rw(2),
    marginTop: rh(0.5),
  },
  infoText: {
    fontSize: rf(1.5),
     color: '#1e2e5a',
  },
  lockIcon: {
    position: 'absolute',
    top: rh(2),
    right: rw(5),
  },
  section: {
        backgroundColor: '#f9f9f9',
    paddingHorizontal: rw(5),
  
  },
  sectionTitle: {
    fontSize: rf(2),
    fontWeight: 'bold',
     color: '#000',
    marginTop: rh(2),
  },
    sectionTitle1: {
    fontSize: rf(1.8),
    fontWeight: 'bold',
     color: '#1e2e5a',
    marginTop: rh(2),
  },
  greyText: {
    fontWeight: 'normal',
    fontSize: rf(1.8),
    color: '#888',
  },
  resumeRow: {
        backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: rh(1.5),
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: rh(1),
    marginTop: rw(2),
  },
  resumeText: {
    flex: 1,
    marginLeft: rw(3),
    fontSize: rf(1.6),
    color: '#1e2e5a',
  },
  downloadBtn: {
    paddingHorizontal: rw(2),
  },
  bodyText: {
    fontSize: rf(1.5),
    color: '#666',
    marginBottom: rh(0.4),
    padding:rh(0.3)
  },
  entryBlock: {
    marginBottom: rh(2),
  },
  entryContent: {
    flex: 1,
  },
  entryHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: rh(1),
    gap: rw(2),
  },
  entryLeft: {
    flex: 1,
    gap: rh(0.5),
  },
  entryTitle: {
    fontSize: rf(1.9),
    fontWeight: 'bold',
    color: '#1e2e5a',
  },
  companyText: {
    fontSize: rf(1.7),
     color: '#1e2e5a',
       
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: rf(1.6),
    fontWeight: 'bold',
    color: '#1e2e5a',
    fontStyle: 'italic',
    fontFamily: 'Poppins',
  },
   dateText1: {
    fontSize: rf(1.9),
    fontWeight: 'bold',
    color: '#1e2e5a',
  
    fontFamily: 'Poppins',
    marginTop:rh(2.2),
   
  },
  skillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: rw(2),
    marginTop: rh(0),
  },
  skillPill: {
    backgroundColor: '#eee',
    color: '#000',
    fontSize: rf(1.4),
    paddingHorizontal: rw(3),
    paddingVertical: rh(0.8),
    borderRadius: rw(2),
  },
  skillsCardWhite: {
    backgroundColor: '#fff',
    padding: rw(4),
    borderRadius: rw(3),
    marginTop: rh(3),
    marginBottom: rh(2),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  ic: {
    marginLeft: rh(1),
  },
  sectionTitleRow: {
  flexDirection: 'row',
  alignItems: 'center',

},
redLine: {
  width:rh(10),
  height: 2,
  backgroundColor: 'rgba(232, 96, 32, 1)',
  marginLeft: rw(3),
  marginTop:rh(2.5),
},
bodyTextLight: {
  fontSize: rf(1.9),
  color: '#777',
  marginBottom: rh(1),
  padding:rh(1)
},
  centerBorder: {
    width:rw(90),

    borderBottomWidth: 1,
    alignSelf:'center',
    borderColor: '#ccc',
    marginVertical: rh(2), 
  },
    cardActionsOutside: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: rw(5),
    marginTop: rh(1),
    marginRight: rw(1),
  
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: rw(1),
 
  },
  delete: {
    color: '#FF4C4C',
    fontSize: rf(1.6),
    marginLeft: rw(1),
  },
  edit: {
    color: '#1e2e5a',
    fontSize: rf(1.6),
    marginLeft: rw(1),
  },
  addExperienceBtn: {
  marginVertical: rh(1),
  paddingVertical: rh(1),
  paddingHorizontal: rw(4),

  borderRadius: 5,
  alignItems: 'center',
},
addExperienceText: {
  fontSize: rf(1.8),
  color: 'rgba(39, 206, 86, 1)',
  fontWeight: 'bold',
}


});

export default EditProfileScreen;
