

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
import { Btn } from "@/src/widgets";
import { SignIn, SignUp } from "@/src/services/auth";
import Color from "@/src/styles/globals";

/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function AppBar( { ...props } ) {
   const 
      [ Email, setEmail ] = useState<string>("")
      ,
      [ Password, setPassword ] = useState("")
   ;

   return( <>
      <View style={ s.sheet }>
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
      AppBar: {
         width: "100%",
         backgroundColor: Color.AppBar.light,
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