import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OnBoardingScreenStudy from '../screens/OnBoardingScreenStudy';
import OnBoardingGiveClasses from '../screens/OnBoardingGiveClases';

 function OnBoardingStack() { 
  return (
    <Navigator headerMode="none">
      <Screen name="Study" component={OnBoardingScreenStudy}/>
      <Screen name="GiveClasses" component={OnBoardingGiveClasses}/>
    </Navigator>
  )
}

export default OnBoardingStack