import React from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Skills ({navigation}) {

   function handleBack() {
      navigation.navigate('Main')
   }

   return (

      <SafeAreaView style = { styles.container }>

         <TouchableOpacity onPress = {handleBack} style = {styles.buttonBack}>
            <Text style = {styles.buttonText}> Back </Text>
         </TouchableOpacity>

         <FlatList style = {styles.flatList}
            data = {[
               {key: 'Address: Contagem/MG, R. VL36 - 60'},
               {key: 'CEP: 32050105'},
               {key: 'Tel: +5531994084772'},
               {key: 'CNH: A/B'},
               {key: 'E-mail: celio1878@hotmail.com'},
               {key: 'Github: https://github.com/Celio1878'},
               {key: 'LinkedIn: https://linkedin.com/in/célio-vieira-6362a284'}
            ]}
            renderItem = {( {item} ) =>
               <Text style = { styles.itemText}>
                  {item.key}
               </Text>
            }
         />

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
      marginBottom: 10,
   },
   itemText: {
      marginTop: 10,
      marginBottom: 2,
      fontSize: 20,
      width: 380
   },
   buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      paddingHorizontal: 10,
   },
   buttonBack: {
      height: 40,
      width: 70,
      right: 155,
      backgroundColor: '#f13',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
   }
 });
