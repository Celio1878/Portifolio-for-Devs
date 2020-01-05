import React, { useState, useEffect } from 'react';
import { Image, Text, Animated } from 'react-native';

import top from '../../assets/top.png';
import bottom from '../../assets/bottom.png';

import styles from './styles';

export default function Initial ({ navigation }) {
      this.state = {
         title: ' Welcome',
         friendText: '   Friend',
         seeText: 'Look',
         profileText: 'MY PROFILE'
      }
      const FadeInView = (props) => {
         const [fadeAnim] = useState (new Animated.Value(0))

         React.useEffect(() => {
            Animated.timing (
               fadeAnim, {
                  toValue: 1,
                  duration: 2000,
                  useNativeDriver: true,
               }
            ).start();
         }, [])

         return (
            <Animated.View
               style = {{
                  ...props.style,
                  opacity: fadeAnim,
               }}>
               { props.children }
            </Animated.View>
         );
      }

      function handleSubmit() {
         navigation.navigate ('Main');
      }

   return (
         <FadeInView style = { styles.container }>
            <Image style = { styles.imgTop } source = { top } />

            <Text onPress = {handleSubmit} style = { styles.textTop }>
               { this.state.title } {'\n'} { this.state.friendText }
            </Text>

            <Image style = { styles.imgBottom } source = { bottom } />

            <Text onPress = {handleSubmit} style = { styles.textBottom }>
               { this.state.seeText }
            </Text>

            <Text onPress = {handleSubmit} style = { styles.profileText }>
               { this.state.profileText }
            </Text>
         </FadeInView>
   );
}
