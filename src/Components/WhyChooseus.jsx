import React from 'react';
import ap from '../assets/why-choose-us.png'

const WhyChooseus = () => {
    return (
        <>
           
            <div className='wcu_container'>
                <h1 id="sub_title">Why Choose Us</h1>
                <hr id="title_hr"/>
                <div className='bottom'>
               
                    <img src={ap} alt="" />
                </div>
                <div className='top'>
                    <div className="child top-right">
                        <h2> Proven Success</h2>
                        <p> Our track record of successful transactions speaks for our commitment to client satisfaction.</p>

                    </div>
                    <div className="child middle-left">
                        <h2> Tailored Solutions</h2>
                        <p>We customize our strategies to meet the unique needs of each client for optimal success.</p>
                    </div>
                    <div className="child bottom-right">
                        <h2> Expert Guidance</h2>
                        <p>Our team’s deep market knowledge ensures informed decisions for maximizing real estate investments.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyChooseus;
