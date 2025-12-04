import { Scandit } from "@/components/Scandit/Scandit";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Button } from "react-native";

export default function ScanningScreen() {
  const [scanningEnabled, setScanningEnabled] = useState(false);

  useFocusEffect(
    useCallback(() => {
      return () => {
        console.log("setScanningEnabled(false)");
        setScanningEnabled(false);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  console.log(scanningEnabled);

  return (
    <>
      <Button
        title="start"
        onPress={() => setScanningEnabled(true)}
        disabled={scanningEnabled}
      />
      <Button
        title="stop"
        onPress={() => setScanningEnabled(false)}
        disabled={!scanningEnabled}
      />

      {scanningEnabled ? <Scandit /> : null}
    </>
  );
}
