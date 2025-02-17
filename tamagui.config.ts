import { defaultConfig, shorthands } from "@tamagui/config/v4";
import { createTamagui, createTokens } from "tamagui";

// Create color tokens in the format Tamagui expects
const colorTokens = {
  // Base colors
  darkGreen: "#2C3930",
  lightGreen: "#3F4F44",
  darkChoco: "#A27B5C",
  lightChoco: "#DCD7C9",

  // Extended green palette
  customGreen1: "#E8EFEA",
  customGreen2: "#D1DED5",
  customGreen3: "#B9CCC0",
  customGreen4: "#A2BBAC",
  customGreen5: "#8AA997",
  customGreen6: "#739883",
  customGreen7: "#5B866E",
  customGreen8: "#3F4F44",
  customGreen9: "#2C3930",
  customGreen10: "#1A231D",

  // Extended brown palette
  brown1: "#F7F4F1",
  brown2: "#DCD7C9",
  brown3: "#D1C3B4",
  brown4: "#C6AF9F",
  brown5: "#BB9B8A",
  brown6: "#A27B5C",
  brown7: "#8D6547",
  brown8: "#785132",
  brown9: "#633D1D",
  brown10: "#4E2908",

  // Primary colors
  primaryLight: "#3F4F44",
  primaryDefault: "#2C3930",
  primaryDark: "#1A231D",

  // Secondary colors
  secondaryLight: "#DCD7C9",
  secondaryDefault: "#A27B5C",
  secondaryDark: "#785132",

  // Status colors
  successLight: "#4CAF50",
  successDefault: "#2E7D32",
  successDark: "#1B5E20",

  warningLight: "#FFB74D",
  warningDefault: "#F57C00",
  warningDark: "#E65100",

  dangerLight: "#EF5350",
  dangerDefault: "#D32F2F",
  dangerDark: "#B71C1C",

  infoLight: "#64B5F6",
  infoDefault: "#1E88E5",
  infoDark: "#1565C0",

  // Neutral colors
  neutral1: "#FFFFFF",
  neutral2: "#F5F5F5",
  neutral3: "#E5E5E5",
  neutral4: "#D4D4D4",
  neutral5: "#A3A3A3",
  neutral6: "#737373",
  neutral7: "#525252",
  neutral8: "#404040",
  neutral9: "#262626",
  neutral10: "#171717",

  // Background colors
  backgroundLight: "#FFFFFF",
  backgroundDefault: "#F5F5F5",
  backgroundDark: "#171717",

  // Text colors
  textPrimary: "#171717",
  textSecondary: "#525252",
  textDisabled: "#A3A3A3",
  textInverse: "#FFFFFF",
};
// Create tokens
// Create tokens by merging with default tokens
const tokens = createTokens({
  ...defaultConfig.tokens, // Include all default tokens
  color: colorTokens,
});
export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  tokens,
  shorthands,
  themes: {
    ...defaultConfig.themes,
    light: {
      ...defaultConfig.themes.light,
      background: tokens.color.backgroundLight,
      color: tokens.color.textPrimary,
      // Add your custom colors here
      customGreen1: tokens.color.customGreen1,
      customGreen2: tokens.color.customGreen2,
      customGreen3: tokens.color.customGreen3,
      customGreen4: tokens.color.customGreen4,
      customGreen5: tokens.color.customGreen5,
      customGreen6: tokens.color.customGreen6,
      customGreen7: tokens.color.customGreen7,
      customGreen8: tokens.color.customGreen8,
      customGreen9: tokens.color.customGreen9,
      customGreen10: tokens.color.customGreen10,
      brown1: tokens.color.brown1,
      brown2: tokens.color.brown2,
      brown3: tokens.color.brown3,
      brown4: tokens.color.brown4,
      brown5: tokens.color.brown5,
      brown6: tokens.color.brown6,
      brown7: tokens.color.brown7,
      brown8: tokens.color.brown8,
      brown9: tokens.color.brown9,
      brown10: tokens.color.brown10,
      // Primary colors
      primaryLight: tokens.color.primaryLight,
      primaryDefault: tokens.color.primaryDefault,
      primaryDark: tokens.color.primaryDark,
      // Secondary colors
      secondaryLight: tokens.color.secondaryLight,
      secondaryDefault: tokens.color.secondaryDefault,
      secondaryDark: tokens.color.secondaryDark,
      // Neutral colors
      neutral1: tokens.color.neutral1,
      neutral2: tokens.color.neutral2,
      neutral3: tokens.color.neutral3,
      neutral4: tokens.color.neutral4,
      neutral5: tokens.color.neutral5,
      neutral6: tokens.color.neutral6,
      neutral7: tokens.color.neutral7,
      neutral8: tokens.color.neutral8,
      neutral9: tokens.color.neutral9,
      neutral10: tokens.color.neutral10,
      // Background colors
      backgroundLight: tokens.color.backgroundLight,
      backgroundDefault: tokens.color.backgroundDefault,
      backgroundDark: tokens.color.backgroundDark,
      // Text colors
      textPrimary: tokens.color.textPrimary,
      textSecondary: tokens.color.textSecondary,
      textDisabled: tokens.color.textDisabled,
      textInverse: tokens.color.textInverse,
    },
    dark: {
      ...defaultConfig.themes.dark,
      background: tokens.color.backgroundDark,
      color: tokens.color.textInverse,
      // Add your custom colors here
      customGreen1: tokens.color.customGreen1,
      customGreen2: tokens.color.customGreen2,
      customGreen3: tokens.color.customGreen3,
      customGreen4: tokens.color.customGreen4,
      customGreen5: tokens.color.customGreen5,
      customGreen6: tokens.color.customGreen6,
      customGreen7: tokens.color.customGreen7,
      customGreen8: tokens.color.customGreen8,
      customGreen9: tokens.color.customGreen9,
      customGreen10: tokens.color.customGreen10,
      brown1: tokens.color.brown1,
      brown2: tokens.color.brown2,
      brown3: tokens.color.brown3,
      brown4: tokens.color.brown4,
      brown5: tokens.color.brown5,
      brown6: tokens.color.brown6,
      brown7: tokens.color.brown7,
      brown8: tokens.color.brown8,
      brown9: tokens.color.brown9,
      brown10: tokens.color.brown10,
      // Primary colors
      primaryLight: tokens.color.primaryLight,
      primaryDefault: tokens.color.primaryDefault,
      primaryDark: tokens.color.primaryDark,
      // Secondary colors
      secondaryLight: tokens.color.secondaryLight,
      secondaryDefault: tokens.color.secondaryDefault,
      secondaryDark: tokens.color.secondaryDark,
      // Neutral colors
      neutral1: tokens.color.neutral1,
      neutral2: tokens.color.neutral2,
      neutral3: tokens.color.neutral3,
      neutral4: tokens.color.neutral4,
      neutral5: tokens.color.neutral5,
      neutral6: tokens.color.neutral6,
      neutral7: tokens.color.neutral7,
      neutral8: tokens.color.neutral8,
      neutral9: tokens.color.neutral9,
      neutral10: tokens.color.neutral10,
      // Background colors
      backgroundLight: tokens.color.backgroundLight,
      backgroundDefault: tokens.color.backgroundDefault,
      backgroundDark: tokens.color.backgroundDark,
      // Text colors
      textPrimary: tokens.color.textPrimary,
      textSecondary: tokens.color.textSecondary,
      textDisabled: tokens.color.textDisabled,
      textInverse: tokens.color.textInverse,
    },
  },
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
