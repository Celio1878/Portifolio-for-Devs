import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import face from '../../assets/eu.jpg';
import endereco from '../../assets/endereco.jpg';
import whatsapp from '../../assets/whatsapp.svg';
import email from '../../assets/email.png';
import github from '../../assets/github.gif';
import linkedin from '../../assets/linkedin.jpg';

export default function Main ({navigation}) {

   const [list] = useState([]);

   list = {
      data = [
         {  image: source = require ('../../assets/endereco.jpg'),
            label: 'Contagem/MG, R. VL36 - 60'
         },
         {  title: 'CEP: ',
            label: '32050-105'
         },
         {  image: source = require ('../../assets/whatsapp.svg'),
            label: '+5531994084772'
         },
         {  image: source = require ('../../assets/email.png'),
            label: 'celio1878@hotmail.com'
         },
         {  image: source = require ('../../assets/github.gif'),
            label: 'https://github.com/Celio1878'
         },
         {  image: source = require ('../../assets/linkedin.jpg'),
            label: 'https://linkedin.com/in/célio-vieira-6362a284'
         }
      ]
   }

   function handleSkills() {
      navigation.navigate('Skills');
   }
   function handleProjects() {
      navigation.navigate('Projects');
   }

   return (

      <SafeAreaView style = { styles.container }>

         <Image style = { styles.Image } source = { face } />

         <Text style = { styles.name }> Célio Vieira </Text>

         <View style = {styles.line} />

         <Text style = { styles.work }> Full Stack </Text>

         <FlatList style = {styles.flatList}
            data = {this.list.data}

            renderItem = {( {item} ) =>
               <Text style = { styles.itemText}>
                  {item.label}
               </Text>
            }
         />

         <TouchableOpacity onPress = {handleSkills} style = {styles.skills}>
            <Text style = {styles.buttonText}> Skills </Text>
         </TouchableOpacity>

         <TouchableOpacity onPress = {handleProjects} style = {styles.projects}>
            <Text style = {styles.buttonText}> Projects </Text>
         </TouchableOpacity>

      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   Image: {
      width: 200,
      height: 200,
      borderRadius: 100,
   },
   text: {
      fontSize: 50,
   },
   name: {
      top: 10,
      fontSize: 50,
   },
   line:{
      borderWidth: 1.5,
      borderColor: '#d3d3d3',
      width: 300,
      marginTop: 17,
      marginBottom: 10,
      borderRadius: 10
   },
   work: {
      fontSize: 35,
      color: '#a9a9a9'
   },
   flatList: {
      marginVertical: 15,
   },
   itemText: {
      marginTop: 20,
      fontSize: 20,
      width: 380
   },
   buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      paddingHorizontal: 10,
   },
   skills: {
      top: 20,
      height: 40,
      width: 185,
      right: 100,
      backgroundColor: '#290',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
   },
   projects: {
      height: 40,
      width: 185,
      bottom: 20,
      left: 100,
      backgroundColor: '#13f',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
   }
 });
