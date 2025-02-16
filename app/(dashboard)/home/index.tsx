import { SafeAreaView } from "react-native-safe-area-context";
import { styled, Text, YStack } from "tamagui";

const SafeArea = styled(SafeAreaView, {
  flex: 1,
  width: "100%",
});

export default function DashboardPage() {
  return (
    <SafeArea>
      <YStack flex={1}>
        <Text>hello dashboard</Text>
      </YStack>
    </SafeArea>
  );
}
