import { Config } from "@jest/types";

const untranspiledModulePatterns = [
  "(jest-)?react-native",
  "@react-native-community",
  "expo(nent)?",
  "@expo(nent)?/.*",
  "react-navigation",
  "@react-navigation/.*",
  "@unimodules/.*",
  "unimodules",
  "sentry-expo",
  "native-base",
  "react-native-svg",
];

const config: Config.InitialOptions = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    `node_modules/(?!${untranspiledModulePatterns.join("|")})`
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  automock: true
};

export default config;