import React, { useState, useEffect } from 'react';
import '../styles/developer-profile.css'; // Import the CSS file

const people = [
  { id: 1, name: 'Carrene Kyla M. Lacson', role: 'Front-End Developer', vouches: 0 },
  { id: 2, name: 'Erckiel Cazel P. Olores', role: 'Back-End Developer', vouches: 0 },
  { id: 3, name: 'John Doe', role: 'Product Designer', vouches: 0 },
  { id: 4, name: 'Jane Smith', role: 'Software Developer', vouches: 0 },
  { id: 5, name: 'Emma Johnson', role: 'Marketing Specialist', vouches: 0 },
  { id: 6, name: 'Michael Clark', role: 'UI/UX Designer', vouches: 0 },
  { id: 7, name: 'Olivia Williams', role: 'Full Stack Developer', vouches: 0 },
];

const DeveloperProfile = () => {
  const [peopleList, setPeopleList] = useState(people);

  useEffect(() => {
    // Load vouches from localStorage
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
    // Save updated vouches to localStorage
    localStorage.setItem('peopleVouches', JSON.stringify(updatedPeople));
  };

  return (
    <div className="developer-profile">
      <h1>Our Team</h1>
      {peopleList.map(person => (
        <div key={person.id} className="profile-card">
          <h3>{person.name}</h3>
          <p><strong>Role:</strong> {person.role}</p>
          <p><strong>Vouches:</strong> {person.vouches}</p>
          <button onClick={() => handleVouch(person.id)}>Vouch</button>
        </div>
      ))}
    </div>
  );
};

export default DeveloperProfile;
