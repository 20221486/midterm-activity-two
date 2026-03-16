import React from 'react';
import { Link } from 'react-router-dom';

const students = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: 'Elijah',
    course: 'BS Computer Science',
}));

const StudentList = () => (
    <div>
        <h2>Student List</h2>
        <ul>
            {students.map(student => (
                <li key={student.id}>
                    ID: <Link to={`/student/${student.id}`}>{student.id}</Link> | Name: {student.name}
                </li>
            ))}
        </ul>
    </div>
);

export default StudentList;
