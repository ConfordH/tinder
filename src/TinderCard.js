import React, { useEffect, useState } from "react";
import SwipeCard from "react-tinder-card";
import "../src/TinderCard.css";
import database from "./Firebase";

function TinderCard() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="tinderCard_cardContainer">
      {people.map((person) => (
        <SwipeCard
          key={person.name}
          className="swipe"
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </SwipeCard>
      ))}
    </div>
  );
}

export default TinderCard;
