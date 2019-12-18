import React from "react";
import { storiesOf } from "@storybook/react";
import { styled } from ".";
import { colors } from "./variables";
const Swatch = styled.div`
  height: 100px;
  width: 100px;
`;
const displaySwatches = (object: any): any => {
  return Object.entries(object).map(([key, value]) => {
    if (typeof value === "object") {
      return (
        <>
          <h1>{key}</h1>
          <div style={{ display: "flex" }}>{displaySwatches(value)}</div>
        </>
      );
    } else if (typeof value === "string") {
      return (
        <div style={{ margin: "1rem" }}>
          <Swatch style={{ backgroundColor: value }} />
          {key}
        </div>
      );
    } else {
      return null;
    }
  });
};
storiesOf("Theme", module).add("Base Theme", () => {
  return displaySwatches(colors);
});
