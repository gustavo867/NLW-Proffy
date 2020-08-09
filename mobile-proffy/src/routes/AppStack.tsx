import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

const { Navigator, Screen } = createStackNavigator();

import Landing from '../screens/Landing';
import GiveClasses from '../screens/GiveClasses';
import StudyTabs from './StudyTabs';
import Onboarding from '../screens/OnBoarding';

 function AppStack() {
  const [IsOnBoardingTrue, setIsOnBoardingTrue] = useState(true);
   AsyncStorage.getItem('onboarding').then(response => {
    if (response) {
      setIsOnBoardingTrue(false)
    } else {
      setIsOnBoardingTrue(true)
    }
  })
  
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen 
          name={IsOnBoardingTrue ? 'OnBoarding': 'Landing'} 
          component={IsOnBoardingTrue ? Onboarding : Landing}
        />
        <Screen name="GiveClasses" component={GiveClasses}/>
        <Screen name="Study" component={StudyTabs}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack