import React from 'react';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import OnBoardingGiveClasses from '../../components/OnBoardingGiveClases';
import OnBoardingScreenStudy from '../../components/OnBoardingScreenStudy';

const { width } = Dimensions.get('window');

const Onboarding: React.FC = () => {
  return (
    <ScrollView snapToInterval={width} decelerationRate="fast" style={{ flex: 1, }} horizontal={true} showsHorizontalScrollIndicator={false}>
      <OnBoardingScreenStudy/>
      <OnBoardingGiveClasses/>
    </ScrollView>
  );
}

export default Onboarding;