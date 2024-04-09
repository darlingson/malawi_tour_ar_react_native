import { NativeModules } from "react-native";
const { ARModule } = NativeModules;

interface ARModuleInterface {
  showAR(): Promise<string>;
}

export default ARModule as ARModuleInterface;