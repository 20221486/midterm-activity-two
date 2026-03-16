import React from 'react';
import { useParams } from 'react-router-dom';
import './StudentDetails.css';

const gpas = [3.0, 3.2, 3.5, 3.7, 4.0];

const StudentDetails = () => {
    const { id } = useParams();
    const studentId = parseInt(id);
    const student = {
        id: studentId,
        name: 'Elijah',
        course: 'BS Computer Science',
        gpa: gpas[studentId % gpas.length]
    };

    return (
        <div className="student-details">
            <h2>Student Details</h2>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Course: {student.course}</p>
            <p>GPA: {student.gpa}</p>
        </div>
    );
};

export default StudentDetails;