function Display({resume}){
    return(
        <>
         <div className="display-container">
            {resume.personalInfo.map((info => (
                <div className="personl-info-display" key={info.id}>
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
            )))}
            
         </div>
         <button className="print-btn">Print Resume</button>
        </>
    )
}

export default Display