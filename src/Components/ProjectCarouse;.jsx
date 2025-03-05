import React from 'react';
import 'flowbite';
import sms from '../assets/SMS.png'
import solitaire from '../assets/Solitaire.png'
import vishnupuram from '../assets/Vishnupuram.png'
import GreenCapital from '../assets/GreenCapital.png'
import GreenPalms from '../assets/GreenPalms.png'
import DiamondCity from '../assets/DiamondCity.png'
import Dhatri from '../assets/Dhatri.png'



const projects = [
    {
        Name: "SMS Screnity",
        Location: "Bhogapuram, Vishakapatnam",
        ProjectSize: "20 Acres",
        ApprovalDetails: "(PROCEEDINGS OF THE VICE CHAIRMAN, VUDA, VISAKHAPATNAM PRESENT:: Dr. T.BABURAO NAIDU, PhD, IAS. Rc.No.6936/2015/L8, Dt. 30-06-2016. VUDA PLG-VSP - Approval of layout in Sy. Nos. 152p, 226, 227, 228, 229, 230p & 231p of Mopada Village and S.No.8 of Bangarurajupeta Village, Denkada Mandal, Vizianagaram District - Applied by M/s. SMS Infra for an extent of Acs.18.62 Cts vide L.P.No.86/2016 - Orders issued.)",
        Image: sms
    },
    {
        Name: "Green Palms",
        Location: "Ravada, Bhogapuram, Vishakapatnam",
        ProjectSize: "13 Acres",
        ApprovalDetails: "(Visakhapatnam Metropolitan Region Development Authority Proceedings Of The Metropolitan Commissioner Present: Sri M. Venugopal Reddy (Metropolitan Commissioner) File No. : 1167/0058/LP/VMRDA/2021/Mortgage Date : 13 November, 2021 L.P.No. : 61/2021/1167/VMRDA/DPMS)",
        Image: GreenPalms
    },
    {
        Name: "Diamond City",
        Location: "Bhogapuram, Vishakapatnam",
        ProjectSize: "10 Acres",
        ApprovalDetails: "(Visakhapatnam Metropolitan Region Development Authority Proceedings Of The Metropolitan Commissioner Present: Sri P. Koteswara Rao (Metropolitan Commissioner) File No: 1167/0041/LP/VMRDA/2019/Mortgage L.P.No. : 44/2019/1167/VMRDA/DPMS Date: 13 February, 2020)",
        Image: DiamondCity
    },
    {
        Name: "Green Capital",
        Location: "Dakamarri, Vishakapatnam",
        ProjectSize: "8 Acres",
        ApprovalDetails: "(Visakhapatnam Metropolitan Region Development Authority Proceedings Of The Metropolitan Commissioner Present: Sri P. Koteswara Rao (Metropolitan Commissioner) File No. : 1167/0078/LP/VMRDA/2020/Mortgage Date : 16 April, 2021 L.P.No. : 60/2020/1167/VMRDA/DPMS)",
        Image: GreenCapital
    },
    {
        Name: "Vishnupuram",
        Location: "Ravada, Near Bhogapuram, Airport",
        ProjectSize: "19.5 Acres",
        ApprovalDetails: "(Visakhapatnam Metropolitan Region Development Authority Proceedings Of The Metropolitan Commissioner Present: Sri A. Mallikarjuna (Metropolitan Commissioner) File No. : 1167/0053/LP/VMRDA/2022/Mortgage Date : 08 February, 2023 L.P.No. : 21/2022/1167/VMRDA/DPMS)",
        Image: vishnupuram
    },
    {
        Name: "Arcadia",
        Location: "Vishakapatnam",
        ProjectSize: "25 Acres",
        ApprovalDetails: "(Visakhapatnam Metropolitan Region Development Authority Proceedings Of The Metropolitan Commissioner Present: Sri A. Mallikarjuna (Metropolitan Commissioner) File No. : 1167/0003/LP/VMRDA/2023/Mortgage Date : 03 February, 2024 L.P.No. : 60/2023/1167/VMRDA/DPMS)",
        Image: Dhatri
    },
    {
        Name: "Solitaire Meadows",
        Location: "Maheshwaram, Hyderabad",
        ProjectSize: "25 Acres",
        ApprovalDetails: "(L.P. No. 58/2005. DT&CP, Govt. of A.P, Nagaram Grampanchayat (shamshabad) LAYOUT PLAN IN SY.NO. 164(P), 158, 159(P) BITUTATED AT NAGARAM VILLAGE, MAHASWARAM MANDAL, R.R. District)",
        Image: solitaire
    }
];

