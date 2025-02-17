import AntDesign from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { H2, H3, styled, Text, XStack, YStack } from "tamagui";

const SafeArea = styled(SafeAreaView, {
  flex: 1,
  width: "100%",
});

export default function DashboardPage() {
  return (
    <SafeArea>
      <YStack flex={1} px={20} py={10}>
        <XStack justify={"space-between"} items={"center"}>
          <H3>hello syarif</H3>
          <AntDesign name="logout" size={24} color={""} />
        </XStack>
      </YStack>
    </SafeArea>
  );
}
