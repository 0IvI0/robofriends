import React from 'react';
import Friends from "./Friends";
import Card from './Card';

/*********************************************************************************************
*           {<img alt='kittens' src={`https://robohash.org/${id}?set=set4`} />}              *
*********************************************************************************************/


const Kittens = ({id}) => {
    const kittenImages = `https://robohash.org/${id}?set=set4`;
    return (
        <div>
            <Friends>
                <Card friendImg={kittenImages}/>
            </Friends>
        </div>
    );
}

export default Kittens;


