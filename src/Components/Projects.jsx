import React from 'react';
import sms from '../assets/SMS.png'
import solitaire from '../assets/Solitaire.png' 
import vishnupuram from '../assets/Vishnupuram.png'
import GreenCapital from '../assets/GreenCapital.png'
import GreenPalms from '../assets/GreenPalms.png'
import DiamondCity from '../assets/DiamondCity.png'
import Dhatri from '../assets/Dhatri.png'
import ClientCard from './ClientCard.';

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
      

const Projects = () => {      
    return (
        <div className='projec_container'>
           
            <div className="grid  col-span-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2 gap-4 m-2 grid-projects">
                {projects.map((project, index) => (
                  
                    <ClientCard key={index} className='w-[100px]' img={project.Image} title={project.Name} Location={project.Location} Details={project.ApprovalDetails} pSize={project.ProjectSize} />
                   
                ))}
            </div>
        </div>
    );
}

export default Projects;


                    