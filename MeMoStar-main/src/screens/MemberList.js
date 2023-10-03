import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const MemberList = ({navigation}) => {
  return(
              <ScrollView style = {styles.container}>
                  <Image
                      source= {require("../img/IMG_7038.jpg")}
                      style = {{width: 160,height:160,borderRadius:200,left:120}}
                      />
                  <Text style ={styles.container1}>
                      Mr. Sorrawit Nuernuam 6421604927
                  </Text>
                  <Image
                      source = {require("../img/image.png")}
                      style = {{width: 160,height:160,borderRadius:200,left:120}}
                      />
                  <Text style ={styles.container1}>
                  Mr. Pasin Sangjun     6421600191
                  </Text>

                  <Image
                      source={require("../img/fox.jpg")}
                      style = {{width: 160,height:160,borderRadius:200,left:120}}
                      />
                  <Text style ={styles.container1}>
                  Mr. Wichayaut Burong  6421602495
                  </Text>
                  <Image
                      source={require("../img/image1.png")}
                      style = {{width: 160,height:160,borderRadius:200,left:120}}
                      />
                  <Text style ={styles.container1}>
                      Mr. Napat Charoinsilp 6421602444
                  </Text>
                  </ScrollView>
  );
};
const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor:'#D6CC99',
      padding: 10,
  },
  container1: {
      fontSize: 20,
      backgroundColor: '#445D48',
      fontWeight:'bold',
      padding: 10,
      color:'#fff',
      borderRadius: 50,
      alignItems:'center',
      margin:5,
  },
});


export default MemberList;
