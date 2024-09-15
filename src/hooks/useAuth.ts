

import { auth } from "@/firebase-config";
import { router } from "expo-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


async function SignIn( email: string, password: string ) {
   try {
      const 
         user = await signInWithEmailAndPassword(
            auth, email, password
         )
      ;
      if( user ) {
         router.replace( "/(tabs)" );
      }
   } catch( err: any ) {
      console.error( "SignIn() err: \n\n\n", err );
      alert( `SignIn() err: \n\n\n${ err }` );
   }
}

async function SignUp( email: string, password: string ) {
   try {
      const 
         user = await createUserWithEmailAndPassword(
            auth, email, password
         )
      ;
      if( user ) {
         router.replace( "/(tabs)" );
      }
   } catch( err: any ) {
      console.error( "SignUp() err: \n\n\n", err );
      alert( `SignUp() err: \n\n\n${ err }` );
   }
}


export default function useAuth() {
   const 
      [ Email, setEmail ] = useState()
      ,
      [ Password, setPassword ] = useState()
   ;
}