

import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { db } from "@/firebase-config";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where,  } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useState } from "react";


export default function ToDoView() {
   const 
      [ Task, setTask ] = useState("")
      ,
      [ Todos, setTodos ] = useState<any>([])
      ,
      auth = getAuth()
      ,
      user = auth.currentUser
      ,
      todosCollection = collection( db, "todos" ) 
   ;
   const 
      FetchTodos = async (  ) => {
         if( user ) {
            const 
               Query = query( todosCollection, where( "userId", "==", user.uid ) )
               ,
               data = await getDocs( Query )
            ;

            setTodos( data.docs.map( doc => ( {
               ...doc.data(),
               id: doc.id
            } ) ) )
         } else {
            console.log( "No user logged in" );
         }
      }
      ,
      AddTodo = async () => {}
      ,
      UpdateTodo = async () => {}
      ,
      DeleteTodo = async () => {}
   ;

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Tab Two</Text>
         <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
         <EditScreenInfo path="app/(tabs)/two.tsx" />
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
