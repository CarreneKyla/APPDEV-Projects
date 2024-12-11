import React from 'react';
import { useParams } from 'react-router-dom';
import employees from '../data/employees';
import '../styles/employee-profile.css';  

const EmployeeDetails = () => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  const pdfFile = '/public/resumes/resume.pdf'; 

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <div className="employee-profile">
      <h1>{employee.name}'s Profile</h1>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Qualifications:</strong> {employee.qualifications}</p>

      <div className="resume-section">
        <h2>Resume</h2>
        <div className="pdf-container">
          <iframe
            src={pdfFile}
            width="50%"  
            height="800px"
            title="Employee Resume"
            style={{ margin: '0 auto', display: 'block' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
