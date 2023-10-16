import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, CheckBox, Icon } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App({ }) {
  return (
    <LinearGradient
      colors={['#3B3B98', '#C4C4C4']}
      style={styles.container}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.stylemain}>
          <View style={styles.style1}>
            <Text style={styles.style1.title}>Password Generator</Text>
          </View>
          <View style={styles.style2}>
            <TextInput style={styles.style2.textinput}></TextInput>
          </View>
          <View style={styles.style3}>
            <View style={[styles.style3, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
              <Text style={[styles.style3.text]}>Password length</Text>
              <TextInput style={{ width: 118, height: 33, backgroundColor: "#FFFFFF" }}></TextInput>
            </View>
            <View style={[styles.style3, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
              <Text style={styles.style3.text}>Include lower case letters</Text>
              <CheckBox style={{width: 25, height: 25}}/>
            </View>
            <View style={[styles.style3, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'  }]}>
              <Text style={styles.style3.text}>Include upcase letters</Text>
              <CheckBox style={{width: 25, height: 25}}/>
            </View>
            <View style={[styles.style3, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'  }]}>
              <Text style={styles.style3.text}>Include number</Text>
              <CheckBox style={{width: 25, height: 25}}/>
            </View>
            <View style={[styles.style3, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'  }]}>
              <Text style={styles.style3.text}>Include special symbol</Text>
              <CheckBox style={{width: 25, height: 25}}/>
            </View>
          </View>
          <View style={styles.style4}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stylemain: {
    flex: 1,
    margin: 20,
    backgroundColor: '#23235B',
    borderRadius: 15,
  },
  style1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',
      width: 181,
      height: 64,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }
  },
  style2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textinput: {
      width: 297,
      height: 55,
      backgroundColor: '#151537',
    }
  },
  style3: {
    flex: 5,
    margin: 10,
    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    }
  },
  style4: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  content: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 29,
    marginRight: 29,
  },
  button: {
    width: 269,
    height: 55,
    backgroundColor: '#3B3B98',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
