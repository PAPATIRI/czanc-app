import { router } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, H1, Input, Label, styled, YStack } from "tamagui";

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
      <YStack bg={"$background"} flex={1} px={20} justify={"center"}>
        <H1 textTransform="capitalize" color={"$black1"} mb={"$4"}>
          login
        </H1>
        <YStack gap={20} py={10}>
          <YStack>
            <Label htmlFor="email">email</Label>
            <Input
              id="email"
              placeholder="sample@email.com"
              value={email}
              bg={"$background"}
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
              bg={"$background"}
              onChangeText={(passwordValue) => setPassword(passwordValue)}
            />
          </YStack>
          <Button mt={40} bg={"$accent1"} onPress={onSubmit} color={"$white1"}>
            login
          </Button>
        </YStack>
      </YStack>
    </SafeArea>
  );
}
