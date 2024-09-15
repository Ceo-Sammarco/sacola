

import { db } from "@/firebase-config";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where,  } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const 
   FetchTodos = async ( user, todosCollection, setTodos ) => {
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