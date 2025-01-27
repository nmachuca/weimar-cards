export const Card = ({ card, selectedSet, isBase }) => {    
  return (
    <div className="single__card">
      <img
        src={
          isBase
            ? `/src/assets/cards/${selectedSet}/${card.code}.jpg`
            : `/src/assets/cards/${selectedSet}/${card.folder}/${card.code}.jpg`
        }
        alt="search_card"
        className={`card__image ${card.border}`}
      />
    </div>
  );
};
