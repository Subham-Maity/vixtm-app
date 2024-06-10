import {Text, View} from "react-native";
import {Slot} from "expo-router";

const RootLayout = () => {

    return (
      <>
       <Text>header</Text>
         <Slot/>
       <Text>Footer</Text>
      </>
    )
}

export default RootLayout