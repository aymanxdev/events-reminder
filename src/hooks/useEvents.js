import { useState, useEffect } from "react";
import { db } from "../database/firebase";

export const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let unsubscribe = db.collection("events").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setEvents(data);
    });
    return () => unsubscribe;
  });
  return events;
};
