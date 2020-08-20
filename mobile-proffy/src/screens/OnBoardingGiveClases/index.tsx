import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import giveClassesBackgroundImg from '../../assets/images/Background-green.png'
import giveClassesIcon from '../../assets/images/icons/Estudar.png';
import backIcon from '../../assets/images/icons/Voltar.png';

import styles from './styles';

const OnBoardingGiveClasses: React.FC = () => {
  const { navigate } = useNavigation();

  async function handleNavigateToLanding() {
    await AsyncStorage.setItem('onboarding', 'true')
    navigate('Landing')
  }
  
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.imageBackground} source={giveClassesBackgroundImg}/>
        <Image style={styles.imageIcon} source={giveClassesIcon}/>
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.textOnBoarding}>02.</Text>
        <Text style={styles.aboutText}>Ou dê aulas sobre o que você mais conhece</Text>
        <View style={styles.buttonsContainer}>
          <View style={[styles.pages, { backgroundColor: '#C1BCCC', }]}>
            <View style={[ styles.pages ]} />
          </View>
          <RectButton onPress={() => handleNavigateToLanding}>
            <Image style={styles.backIcon} source={backIcon}/>
          </RectButton>
        </View>
      </View>
     </View>
  );
}

export default OnBoardingGiveClasses;