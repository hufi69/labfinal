// HomeStyles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    position: "relative",
  },
  text: {
    position: 'absolute',
    bottom: 70,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 13,
    alignItems: 'center',
    width: '90%',
  },
  textContent: {
    color: '#000',
    fontSize: 26,
  },
  blog: {
    position: 'absolute',
    top: 65,
    left: 20,
  },
  blogText: {
    fontSize: 40,
    color: "#D0D3D4",
    fontWeight: '300',
    fontStyle: "italic"
  },
  blogTextSmall: {
    fontWeight: 'bold',
    fontSize: 55,
    color: "#fff",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }
});

export default styles;
