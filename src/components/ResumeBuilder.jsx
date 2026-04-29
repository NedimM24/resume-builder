import { useState } from "react"
import PersonalInfo from "./PersonalInfo"
function ResumeBuilder({setResume}){

  const [personalInfo, setPersonalInfo] = useState(
    {
      id: crypto.randomUUID(),
      name:"",
      email: "",
      address: "",
      phone: "",
      title: "",

    }
  )
  const handleSubmit = (e) => {
    e.preventDefault();
    setResume(personalInfo);
    //setResume(Educataion)
    //setResume(Experience)
    setPersonalInfo(
      {
      name:"",
      email: "",
      address: "",
    }
    )
  }
    return (
    <>
      <div className='resume-container'>
        <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} handleSubmit={handleSubmit} /> 
        {/* <Education /> */}
        {/* <Experience /> */}
      </div>
    </>
  )
}

export default ResumeBuilder