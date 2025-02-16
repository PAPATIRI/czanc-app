import { Redirect } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "tamagui";

export default function RootFile() {
  const [isLogin, setIsLogin] = useState(false);

  if (!isLogin) {
    return <Redirect href={"/(auth)/login"} />;
  }

  return (
    <SafeAreaView>
      <View>
        <Text>hello root file</Text>
      </View>
    </SafeAreaView>
  );
}
