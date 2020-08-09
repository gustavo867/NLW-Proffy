import React, { useEffect } from 'react';
import { View, Image, Text, } from 'react-native';

import giveClassesBackgroundImg from '../../assets/images/Background.png'
import giveClassesIcon from '../../assets/images/icons/dar-aulas.png';

import styles from './styles';

const OnBoardingScreenStudy: React.FC = () => {
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
            <Text style={styles.text}>Arraste para esquerda</Text>
        </View>
      </View>
     </View>
  );
}

export default OnBoardingScreenStudy;
