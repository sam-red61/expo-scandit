import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="scanning" options={{title: 'Scanning'}} />
      <Tabs.Screen name="otherTab" options={{title: 'Other Tab'}}/>
    </Tabs>
  );
}
