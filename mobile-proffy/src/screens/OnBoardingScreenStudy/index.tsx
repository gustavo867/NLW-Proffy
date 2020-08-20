import React from 'react';
import { View, Image, Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import giveClassesBackgroundImg from '../../assets/images/Background.png'
import giveClassesIcon from '../../assets/images/icons/dar-aulas.png';

import styles from './styles';

import goIcon from '../../assets/images/icons/Voltar.png';
import { RectButton } from 'react-native-gesture-handler';

const OnBoardingScreenStudy: React.FC = () => {
  const { navigate } = useNavigation();

  function handleNavigateToGiveClasses() {
    navigate('GiveClasses');
  }

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.imageBackground} source={giveClassesBackgroundImg}/>
        <Image style={styles.imageIcon} source={giveClassesIcon}/>
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.textOnBoarding}>01.</Text>
        <Text style={styles.aboutText}>Encontre vários professores para ensinar você</Text>

        <View style={styles.buttonsContainer}>
          <View style={styles.pages}>
            <View style={[styles.pages, { backgroundColor: '#C1BCCC', }]} />
          </View>
          <RectButton onPress={handleNavigateToGiveClasses}>
            <Image source={goIcon}/>
          </RectButton>
        </View>
      </View>
     </View>
  );
}

export default OnBoardingScreenStudy;
