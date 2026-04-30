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
                        <h6>{item.schoolName}</h6>
                        <p>{item.degreeField}</p>
                        <p>{item.graduationDate}</p>
                    </div>
                )))}
            </div>
            
         </div>
         <button className="print-btn">Print Resume</button>
        </>
    )
}

export default Display