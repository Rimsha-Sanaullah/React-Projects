import React from 'react';

type Birthday = {
  id: number;
  name: string;
  yearOfBirth: number;
  dateOfBirth: string;
};

const List = ({ people }: { people: Birthday[] }) => {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          {person.name} ({person.yearOfBirth})
        </li>
      ))}
    </ul>
  );
};

export default List;
