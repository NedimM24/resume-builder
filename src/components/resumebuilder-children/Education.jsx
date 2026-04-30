function Educataion(education, setEducation, handleSubmit){

     const handleChange = (e) => {
        const {name, value} = e.target

        setEducation({
            ...education,
            [name]: value
        })
    }

    return(
        <>
            <form className="form personal-form" onSubmit={handleSubmit} action="">
                <h2>Education</h2>
                <label>School Name</label>
                <input 
                type="text" 
                name="schoolName"
                required
                value={education.schoolName}
                onChange={handleChange}
                />

                <label>Field Of Study </label>
                <input 
                type="text" 
                name="degreeField"
                required
                value={education.degreeField}
                onChange={handleChange}
                />

                <label>Graduation Date </label>
                <input 
                type="date" 
                name="graduationDate"
                required
                value={education.graduationDate}
                onChange={handleChange}
                />
                <button className="form-btn" type="submit">Submit</button>
            </form>
        </>
    )

}

export default Educataion