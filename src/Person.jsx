import React from 'react';

const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img className="img" src={image} alt={name} />
      <div>
        <h5>{name}</h5>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Person;
