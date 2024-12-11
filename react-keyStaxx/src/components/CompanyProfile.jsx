import React from 'react';
import { Link } from 'react-router-dom';
import employees from '../data/employees';
import '../styles/company-profile.css';

const CompanyProfile = () => {
  return (
    <div className="company-profile">
      <h1>Our Team</h1>
      <div className="employee-cards">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <h3>{employee.name}</h3>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Qualifications:</strong> {employee.qualifications}</p>
            <Link to={`/company-profile/${employee.id}`} className="view-profile-link">View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyProfile;
