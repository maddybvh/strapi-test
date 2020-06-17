import React from "react";
import ReactMarkdown from "react-markdown";

export const BasicText = (props) => {
  return <ReactMarkdown source={props.content.richText} />;
};