const ProjectCarouse = () => {
    const projects = [
        {
            Name: "SMS Screnity",
            Location: "Bhogapuram, Vishakapatnam",
            ProjectSize: "20 Acres",
            ApprovalDetails: "(PROCEEDINGS OF THE VICE CHAIRMAN, VUDA, VISAKHAPATNAM PRESENT:: Dr. T.BABURAO NAIDU, PhD, IAS. Rc.No.6936/2015/L8, Dt. 30-06-2016. VUDA PLG-VSP - Approval of layout in Sy. Nos. 152p, 226, 227, 228, 229, 230p & 231p of Mopada Village and S.No.8 of Bangarurajupeta Village, Denkada Mandal, Vizianagaram District - Applied by M/s. SMS Infra for an extent of Acs.18.62 Cts vide L.P.No.86/2016 - Orders issued.)",
            Image: sms
        },
        {
            Name: "Green Palms",
            Location: "Ravada, Bhogapuram, Vishakapatnam",
            ProjectSize: "13 Acres",
            ApprovalDetails: "(Visakhapatnam Metropolitan Region Development Authority Proceedings Of The Metropolitan Commissioner Present: Sri M. Venugopal Reddy (Metropolitan Commissioner) File No. : 1167/0058/LP/VMRDA/2021/Mortgage Date : 13 November, 2021 L.P.No. : 61/2021/1167/VMRDA/DPMS)",
            Image: GreenPalms
        },
        {
            Name: "Diamond City",
            Location: "Bhogapuram, Vishakapatnam",
            ProjectSize: "10 Acres",
            ApprovalDetails: "(Visakhapatnam Metropolitan Region Development Authority Proceedings Of The Metropolitan Commissioner Present: Sri P. Koteswara Rao (Metropolitan Commissioner) File No: 1167/0041/LP/VMRDA/2019/Mortgage L.P.No. : 44/2019/1167/VMRDA/DPMS Date: 13 February, 2020)",
            Image: DiamondCity
        },
        {
            Name: "Green Capital",
            Location: "Dakamarri, Vishakapatnam",
            ProjectSize: "8 Acres",
            ApprovalDetails: "(Visakhapatnam Metropolitan Region Development Authority Proceedings Of The Metropolitan Commissioner Present: Sri P. Koteswara Rao (Metropolitan Commissioner) File No. : 1167/0078/LP/VMRDA/2020/Mortgage Date : 16 April, 2021 L.P.No. : 60/2020/1167/VMRDA/DPMS)",
            Image: GreenCapital
        },
        {
            Name: "Vishnupuram",
            Location: "Ravada, Near Bhogapuram, Airport",
            ProjectSize: "19.5 Acres",
            ApprovalDetails: "(Visakhapatnam Metropolitan Region Development Authority Proceedings Of The Metropolitan Commissioner Present: Sri A. Mallikarjuna (Metropolitan Commissioner) File No. : 1167/0053/LP/VMRDA/2022/Mortgage Date : 08 February, 2023 L.P.No. : 21/2022/1167/VMRDA/DPMS)",
            Image: vishnupuram
        },
        {
            Name: "Arcadia",
            Location: "Vishakapatnam",
            ProjectSize: "25 Acres",
            ApprovalDetails: "(Visakhapatnam Metropolitan Region Development Authority Proceedings Of The Metropolitan Commissioner Present: Sri A. Mallikarjuna (Metropolitan Commissioner) File No. : 1167/0003/LP/VMRDA/2023/Mortgage Date : 03 February, 2024 L.P.No. : 60/2023/1167/VMRDA/DPMS)",
            Image: Dhatri
        },
        {
            Name: "Solitaire Meadows",
            Location: "Maheshwaram, Hyderabad",
            ProjectSize: "25 Acres",
            ApprovalDetails: "(L.P. No. 58/2005. DT&CP, Govt. of A.P, Nagaram Grampanchayat (shamshabad) LAYOUT PLAN IN SY.NO. 164(P), 158, 159(P) BITUTATED AT NAGARAM VILLAGE, MAHASWARAM MANDAL, R.R. District)",
            Image: solitaire
        }
    ];
    return (
        <div className='pro_caro_container'>
            <h1 id="sub_title">Our Projects</h1>
            <hr id="title_hr"/>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={sms} alt="SMS Screnity" id='p_caro_img' />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>SMS Screnity</h3>
                            <p>{projects[0].Location}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={GreenPalms} alt="Green Palms" id='p_caro_img' />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Green Palms</h3>
                            <p>{projects[1].Location}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={DiamondCity} alt="Diamond City" id='p_caro_img' />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Diamond City</h3>
                            <p>{projects[2].Location}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={GreenCapital} alt="Green Capital" id='p_caro_img' />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Green Capital</h3>
                            <p>{projects[3].Location}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={vishnupuram} alt="Vishnupuram" id='p_caro_img' />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Vishnupuram</h3>
                            <p>{projects[4].Location}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Dhatri} alt="Arcadia" id='p_caro_img' />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Arcadia</h3>
                            <p>{projects[5].Location}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={solitaire} alt="Solitaire Meadows" id='p_caro_img' />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 >Solitaire Meadows</h3>
                            <p>{projects[6].Location}</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-10 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="inline-flex items-center bg-white justify-center w-10 h-10 rounded-full  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-[10] text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </a>
            </div>

        </div>
    );
}

