function Display({resume}){
    const info = resume.personalInfo;

    const handlePrint = () => {
        window.print();
    }
    
    return(
        <>
         <div className="display-container">
             {/* PERSONAL INFO*/}
        
            {/* PERSONAL INFO */}
            {info && (
                <div className="personal-info-display">
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
                        <p><b>Company Name</b> - {item.companyName}</p>
                        <p><b>Position</b> - {item.position}</p>
                        <p><b>Decription of work</b> - {item.positionDescription}</p>
                        <p><b>Start Date</b> - {item.startDate}</p>
                        <p><b>End Date</b> - {item.endDate}</p>
                    </div>
                )))}
            </div>
            <p className="section-break"></p>
        
         </div>
         <button onClick={handlePrint} className="print-btn">Print Resume</button>
        </>
    )
}

export default Display