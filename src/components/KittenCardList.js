import React from 'react';
import Kittens from "./Kittens";

const KittenCardList = ({ kittens }) => {
    return (
        <div>
            {
                kittens.map((user, i) => {
                    return (
                        <Kittens
                            key={i}
                            id={kittens[i].id}
                            name={kittens[i].name}
                            email={kittens[i].email}
                        />
                    );
                })
            }
        </div>
    );
};

export default KittenCardList;
