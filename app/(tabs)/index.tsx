import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { auth } from "@/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Btn } from "@/src/widgets";
import { router } from "expo-router";

export default function TabOneScreen() {
   getAuth().onAuthStateChanged( user => {
      if( !user ) {
         router.replace( "/" );
      }
   } );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
         <Btn title="log out" 
            // onPress={ () => auth.signOut() }
         />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
