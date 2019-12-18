import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
storiesOf("Button", module).add("primary", () => (
  <ThemeProvider theme={theme}>
    <Button type="primary" />
  </ThemeProvider>
));
