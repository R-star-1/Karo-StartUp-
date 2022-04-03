import React from 'react';
import KaroContentImage from "../Images/KaroContentImages.png";
const KaroContent =() =>{
    return (
        <div className='karo_Content'>
            <div className='Karo_heading'>
                <h1>Bridging India’s Skill Gap through Live classroom and Internship opportunities.</h1>
                <p>Join a free demo training & classroom session to boost your career! We are a community of people who are passionate about the future of freshers. We are here to help you learn and grow your skills and get placed in the top startup companies. A junction for startups and students.to exchange values from each other.</p>
                <div className='button'>
                    <button className='registerButton'>Register To get Internship </button>
                    <button className='Join_As_Leader'> Join as Leader </button>
                </div>
            </div>
           
            <div className='SideImageDiv'>
                <img src={KaroContentImage} alt="Logo..."  className='SideImage'/>
            </div>
           
        </ div >
    );
}
export default KaroContent;