import React from "react";
import "./Doctors.css";

const doctordata = [
    { id: 1, name: "Dr. John Smith", specialization: "Cardiologist", experience: "15 years", image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=360" },
    { id: 2, name: "Dr. Emily Johnson", specialization: "Neurologist", experience: "10 years", image: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg?w=360" },
    { id: 3, name: "Dr. Michael Brown", specialization: "Pediatrician", experience: "8 years", image: "https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-coat_23-2148868893.jpg?w=360" },
    { id: 4, name: "Dr. Sarah Davis", specialization: "Dermatologist", experience: "12 years", image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360" },
    { id: 5, name: "Dr. David Wilson", specialization: "Orthopedic Surgeon", experience: "20 years", image: "https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?w=360" },
    { id: 6, name: "Dr. Lisa Miller", specialization: "Gynecologist", experience: "18 years", image: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=360" },
    { id: 7, name: "Dr. James Anderson", specialization: "Psychiatrist", experience: "14 years", image: "https://img.freepik.com/free-photo/handsome-young-male-doctor-wearing-white-coat-stethoscope_171337-5066.jpg?w=360" },
    { id: 8, name: "Dr. Karen Taylor", specialization: "Oncologist", experience: "16 years", image: "https://img.freepik.com/free-photo/front-view-female-doctor-with-stethoscope_23-2148827762.jpg?w=360" },
    { id: 9, name: "Dr. Robert Martinez", specialization: "Gastroenterologist", experience: "11 years", image: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=360" },
    { id: 10, name: "Dr. Jennifer Lee", specialization: "Endocrinologist", experience: "9 years", image: "https://img.freepik.com/free-photo/portrait-smiling-young-woman-doctor_171337-1532.jpg?w=360" },
    { id: 11, name: "Dr. William Harris", specialization: "Pulmonologist", experience: "13 years", image: "https://img.freepik.com/free-photo/senior-doctor-wearing-white-coat_23-2148816181.jpg?w=360" },
    { id: 12, name: "Dr. Jessica Clark", specialization: "Rheumatologist", experience: "7 years", image: "https://img.freepik.com/free-photo/young-female-doctor-white-uniform_23-2148827763.jpg?w=360" },
];


function Doctors() {
    return (

    
        <section className="doctors">
            <h1>Our Doctors</h1>
            <div className="doctor-list">
                {doctordata.map(doctor => (
                    <div key = {doctor.id} className="doctor-card">
                        <img src={doctor.image} alt={doctor.name} />
                        <h2>{doctor.name}</h2>
                        <p>{doctor.specialization}</p>
                        <p>Experience: {doctor.experience}</p>
                    </div>  
                ))}
            </div>
        </section>
    );
}   
        export default Doctors;