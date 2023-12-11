import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./Tindercard.css";
import database from "./Firebase";

function TinderCard() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="tinderCard_cardContainer">
      {people.map((person) => (
        <div className="Swipe" key={person.name} preventSwipe={["up", "down"]}>
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TinderCard;
