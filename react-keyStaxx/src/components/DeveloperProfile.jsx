import React, { useState, useEffect } from 'react';
import '../styles/developer-profile.css';

const people = [
  { id: 1, name: 'Carrene Kyla M. Lacson', hobbies: 'Reading fiction novels and photography', role: 'Front-End Developer', experience: '5 years of experience', vouches: 0 },
  { id: 2, name: 'Erckiel Cazel P. Olores', hobbies: 'Coding and playing video games', role: 'Back-End Developer', experience: '3 years of experience', vouches: 0 },
  { id: 3, name: 'John Doe', hobbies: 'Drawing and graphic design', role: 'Product Designer', experience: '4 years of experience', vouches: 0 },
  { id: 4, name: 'Jane Smith', hobbies: 'Hiking and yoga', role: 'Software Developer', experience: '2 years of experience', vouches: 0 },
  { id: 5, name: 'Emma Johnson', hobbies: 'Traveling and blogging', role: 'Marketing Specialist', experience: '3 years of experience', vouches: 0 },
  { id: 6, name: 'Michael Clark', hobbies: 'Web design and sketching', role: 'UI/UX Designer', experience: '6 years of experience', vouches: 0 },
];

const DeveloperProfile = () => {
  const [peopleList, setPeopleList] = useState(people);

  useEffect(() => {
    const savedVouches = JSON.parse(localStorage.getItem('peopleVouches'));
    if (savedVouches) {
      setPeopleList(savedVouches);
    }
  }, []);

  const handleVouch = (id) => {
    const updatedPeople = peopleList.map(person =>
      person.id === id ? { ...person, vouches: person.vouches + 1 } : person
    );
    setPeopleList(updatedPeople);
    localStorage.setItem('peopleVouches', JSON.stringify(updatedPeople));
  };

  return (
    <div className="developer-profile">
      <h1>Our Team</h1>
      <div className="profile-cards">
        {peopleList.map(person => (
          <div key={person.id} className="profile-card">
            <h3>{person.name}</h3>
            <p><strong>Role:</strong> {person.role}</p>
            <p><strong>Experience:</strong> {person.experience}</p>
            <p><strong>Hobbies:</strong> {person.hobbies}</p>
            <p><strong>Vouches:</strong> {person.vouches}</p>
            <button onClick={() => handleVouch(person.id)}>Vouch</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperProfile;
