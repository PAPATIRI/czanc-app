import { router } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, H1, Input, Label, styled, Text, YStack } from "tamagui";

const SafeArea = styled(SafeAreaView, {
  flex: 1,
  width: "100%",
});
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    const data = { email, password };
    router.replace("/(dashboard)");
  };

  return (
    <SafeArea>
      <YStack bg={"$primaryLight"} flex={1} justify={"center"}>
        <YStack
          bg={"$backgroundLight"}
          flex={1}
          mt={100}
          pt={50}
          borderTopEndRadius={45}
          borderTopStartRadius={45}
        >
          <H1
            textTransform="capitalize"
            px={24}
            color={"$textPrimary"}
            mb={"$4"}
          >
            login
          </H1>
          <YStack gap={20} py={10} px={24}>
            <YStack>
              <Label htmlFor="email">email</Label>
              <Input
                id="email"
                placeholder="sample@email.com"
                value={email}
                bg={"$backgroundLight"}
                onChangeText={(emailValue) => setEmail(emailValue)}
              />
            </YStack>
            <YStack>
              <Label htmlFor="password">password</Label>
              <Input
                id="password"
                placeholder="******"
                inputMode="text"
                value={password}
                bg={"$backgroundLight"}
                onChangeText={(passwordValue) => setPassword(passwordValue)}
              />
            </YStack>
            <Button
              mt={40}
              bg={"$primaryDefault"}
              onPress={onSubmit}
              color={"$textInverse"}
            >
              login
            </Button>
          </YStack>
        </YStack>
      </YStack>
    </SafeArea>
  );
}
