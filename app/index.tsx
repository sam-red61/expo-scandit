import { Scandit } from "@/components/Scandit/Scandit";
import { useState } from "react";
import {  Switch, View } from "react-native";

export default function App () {
const [isVisible, setIsVisible] = useState(false)
return <View style={{flex: 1, alignItems: 'center', padding: 10, gap: 20}}>
    <Switch value={isVisible} onValueChange={setIsVisible} />
    {isVisible ? <Scandit/> : null}
</View>
}