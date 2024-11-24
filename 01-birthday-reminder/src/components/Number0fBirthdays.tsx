import React, { useEffect, useState } from 'react';
import Data from './Data';
import List from './List';
import '../App.css';

type Person = {
  id: number;
  name: string;
  yearOfBirth: number;
  dateOfBirth: string;
  image: string;
};

const NumberOfBirthdays: React.FC = () => {
  const [people] = useState<Person[]>(Data);
  const [todayBirthdays, setTodayBirthdays] = useState<Person[]>([]);

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const filteredBirthdays = people.filter((person) => {
      const birthDate = new Date(person.dateOfBirth);
      return birthDate.getMonth() + 1 === month && birthDate.getDate() === day;
    });

    setTodayBirthdays(filteredBirthdays);
  }, [people]);

  return (
    <div className="container">
      <div className="left-container">
        <p className="top">Total {people.length} birthdays</p>
        <p className="bottom">{todayBirthdays.length > 0 ? todayBirthdays.length : '0'} birthdays today</p>
      </div>
      <div className="right-container">
        <List people={todayBirthdays} />
      </div>
    </div>
  );
};

export default NumberOfBirthdays;
