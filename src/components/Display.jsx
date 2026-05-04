function Display({resume}){
    const info = resume.personalInfo;
    return(
        <>
         <div className="display-container">
             {/* PERSONAL INFO*/}
        
            {/* PERSONAL INFO */}
            {info && (
                <div className="personl-info-display">
                <div className="personal-info-header">
                    <h1>{info.name}</h1>
                    <h5>{info.title}</h5>
                </div>

                <div className="contact-address">
                    <p>📞 {info.phone}</p>
                    <p>📧 {info.email}</p>
                    <p>📍 {info.address}</p>
                </div>
                <p className="section-break"></p>
                </div>
            )}
            
             {/* EDUCATION */}
            <div className="education-display">
                {resume.education.map((item => (
                    <div key={item.id}>
                        <div>
                            <h4>Education</h4>
                        </div>
                        <p>University - {item.schoolName}</p>
                        <p>Field of Study - {item.degreeField}</p>
                        <p>Graduated - {item.graduationDate}</p>
                    </div>
                )))}
            </div>
            <p className="section-break"></p>

            {/* EXPERIENCE */}
            <div className="experience-display">
                {resume.experience.map((item => (
                    <div key={item.id}>
                        <div>
                            <h4>Experience</h4>
                        </div>
                        <p>Company Name - {item.companyName}</p>
                        <p>Position - {item.position}</p>
                        <p>Decription of work - {item.positionDescription}</p>
                        <p>Start Date - {item.startDate}</p>
                        <p>End Date - {item.endDate}</p>
                    </div>
                )))}
            </div>
            <p className="section-break"></p>
        
         </div>
         <button className="print-btn">Print Resume</button>
        </>
    )
}

export default Display