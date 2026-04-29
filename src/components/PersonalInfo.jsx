function PersonalInfo({personalInfo, setPersonalInfo, handleSubmit}){

    const handleChange = (e) => {
        const {name, value} = e.target

        setPersonalInfo({
            ...personalInfo,
            [name]: value
        })
    }
    return(
        <>
            <form className="personal-form" onSubmit={handleSubmit} action="">
                <h2>Personal Information</h2>
                <label>Name</label>
                <input 
                type="text" 
                name="name"
                required
                value={personalInfo.name}
                onChange={handleChange}
                />

                <label>Email</label>
                <input 
                type="email" 
                name="email"
                required
                value={personalInfo.email}
                onChange={handleChange}
                />

                <button className="form-btn" type="submit">Submit</button>
            </form>
        </>
    )
}

export default PersonalInfo