export default ProjectCarouse;



{/* <div id="default-carousel" className="relative w-full" data-carousel="slide">

<div className="relative h-56 overflow-hidden rounded-lg md:h-96">

    <div className="hidden duration-700  transition-all ease-in-out " data-carousel-item>
         <img src={projects[0].Image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"   id='p_caro_img'/> 
        <div className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
            <a href="#" className="flex flex-col items-center  bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-[50%] rounded-t-lg h-[600px] md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={projects[0].Image} alt=" id='p_caro_img'"/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </a>
            </div>
    </div>

    <div className="hidden duration-700  transition-all ease-in-out " data-carousel-item>
        <img src={projects[1].Image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  id='p_caro_img' />
    </div>

    <div className="hidden duration-700  transition-all ease-in-out " data-carousel-item>
        <img src={projects[2].Image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  id='p_caro_img' />
    </div>

    <div className="hidden duration-700  transition-all ease-in-out " data-carousel-item>
        <img src={projects[3].Image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  id='p_caro_img' />
    </div>

    <div className="hidden duration-700  transition-all ease-in-out " data-carousel-item>
        <img src={projects[4].Image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  id='p_caro_img' />
    </div>

    <div className="hidden duration-700  transition-all ease-in-out " data-carousel-item>
        <img src={projects[5].Image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  id='p_caro_img' />
    </div>

    <div className="hidden duration-700  transition-all ease-in-out " data-carousel-item>
        <img src={projects[6].Image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  id='p_caro_img' />
    </div>
</div>

<div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>

</div>

<button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="green" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
        </svg>
        <span className="sr-only">Previous</span>
    </span>
</button>
<button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="green" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        </svg>
        <span className="sr-only">Next</span>
    </span>
</button>
</div> */}
