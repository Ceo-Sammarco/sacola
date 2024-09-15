

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
export function Btn( { ...props } ) {

   /** == [ StyleSheet ]
    * == == == == == == == == == */
   const 
      s = StyleSheet.create( {
         sheet: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
         },
         btnSlot: {
            width: props.w || "100%",
            paddingHorizontal: 18,
            paddingVertical: 8,
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "#fff",
         },
         btn: {
            padding: 16,
            borderRadius: 16, width: "100%", 
            height: props.h || 56,
            alignItems: "center", justifyContent: "center",
            backgroundColor: props.bg || "#29f",
            elevation: 3,
         },
         title: { color: "#fff", textTransform: "capitalize", fontSize: 18, fontWeight: "bold" },
      } )
   ;


   return(
      <View style={ s.btnSlot }>
         <Pressable 
            onPress={ props.onPress }
            style={ ( { pressed } ) => [ 
               s.btn, { 
                  opacity: pressed ? .5 : 1,
                  // elevation: !pressed ? 3 : 0
               }, props.style 
            ] }
         >
            {
               <Text style={ [ s.title, props.titleStyle ] }>
                  { props.title || "send" }
               </Text>
               || 
               props.children
            }
         </Pressable>
      </View>
   );
}
