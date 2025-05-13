import { StyleSheet } from 'react-native';
import { responsiveWidth as wp, responsiveHeight as hp,responsiveFontSize as fp } from 'react-native-responsive-dimensions';

export const createStyles = (isTablet) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(239, 243, 246, 1)',
  },
  container: {
    padding: wp(5),
    paddingBottom: wp(isTablet ? 10 : 30),
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: wp(isTablet ? 0 : 20),
    marginBottom: wp(isTablet ? 3 : 8),
  },
  logo: {
    width: wp(isTablet ? 90 : 80),
    height:  hp(isTablet ? 35 : 18),
  },
  heading: {
    fontSize:  fp(isTablet ? 2.5 : 2.5),
    fontWeight: '600',
    marginBottom: 10,
    color: '#111',
    marginTop:wp(isTablet ? 0 : 6),
        textAlign:isTablet?'center':'left'
  },
  subText: {
    fontSize: fp(isTablet ? 2 : 1.8),
    color: '#555',
    marginBottom: wp(isTablet ? 0.9 : 3),
    lineHeight: 20,
        textAlign:isTablet?'center':'left'
  },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:wp(isTablet ? 1.4 : 3),
    paddingVertical:  wp(isTablet ? 1.4 : 2.5),
    paddingHorizontal: wp(isTablet ? 2.4 : 3),
    marginTop: wp(4),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  icon: {
    marginRight: wp(8),
    marginLeft: wp(9),
  },
  authText: {
    fontSize: fp(isTablet ? 2 : 1.8),
    color: '#000',
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: wp(isTablet ? 2 : 3),
    color: '#000',
    fontSize: fp(isTablet ? 2.5 : 2),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: wp(2),
    paddingVertical:  wp(isTablet ? 0.4 : 1),
    paddingHorizontal: wp(isTablet ? 2 : 3),
    marginBottom:wp(isTablet ? 2 : 3),
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  input: {
    flex: 1,
    fontSize: fp(isTablet ? 2.2 : 1.8),
   
    color: '#000',
  },
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(32, 41, 84, 1)',
    paddingVertical: wp(isTablet ? 1.5 : 2.8),
    borderRadius: wp(isTablet ? 1.3 : 2.5),
    marginTop: wp(1),
  },
  signInText: {
    color: '#fff',
    fontSize: fp(isTablet ? 2.3 : 2.2),
    marginRight:wp(1),
  },
  bottomRow: {
    marginTop: wp(3),
    alignItems: 'flex-end',
  },
  forgotText: {
    fontSize: fp(isTablet ? 1.9 : 1.7),
    color: '#777',
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#0033cc',
    fontWeight: '500',
    fontSize: fp(isTablet ? 1.7 : 1.7),
  },
  rightarrow: {
    position: 'absolute',
    right: wp(3)
  },
  us: {
    fontSize: fp(isTablet ? 1.9 : 1.7),
  },

  // location
  title: {
    fontSize: fp(isTablet ? 2.5 : 2.5),
    fontWeight: '600',
    marginBottom: wp(isTablet ? 1.3 : 1.5),
    color: '#111',
    marginTop:wp(isTablet ? 0 : 6),
        textAlign:isTablet?'center':'left'
  },
  title1: {
    fontSize: fp(isTablet ? 2.5 : 2.5),
    fontWeight: '600',
    marginBottom: wp(isTablet ? 1.3 : 1.5),
    color: '#111',
    marginTop: 20,
    textAlign:isTablet?'center':'left'
  },
  subtitle: {
    fontSize: fp(isTablet ? 2 : 1.8),
    color: '#4A5568',
    marginBottom: wp(isTablet ? 2.3 : 2.5),
        textAlign:isTablet?'center':'left'
  },
  instruction: {
    fontSize: fp(isTablet ? 2 : 1.7),
    color: '#4A5568',
    marginBottom:wp(5)
  },
  bold: {
    fontWeight: 'bold',
    color: '#1A202C',
     textAlign:isTablet?'center':'left'
  },
  email: {
    fontWeight: 'bold',
    color: '#1A202C',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent:isTablet?'center': 'space-between',
    gap:wp(isTablet ? 2.5 : 2.5),
    marginBottom: wp(3)
  },

  // verify
  codeInput: {
    width: isTablet?wp(6):wp(13),
    height:isTablet?hp(14):hp(6),
    borderRadius:isTablet?wp(1):wp(2),
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: fp(isTablet ? 2 : 1.7),
    elevation: 2,
  },
  spamNote: {
    fontSize: fp(isTablet ? 2 : 1.7),
    color: '#718096',
  
    
  },
  spamNote1: {
    fontSize:  fp(isTablet ? 2 : 1.7),
    color: '#718096',
  marginBottom: wp(3),
    textAlign:isTablet?'center':'left'
  },
  timerContainer: {
    alignItems: 'flex-end',
    marginBottom: wp(3),
  },
  timerText: {
    color: '#E53E3E',
    fontWeight: 'bold',
  },
  resendText: {
    color: '#1A202C',
    fontWeight: '600',
  },

  // Alert styles
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    width: wp(isTablet ?45 : 80),
    backgroundColor: '#fff',
    borderRadius: wp(isTablet ? 2 : 4),
    paddingTop: wp(isTablet ? 3 : 5),
    paddingHorizontal: wp(isTablet ? 5 : 5),

    paddingBottom: 0,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  alertTitle: {
    fontWeight: '600',
    fontSize:  fp(isTablet ? 2 : 2.4),
    color: '#000',
    marginBottom: wp(isTablet ? 1.8: 1.7)
  },
  alertMessage: {
    fontSize: fp(isTablet ? 1.8: 1.7),
    color: '#444',
    textAlign: 'center',
    marginBottom: wp(isTablet ? 1.6: 2.7)
  },
  dividerTop: {
    height: 1,
    backgroundColor: '#ccc',
  },
  buttonRow: {
    flexDirection: 'row',
    height: hp(isTablet ? 15: 6.1),
  },
  buttonHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalDivider: {
    width: 1,
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize:  fp(isTablet ? 1.8: 1.7),
    color: '#007AFF',
    fontWeight: '500',
  },

  // startjob
  section: {
    marginBottom: wp(isTablet ? 1.8: 1.7),
  },
  sectionTitle: {
    fontSize: fp(isTablet ? 3: 2.4),
    fontWeight: 'bold',
    color: '#1A202C',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: fp(isTablet ? 2: 1.7),
    color: '#4A5568',
    marginBottom:  wp(isTablet ? 4: 7),
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#CBD5E0',
    marginVertical: wp(isTablet ? 2: 3),
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: wp(isTablet ? 1.8: 4),
    paddingHorizontal:  wp(isTablet ? 1.8: 4),
    borderRadius:wp(isTablet ? 1.8: 2),
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#1A202C',
  },
  rightarrow1: {
    position: 'absolute',
    right: wp(4),
    top: wp(4)
  },

  // createpassword
  rules: {
    marginLeft:wp(isTablet ? 90: 90),
  },
  ruleText: {
    fontSize:fp(isTablet ? 3: 2.4),
    marginBottom: wp(0.1)
  },
  pass: {
    color: 'green',
  },
  fail: {
    color: 'red',
  },
  default: {
    color: 'gray',
  },
});
