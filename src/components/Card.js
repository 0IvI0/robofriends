import React from 'react';
import Kittens from "./Kittens";

const Card = ({ name, email, id, friendImg }) => {
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
          {/*<img alt='images' src={`https://robohash.org/${id}?200x200`} />*/}
          <img alt='images' src={`${friendImg}`}/>
          <div>
              <h2>{name}</h2>
              <p>{email}</p>
          </div>
      </div>
    );
}

export default Card;
