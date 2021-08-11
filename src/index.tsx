import React, { ReactElement } from "react";
import { AppBootstrap } from "@Components";
import Navigator from "@config/navigator";

export default function App(): ReactElement {
  // if (!fontLoaded) return null;
  return (
    <AppBootstrap>
      <Navigator />
    </AppBootstrap>
  );
}
