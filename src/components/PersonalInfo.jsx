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
            <form onSubmit={handleSubmit} action="">
                <label>Name</label>
                <input 
                type="text" 
                name="name"
                required
                value={personalInfo.name}
                onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default PersonalInfo