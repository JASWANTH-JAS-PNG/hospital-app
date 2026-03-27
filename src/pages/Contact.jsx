import React from "react";

const contactInfo = [
  {
    type: "Phone",
    value: "975464******",
  },
  {
    type: "Email",
    value: "zebra@gmail.com",
  },
    { type: "Address",
    value: "123 Main St, Anytown, USA",
  },
];

function Contact() {
    return (
        <div className="contact">   
            <h1>Contact Us</h1>
            <div className="contact-info">
                {contactInfo.map((info, index) => (
                    <div key={index} className="contact-item">
                        <h2>{info.type}</h2>
                        <p>{info.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;