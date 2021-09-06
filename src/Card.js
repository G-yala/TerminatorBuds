import React from 'react';

const Card = ({name, email, id}) => {
  return(
    <div className="silver { color: #999999 } bg-black { background-color: #000000 } dib br3 pa3 ma2 grow bw2 shadow-3">
      <img alt='terminators' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
// pokemon?limit=10&offset=0