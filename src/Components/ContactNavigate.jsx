import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const ContactNavigate = ({bText}) => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/Footer")}>{bText}</button>
        </div>
    );
}

export default ContactNavigate;
