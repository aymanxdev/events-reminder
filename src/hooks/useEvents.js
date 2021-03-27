import React, { useState, useEffect } from "react";
import firebase from "../database/firebase";

export const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("events")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.date(),
          };
          setEvents(data);
        });
      });
    return () => unsubscribe;
  });
  return events;
};
