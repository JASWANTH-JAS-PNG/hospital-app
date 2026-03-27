import React from "react";



const departmentdata = [
    {
        id: 1,
        name: "Cardiology",
        description: "Our Cardiology department offers comprehensive cardiac care with advanced diagnostics and treatments. Our team of experienced cardiologists is dedicated to providing personalized care for patients with heart conditions, including coronary artery disease, heart failure, arrhythmias, and more. We utilize state-of-the-art technology to ensure accurate diagnoses and effective treatment plans."
    },
    {
        id: 2,
        name: "Neurology",
        description: "Our Neurology department provides expert neurological care for a wide range of conditions. Our team of neurologists specializes in diagnosing and treating disorders of the nervous system, including stroke, epilepsy, multiple sclerosis, Parkinson's disease, and more. We are committed to delivering compassionate care and utilizing the latest advancements in neurology to improve patient outcomes."
    },
    {id: 3, name: "Pediatrics", description: "Our Pediatrics department offers compassionate care for infants, children, and adolescents. Our team of pediatricians is dedicated to providing comprehensive healthcare services, including routine check-ups, immunizations, developmental screenings, and treatment for common childhood illnesses. We strive to create a welcoming and supportive environment for our young patients and their families."}
];

function Departments() {
    return (
        <section className="departments">
            <h1>Our Departments</h1>
            <div className="departments">
                {departmentdata.map(departmentdata => (
                    <div key={departmentdata.id} className="department-card">
                        <h2>{departmentdata.name}</h2>
                        <p>{departmentdata.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Departments;
