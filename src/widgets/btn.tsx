

/** == [ @imports ] 
 * == == == == == == == == == */
import React, { useState, useEffect } from "react";
import { 
   StyleSheet,
   View,
   Text,
   Pressable, 
} from "react-native";


/** == [ properties ]
 * == == == == == == == == == */


/** == [ exports ]
 * == == == == == == == == == */
export default function Btn( { ...props } ) {


   return(
      <Pressable 
         onPress={ props.onPress }
         style={ ( { pressed } ) => [
            {
               backgroundColor: props.bg || "#29f",
               opacity: pressed ? .5 : 1,
               paddingHorizontal: 16, paddingVertical: 8,
               borderRadius: 16, width: props.w || "70%", minHeight: props.h || 46,
               alignItems: "center", justifyContent: "center",
            }, props.style
         ] }
      >
         {
            <Text style={{ color: "#fff", textTransform: "capitalize", fontSize: 18, fontWeight: "semibold" }}>
               { props.title || "send" }
            </Text>
            || 
            props.children
         }
      </Pressable>
   );
}


/** == [ StyleSheet ]
 * == == == == == == == == == */
const 
   s = StyleSheet.create( {
      sheet: {
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
      },
   } )
;