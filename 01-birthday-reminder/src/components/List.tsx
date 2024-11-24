import React from 'react';
import '../App.css';

type Birthday = {
  id: number;
  name: string;
  yearOfBirth: number;
  dateOfBirth: string;
};

const List = ({ people }: { people: Birthday[] }) => {
  return (
    <ul className='list'>
      {people.map((person) => (
        <li className='list-item' key={person.id}>
          {person.name} ({person.yearOfBirth})
        </li>
      ))}
    </ul>
  );
};

export default List;
