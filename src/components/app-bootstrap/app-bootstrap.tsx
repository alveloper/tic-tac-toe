import React, { ReactElement, ReactNode } from "react";
import {
  useFonts,
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
} from "@expo-google-fonts/delius-unicase";
import { Home } from "@screens";

type AddBootstrapProps = {
  children: ReactNode;
};

// loads our fonts
export default function AppBootstrap({
  children,
}: AddBootstrapProps): ReactElement {
  const [fontLoaded] = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });
  return fontLoaded ? <>{children}</> : <>{children}</>;
}
