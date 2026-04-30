function Display({resume}){
    return(
        <>
         <div className="display-container">
            {resume.personalInfo.map((info => (
                <div key={info.id}>
                    <p>{info.name}</p>
                </div>
            )))}
            
         </div>
         <button className="print-btn">Print Resume</button>
        </>
    )
}

export default Display