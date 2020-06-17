import React from "react";
import { BasicText } from "./BasicText";
import { PullQuote } from "./PullQuote";

export const getBodyComponent = (component) => {
  switch (component.__component) {
    case "primary.basic-text":
      return <BasicText content={component} />;
    case "primary.pull-quote":
      return <PullQuote content={component} />;
    default:
      return;
  }
};
