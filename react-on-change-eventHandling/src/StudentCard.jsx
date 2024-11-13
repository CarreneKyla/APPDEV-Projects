import React from 'react';

export default function StudentCard(props) {
  const listOfstudents = props.students;
  const student = listOfstudents.map(student =>
    <div key={student.id}>
      <h4>Student ID Number: {student.id}</h4>
      <p>Student Name: {student.name}</p>
      <p>Student Course: {student.course}</p>
      <p>Student Age: {student.age}</p>
      <p>Student Gender: {student.gender}</p>
      <p>Student Date: {student.date}</p>
    </div>
  );

  return (
    <div className="student-card">
      {student}
    </div>
  );
}
