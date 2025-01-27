import "./styles/app.css";
import data from "./assets/data";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";

function App() {
  const [card, cardSet] = useState(null);
  const [selectedSet, selectedSetSet] = useState("republic");
  const [isBase, isBaseSet] = useState(true)

  const getCard = (needle) => {

    let checkFactionCard = /[S,K,Z,D]{1}(0[1-9]|1[0-2])/.test(needle);
    let checkSetCard = /[S,K,Z,D]{1}(2[1-9]|30)/.test(needle);
    let checkAgendaCard = /[S,K,Z,D]{1}[A]{1}[1-4]{1}/.test(needle);
    let checkRoundCard = /[A]{1}(0[1-6]){1}/.test(needle);
    let checkRepublicCard = /[A]{1}(2[1-9]|[3-7][0-9]|80)/.test(needle);
    let checkForeignAffairCard = /[A]{1}(1[0-6])/.test(needle);
    
    if (needle.length == 3 && (checkFactionCard || checkSetCard || checkAgendaCard)) {
      let faction = data.factions.filter((faction) => {
        return faction.name[0] === needle[0];
      })[0];
      let card = faction.cards.filter((agenda) => {
        return agenda.code === needle;
      })[0];
      cardSet(card);
      isBaseSet(false);
      selectedSetSet(faction.name);
    } else if(needle.length === 3 && (checkRoundCard || checkRepublicCard || checkForeignAffairCard )){      
      let name = checkRoundCard ? "round" : (checkRepublicCard ? "republic": "foreign_affairs");      
      let set = data.base.filter((set) => {
        return set.name === name;
      })[0];
      let card = set.cards.filter((card) => {
        return card.code === needle;
      })[0];
      isBaseSet(true);
      cardSet(card);
      selectedSetSet(set.name);
    } else {
      cardSet(null);
    }
  };

  return (
    <>
      <Navbar />
      <section className="card__search germania-one-regular">
        <form className="search__form">
          <div className="input__group">
            <span className="input__icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              name="card_code"
              className="text__input"
              onChange={(evt) => getCard(evt.target.value.toUpperCase())}
            />
          </div>
        </form>
        {card !== null && <Card card={card} selectedSet={selectedSet} isBase={isBase} />}
      </section>
    </>
  );
}

export default App;
