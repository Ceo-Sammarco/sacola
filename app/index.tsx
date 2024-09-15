

/** == [ @imports ] 
 * == == == == == == == == == */
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   View,
   Text,
   Pressable,
   TextInput, 
} from "react-native";

import { auth } from "@/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";
import { Btn } from "@/src/widgets";

/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function index( { ...props } ) {
   const 
      [ Email, setEmail ] = useState<string>("")
      ,
      [ Password, setPassword ] = useState("")
   ;

   async function SignIn() {
      try {
         const 
            user = await signInWithEmailAndPassword(
               auth, Email, Password
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

   async function SignUp() {
      try {
         const 
            user = await createUserWithEmailAndPassword(
               auth, Email, Password
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

   return( <>
      <View style={ s.sheet }>
         <View style={ s.Inputs }>
            <TextInput 
               value={ Email } inputMode="email"
               onChangeText={ setEmail }
               placeholder="Email"
               style={ s.Input }
               placeholderTextColor="#999"
            />
            <TextInput 
               value={ Password } inputMode="decimal"
               secureTextEntry={ true }
               onChangeText={ setPassword }
               placeholder="Password"
               style={ s.Input }
               placeholderTextColor="#999"
            />
         </View>
         <View style={ s.Inputs }>
            <Btn title="log in" 
               onPress={ SignIn }
            />
            <Btn title="register" bg="#fc0" 
               onPress={ SignUp }
            />
         </View>
      </View>
   </> );
}


/** == [ StyleSheet ]
 * == == == == == == == == == */
const 
   s = StyleSheet.create( {
      sheet: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
         backgroundColor: "#1B1D22",
      },
      Inputs: {
         width: "100%",
         gap: 16,
         marginVertical: 16,
         alignItems: "center",
         justifyContent: "center",
      },
      Input: {
         backgroundColor: "#212329",
         color: "#999",
         width: "70%",
         height: 46,
         paddingHorizontal: 16,
         paddingVertical: 8
      },
   } )
;