import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const ContactNavigate = ({ bText, className }) => {
    const navigate = useNavigate();
    return (
        <button className={className} onClick={() => navigate("/Footer")}>
            {bText}
        </button>
    );
};

export default ContactNavigate;
