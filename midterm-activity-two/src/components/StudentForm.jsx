import { useState } from "react";
import "./StudentForm.css";

const initialState = {
    name: "",
    email: "",
    course: "",
};

const StudentForm = () => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "Name is required";
        if (!form.email.trim()) {
            errs.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
        ) {
            errs.email = "Invalid email format";
        }
        if (!form.course.trim()) errs.course = "Course is required";
        return errs;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // Submit logic here
        alert("Form submitted!");
        setForm(initialState);
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="student-form">
            <div className="form-field">
                <label className="form-label">Name:</label>
                <input
                    className="form-input"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            <div className="form-field">
                <label className="form-label">Email:</label>
                <input
                    className="form-input"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className="form-field">
                <label className="form-label">Course:</label>
                <input
                    className="form-input"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    type="text"
                />
                {errors.course && <div className="error-message">{errors.course}</div>}
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default StudentForm;
