import React from "react";

import Doctors from "./Doctors";
import Services from "./Services";
import Header from "../components/Header/Header";
import Contact from "./Contact";
import Appointment from "./Appointment";
import Footer from "../components/Footer/Footer";
import Departments from "./Departments";
import Hero from "../components/Hero/Hero";


function Home() {
    return (
        <div>


            
            <Header />
            <div data-aos="fade-up">
                <Hero
                    title="Welcome to MediCare"
                    subtitle="Providing compassionate, high-quality healthcare for you and your family."
                    buttonText="Book Appointment"
                    image="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80"
                />
            </div>
            <div data-aos="fade-right"><Services /></div>
            <div data-aos="fade-up"><Departments /></div>
            <div data-aos="zoom-in"><Doctors /></div>
            <div data-aos="fade-left"><Appointment /></div>
            <div data-aos="fade-up"><Contact /></div>
            <Footer />
        </div>
    );
}

export default Home;    