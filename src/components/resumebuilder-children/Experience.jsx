function Experience({experience, setExperience, handleExperienceSubmit, isActive, onShow}){

    const handleChange = (e) => {
        const {name, value} = e.target

        setExperience({
            ...experience,
            [name]: value
        })
    }

    return(
        <>
            {isActive ? (
                <form className="form experience-form" onSubmit={handleExperienceSubmit} action="">
                <h2>Experience</h2>
                <label>Company Name</label>
                <input 
                type="text" 
                name="companyName"
                required
                value={experience.companyName}
                onChange={handleChange}
                />

                <label>Position</label>
                <input 
                type="text" 
                name="position"
                required
                value={experience.position}
                onChange={handleChange}
                />

                <label>Job Description</label>
                <input 
                type="text" 
                name="positionDescription"
                required
                value={experience.positionDescription}
                onChange={handleChange}
                />

                <label>Start Date</label>
                <input 
                type="date" 
                name="startDate"
                required
                value={experience.startDate}
                onChange={handleChange}
                />

                <label>End Date</label>
                <input 
                type="date" 
                name="endDate"
                required
                value={experience.endDate}
                onChange={handleChange}
                />

                <button className="form-btn" type="submit">Submit</button>
            </form>
            ) : (
                <button className="accordion" onClick={onShow}>
                    <h2>Experience</h2>
                </button>
            )}
            
        </>
    )

}

export default Experience