// LocationScreenStyles.js

import { StyleSheet } from 'react-native';

const  styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(239, 243, 246, 1)',
  },
  container: {
    padding: 24,
    paddingBottom: 60,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  logo: {
    width: 300,
    height: 120,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#111',
    marginTop: 20,
  },
  subText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 6,
    lineHeight: 20,
  },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  icon: {
    marginRight: 30,
    marginLeft: 25,
  },
  authText: {
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 22,
    color: '#000',
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 19,
    paddingVertical: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: '#000',
  },
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(32, 41, 84, 1)',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
  bottomRow: {
    marginTop: 12,
    alignItems: 'flex-end',
  },
  forgotText: {
    fontSize: 13,
    color: '#777',
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#0033cc',
    fontWeight: '500',
  },
  rightarrow: {
    position: 'absolute',
    right: 10,
  },
});

export default  styles;
