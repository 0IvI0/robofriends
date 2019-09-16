import React from 'react';
import Card from "./Card";

const CardList = ({ friends, imageSet }) => {
    return (
        <div>
            {
                friends.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={friends[i].id}
                            name={friends[i].name}
                            email={friends[i].email}
                            friendImg={`https://robohash.org/${friends[i].id}?set=${imageSet}`}
                        />
                    );
                })
            }
        </div>
    );
};

export default CardList;
