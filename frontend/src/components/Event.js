import React, { useState, useEffect } from "react";
import { getBodyComponent } from "./body/_controller";

export const Event = (props) => {
  const [n, contentType, slug] = props.location.pathname.split("/");

  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({});

  const fetchEvent = async () => {
    let response = await fetch(`http://localhost:1337/${contentType}`);
    if (!response.ok) {
      return;
    }

    const newEvents = await response.json();

    // Get the event with the matching slug.
    // Ideally we'd fetch from /events/:id but we'd need to create a look up table of slugs and ids.
    const newEvent = newEvents.filter((event) => event.slug === slug)[0];
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
      <h1>{event.title}</h1>
      <div>
        From {event.startDate} to {event.endDate}
      </div>

      {event.body &&
        event.body.map((component) => {
          return <div key={component._id}>{getBodyComponent(component)}</div>;
        })}
    </>
  );
};
