import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native'; 
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from './src/theme';
import { Loading } from '@components/Loading';
// import { Groups } from '@screens/Groups';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
        <StatusBar 
          barStyle="light-content" // A cor dos ícones da status bar fica branca
          backgroundColor="transparent" // O background da status bar fica transparente
          translucent // A cor de background do app vai ser a visível na status bar
        />
        {/* { fontsLoaded ? <Groups/> : <Loading/> } */}
        { fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );
}

