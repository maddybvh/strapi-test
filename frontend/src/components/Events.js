import React, { useState, useEffect } from "react";

export const Events = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    let response = await fetch("http://localhost:1337/events");
    if (!response.ok) {
      return;
    }

    const newEvents = await response.json();
    setLoading(false);
    setEvents(newEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return loading ? (
    <div>... loading</div>
  ) : (
    <div>
      <h1>Events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h3>{event.title}</h3>
          </div>
        );
      })}
    </div>
  );
};
