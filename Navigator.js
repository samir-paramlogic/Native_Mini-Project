import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AllPost from "./src/AllPost";
import JobPost from "./src/JobPost";
import JobPreview from "./src/JobPreview";
import ShowPost from "./src/ShowPost";
import UpdatePost from "./src/UpdatePost";
import UpdatePreview from "./src/UpdatePreview";

const Navigator = () => {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="JobPost">
                <Stack.Screen name="JobPost" component={JobPost}/>
                <Stack.Screen name="JobPreview" component={JobPreview}/>
                <Stack.Screen name="AllPost" component={AllPost}/>
                <Stack.Screen name="ShowPost" component={ShowPost}/>
                <Stack.Screen name="UpdatePost" component={UpdatePost}/>
                <Stack.Screen name="UpdatePreview" component={UpdatePreview}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;