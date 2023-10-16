import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, CheckBox, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App({ }) {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = 1;
  if (timesPressed > 1) {
    textLog = timesPressed;
  } else if (timesPressed > 0) {
    textLog = 1;
  }
  return (
    <LinearGradient
      colors={['#3B3B98', '#C4C4C4']}
      style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.style1}>
          <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
            <Image
              style={styles.style1.image}
              source={require('../assets/images/book.png')}
            />
            <View style={{width: 230}}>
              <Text style={[styles.style1.text, {}]}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={[styles.style1.text, { marginTop: 14 }]}>Cung cấp bởi Tiki Trading</Text>
              <Text style={[styles.style1.gia, { marginTop: 11 }]}>141.800 đ</Text>
              <Text style={[styles.style1.giamgia, { marginTop: 11 }]}>141.800 đ</Text>
              <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: "space-between", alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' ,}}>
                  <Pressable
                    onPress={() => {
                      setTimesPressed(current => current - 1);
                    }}
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                        width: 14.22,
                        height: 16,
                        backgroundColor: '#C4C4C4',
                        justifyContent: 'center',
                      },
                    ]}>
                    {({ pressed }) => (
                      <Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>-</Text>
                    )}
                  </Pressable>
                  <View style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10, marginRight: 10, }}>
                    <Text testID="pressable_press_console">{textLog}</Text>
                  </View>
                  <Pressable
                    onPress={() => {
                      setTimesPressed(current => current + 1);
                    }}
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                        width: 14.22,
                        height: 16,
                        backgroundColor: '#C4C4C4',
                        justifyContent: 'center',
                      },
                    ]}>
                    {({ pressed }) => (
                      <Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>+</Text>
                    )}
                  </Pressable>
                </View>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#134FEC' }}>Mua sau</Text>
              </View>


            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#011627', marginRight: 17, }}>Mã giảm giá đã lưu</Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#134FEC', }}>Xem tại đây</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 35, justifyContent: 'space-between', alignItems: 'center'}}>
            
            
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '210px', height: '50px', borderWidth: 1, borderColor: '#808080', borderRadius: 2, }}>
            <Image
              style={{ width: 32, height: 16, marginRight: 10, marginLeft: 13,}}      
              source={require('../assets/images/yellow_block.png')}
            />
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#011627', }}>Mã giảm giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#0A5EB7', width: 110, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 2}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', }}>Áp dụng</Text>    
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.style2}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#011627'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: "#134FEC", marginLeft: 5, }}>Nhập tại đây?</Text>
          </View>
        </View>
        <View style={styles.style3}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#011627', }}>Tạm tính</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#EE0D0D', }}>141.800 đ</Text>
          </View>
        </View>
        <View style={styles.style4}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#808080', }}>Thành tiền</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#EE0D0D', }}>141.800 đ</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>

          <TouchableOpacity style={[styles.style4.btn, ]}>
            <Text style={styles.style4.text}>TIẾN HÀNH ĐẶT HÀNG</Text>
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
    backgroundColor: '#C4C4C4',
  },
  style1: {
    flex: 5,
    paddingLeft: 12,
    paddingTop: 14,
    paddingRight: 17,

    backgroundColor: "#FFFFFF",
    image: {
      width: 104,
      height: 140,
      marginRight: 25,
    },
    text: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    gia: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#EE0D0D',
    },
    giamgia: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#808080',
      textDecorationLine: 'line-through',
    },
    button: {
      width: 14.22,
      height: 16,
      backgroundColor: '#C4C4C4',
      justifyContent: 'center',
    },
  },
  style2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 15,
    paddingLeft: 15,
    backgroundColor: '#FFFFFF',

  },
  style3: {
    flex: 1,
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  style4: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#E53935',
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
    marginTop: 50,
    paddingLeft: 15,
    paddingRight: 15,
    btn:{
      backgroundColor: '#E53935',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      width: 350,
      height: 45,
      marginTop: 20,
    },
    text:{
      textTransform: 'uppercase',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
  },

});
