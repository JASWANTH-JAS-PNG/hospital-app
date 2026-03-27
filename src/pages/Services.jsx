import React from "react";




const servicedata = [
    {id : 1, title : "Cardiology", description : "Comprehensive cardiac care with advanced diagnostics and treatments."},
    {id : 2, title : "Neurology", description : "Expert neurological care for a wide range of conditions."},
    {id : 3, title : "Pediatrics", description : "Compassionate care for infants, children, and adolescents."},

];


function Services() {
    return (
        <div className="services">
            <h1>Our Services</h1>
            <div className="service-list">
                {servicedata.map(service => (
                    <div key = {service.id} className="service-card">
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Services;