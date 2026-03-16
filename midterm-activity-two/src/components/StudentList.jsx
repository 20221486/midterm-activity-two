import React from 'react';
import { Link } from 'react-router-dom';
import './StudentList.css';

const students = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: 'Elijah',
    course: 'BS Computer Science',
}));

const StudentList = () => (
    <div>
        <h2>Student List</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td><Link to={`/student/${student.id}`}>{student.id}</Link></td>
                        <td>{student.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default StudentList;