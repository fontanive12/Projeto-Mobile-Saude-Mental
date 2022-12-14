import React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import { Allerta_400Regular } from '@expo-google-fonts/allerta'
import { Cambo_400Regular } from '@expo-google-fonts/cambo'

import { ViewLogin } from './src/screns/ViewLogin';
import { ViewNewLogin } from './src/screns/ViewNewLogin';
import { ViewMenu } from './src/screns/ViewMenu';
import { ViewChecklist } from './src/screns/ViewChecklist';
import { ViewInformation } from './src/screns/ViewInformation';
import { ViewProfessional } from './src/screns/ViewProfessional';
import { ViewUsers } from './src/screns/ViewUsers';
import { ViewQuiz } from './src/screns/ViewQuiz';
import { ViewExpertises } from './src/screns/ViewExpertises';
import { ViewMeditation } from './src/screns/ViewMeditation';
import { ViewAnsiedade } from './src/screns/ViewsInformation/ViewAnsiedade';
import { ViewAtividades } from './src/screns/ViewsInformation/ViewAtividades';
import { ViewCharts } from './src/screns/ViewCharts';
import { ViewMaps } from './src/screns/ViewMaps';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import config from './src/config/config';
import { AppContext, AppProvider, IAppContext } from './src/contexts/AppContext'
import { NativeModules } from 'react-native';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

// NativeModules.DevSettings.setIsDebuggingRemotely(false);
const Stack = createNativeStackNavigator(); //criando rotas

export default function App() {

  //para não precisar importar o arquivo config nas telas
  axios.defaults.baseURL = config.baseURL;

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./src/assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
    Allerta_400Regular,
    Cambo_400Regular
  })
  if (fontsLoaded) {
    return (
      <AppProvider>
        <>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='ViewMaps'
              screenOptions={{ headerShown: false }}>
              <Stack.Screen name="ViewNewLogin" component={ViewNewLogin} />
              <Stack.Screen name="ViewLogin" component={ViewLogin} />
              <Stack.Screen name="ViewMenu" component={ViewMenu} />
              <Stack.Screen name="ViewChecklist" component={ViewChecklist} />
              <Stack.Screen name="ViewInformation" component={ViewInformation} />
              <Stack.Screen name="ViewProfessional" component={ViewProfessional} />
              <Stack.Screen name="ViewUsers" component={ViewUsers} />
              <Stack.Screen name="ViewQuiz" component={ViewQuiz} />
              <Stack.Screen name="ViewExpertises" component={ViewExpertises} />
              <Stack.Screen name="ViewMeditation" component={ViewMeditation} />
              <Stack.Screen name="ViewAnsiedade" component={ViewAnsiedade} />
              <Stack.Screen name="ViewAtividades" component={ViewAtividades} />
              <Stack.Screen name="ViewCharts" component={ViewCharts} />
              <Stack.Screen name="ViewMaps" component={ViewMaps} />

            </Stack.Navigator>
          </NavigationContainer>

          <StatusBar
            translucent={false}
            backgroundColor="#fff"
            style="auto" />

          <Toast />
        </>

      </AppProvider>
    );
  } else {
    return (
      <>
        <ActivityIndicator size='large' />
        <StatusBar
          translucent={false}
          backgroundColor="#fff"
          style="auto" />
      </>
    )
  }
}

