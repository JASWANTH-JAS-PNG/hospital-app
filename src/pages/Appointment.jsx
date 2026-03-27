import React from "react";

import { useState } from "react";
import "./Appointment.css";


function Appointment() {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            message: ""
        }
    );
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Appointment booked successfully!");

    }   

    return (
        <div className="appointment">
            <h1>Book an Appointment</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />    
                <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                <textarea name="message" placeholder="Additional Message" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
}   
export default Appointment;