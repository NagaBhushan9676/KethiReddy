import React from 'react';

const Introduction = () => {
    return (
        <div className='intro_container'>
            
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-3 wel  ps-0">
                        <h1 id="sub_title">Welcome to</h1>
                        <hr id="title_hr" />
                    </div>
                    <div className="col-lg-9 col-12 about">
                        <div className="head"><p><span>Kethireddy Group</span> <br />is a premier real estate consultancy focused on land acquisition and investment strategies.
                        </p>
                        <hr />
                        </div>
                           
                        <p>With years of experience, Kethireddy Group has built a reputation for excellence in the real estate sector.
                            Our expertise lies in understanding the intricate land market dynamics,
                            enabling us to provide tailored solutions for our clients. We empower corporates, intelligent investor groups,
                            and high-net-worth individuals to secure strategic land assets for development and investment opportunities.
                            Our commitment to meticulous planning ensures successful transactions for large-scale real estate projects in Hyderabad and Visakhapatnam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
