import React from 'react';
import { Link } from 'react-router-dom';
import employees from '../data/employees';
import '../styles/company-profile.css';

const CompanyProfile = () => {
  return (
    <div className="company-profile">
      <h1>Our Team</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/company-profile/${employee.id}`}>{employee.name}</Link> - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyProfile;