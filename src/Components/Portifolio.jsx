import React from 'react';
//import '../assets/hand'
const Portifolio = () => {
    return (
        <div className='portifolio_container  row  justify-content-md-between '>
            <div className='head col-lg-12 col-md-4 col-4'>
                <h1 id='sub_title'>Our Portfolio</h1>
                <p>Discover our successful projects
                     that highlight our expertise in land acquisition and 
                     investment strategies tailored for our clients.</p>
            </div>
            <div className="box  col-lg-12 col-md-6 col-8">
                <div className='row  justify-content-lg-evenly '>
                    <div className="col-md-3 col-3">
                        <h2>93%</h2>
                        <p>Short Description</p>
                    </div>
                    <div className="col-md-3 col-3 ">
                        <h2>175+</h2>
                        <p>Short Description</p>
                    </div>
                    <div className="col-md-3 col-3">
                        <h2>30K</h2>
                        <p>Short Description</p>
                    </div>
                    <div className="col-md-3 col-3">
                        <h2>1.5M</h2>
                        <p>Short Description</p>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Portifolio;
