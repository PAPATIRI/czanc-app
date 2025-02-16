import { SafeAreaView } from "react-native-safe-area-context";
import { styled, Text, View, YStack } from "tamagui";

const SafeArea = styled(SafeAreaView, {
  flex: 1,
  width: "100%",
});

export default function HobbyPage() {
  return (
    <SafeAreaView>
      <YStack>
        <Text>hello hobby page</Text>
      </YStack>
    </SafeAreaView>
  );
}
