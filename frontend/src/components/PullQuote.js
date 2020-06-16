import React from "react";

export const PullQuote = (props) => {
  return (
    <>
      <h4>{props.content.quote}</h4>
      <div>– {props.content.attribution} </div>
    </>
  );
};
