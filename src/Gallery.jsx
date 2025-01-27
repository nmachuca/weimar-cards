import "./styles/app.css";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import data from "./assets/data";
import { useState, useEffect } from "react";

export const Gallery = () => {
  const [selectedSet, selectedSetSet] = useState("republic");
  const [cards, cardsSet] = useState(null);
  const [isBase, isBaseSet] = useState(true)

  useEffect(() => {
    let baseArray = data.base.map((base) => base.name);
    let factionsArray = data.factions.map((faction) => faction.name);
    
    if (baseArray.includes(selectedSet)) {
      let cards = data.base.filter((set) => {
        return set.name === selectedSet;
      })[0].cards;      
      isBaseSet(true)      
      cardsSet(cards);
    }
    if (factionsArray.includes(selectedSet)) {      
      let cards = data.factions.filter((set) => {
        return set.name === selectedSet;
      })[0].cards;
      isBaseSet(false)      
      cardsSet(cards);
    }
  }, [selectedSet]);

  const toggleSet = (value) => {
    selectedSetSet( value === selectedSet ? "republic" : value)
  }

  return (
    <>
      <Navbar />
      <section className="set__selector">
        <ul className="set__list">
          {data.categories.map((category, index) => {
            return (
              <li className={"set__item" + (category.name == selectedSet ? " active": "")} key={index} onClick={(evt) => toggleSet(evt.currentTarget.dataset.value)} data-value={category.name}> 
                <img
                  src={`/src/assets/cards/${category.name}/token.png`}
                  alt={`token_${category.name}`}
                  className="set__token"                  
                />
              </li>
            );
          })}
        </ul>
      </section>
      <section className="set__gallery">
        {cards != null && cards.map((card, index) => {
          return (
            <Card key={index} card={card} selectedSet={selectedSet} isBase={isBase} />
          );
        })}
      </section>
    </>
  );
}
