import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigator from './Navigator';
import JobPost from './src/JobPost';
import JobPreview from './src/JobPreview';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator/>
    </QueryClientProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//<StatusBar style="auto" />
    // <View>
    //   <View style={{height: 25, backgroundColor: 'gray'}} />
    //   < Navigator/>
    // </View>
