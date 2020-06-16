import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BasicText } from "./BasicText";
import { PullQuote } from "./PullQuote";

export const Event = (props) => {
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({});

  const fetchEvent = async () => {
    let response = await fetch(
      `http://localhost:1337/events/${props.match.params.id}`
    );
    if (!response.ok) {
      return;
    }

    const newEvent = await response.json();
    setLoading(false);
    setEvent(newEvent);
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return loading ? (
    <div>... loading</div>
  ) : (
    <>
      <Link to={`/`}>Back to timeline</Link>
      <h1>{event.title}</h1>
      <div>
        From {event.startDate} to {event.endDate}
      </div>

      {event.body &&
        event.body.map((component) => {
          return (
            <div key={component._id}>{getComponent(component.__component)}</div>
          );
        })}
    </>
  );
};

const getComponent = (name) => {
  switch (name) {
    case "primary.basic-text":
      return <BasicText />;
    case "primary.pull-quote":
      return <PullQuote />;
  }
};
