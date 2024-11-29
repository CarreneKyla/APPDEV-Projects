import React from 'react';
import { useParams } from 'react-router-dom';
import employees from '../data/employees';

const EmployeeDetails = () => {
  const { id } = useParams();
  const employee = employees.find((e) => e.id === parseInt(id));

  return (
    <div className="employee-details">
      <h1>{employee.name}</h1>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Qualifications:</strong> {employee.qualifications}</p>
    </div>
  );
};

export default EmployeeDetails;
