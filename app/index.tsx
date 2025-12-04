import { useRouter } from "expo-router";
import { Button } from "react-native";

export default function App() {
  const router = useRouter();

  return (
    <Button
      title="Go to Tabs"
      onPress={() => router.push("/(tabs)/scanning")}
    />
  );
}
