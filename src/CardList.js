import React from 'react';
import Card from './Card';

const CardList = ({ terminators }) => {

  const cardsArray = terminators.map((user, index) => {
    return <Card key={index} id={terminators[index].id} name={terminators[index].name} email={terminators[index].email}/>
  })

  return (
    <div>
      {cardsArray}
    </div>
  );
}

export default CardList;