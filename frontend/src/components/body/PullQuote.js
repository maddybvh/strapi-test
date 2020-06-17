import React from "react";

export const PullQuote = (props) => {
  return (
    <>
      <q>{props.content.quote}</q>
      <div>– {props.content.attribution} </div>
    </>
  );
};
