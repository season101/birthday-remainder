import React from 'react';
import Person from './Person';

const List = ({ persons }) => {
  return (
    <section>
      {persons.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
};

export default List;
