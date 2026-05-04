function PersonalInfo({personalInfo, setPersonalInfo, handlePersonalSubmit, isActive, onShow}){

    const handleChange = (e) => {
        const {name, value} = e.target

        setPersonalInfo({
            ...personalInfo,
            [name]: value
        })
    }
    return(
        <>
            {isActive ? (
                <form className="form personal-form" onSubmit={handlePersonalSubmit} action="">
                <h2>Personal Info</h2>
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

                <label>Address</label>
                <input 
                type="text" 
                name="address"
                required
                value={personalInfo.address}
                onChange={handleChange}
                />

                <label>Phone</label>
                <input 
                type="number" 
                name="phone"
                required
                value={personalInfo.phone}
                onChange={handleChange}
                />

                <label>Title</label>
                <input 
                type="text" 
                name="title"
                required
                value={personalInfo.title}
                onChange={handleChange}
                />

                <button className="form-btn" type="submit">Submit</button>
            </form>
            ) : (
                <button className="accordion" onClick={onShow}>
                    <h2>Personal Info</h2>
                </button>
            )}
            
        </>
    )
}

export default PersonalInfo