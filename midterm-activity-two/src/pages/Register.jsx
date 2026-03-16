import StudentForm from '../components/StudentForm';
import './Register.css';

const Register = () => {
    return (
        <div className="register-container">
            <h1>Register Student</h1>
            <StudentForm />
        </div>
    );
};

export default Register;