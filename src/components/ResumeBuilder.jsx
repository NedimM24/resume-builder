import { useState } from "react"
import PersonalInfo from "./resumebuilder-children/PersonalInfo"
import Education from "./resumebuilder-children/Education"
import Experience from "./resumebuilder-children/Experience"
function ResumeBuilder({setResume}){

  //Personal info object
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

  //Education object
  const [education, setEducation] = useState(
    {
      id: crypto.randomUUID(),
      schoolName:"",
      degreeField: "",
      graduationDate: "",
    }
  )

  //Experience object
  const [experience, setExperience] = useState(
    {
      id: crypto.randomUUID(),
      companyName: "",
      position: "",
      positionDescription: "",
      startDate: "",
      endDate: "",
    }
  )

  /*
  Handles form submission.
  Combines personalInfo and education into one object
  and passes it to setResume to update the parent state.
  After submission, it resets both form inputs.
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    setResume((prev) => ({
      personalInfo:[...prev.personalInfo, personalInfo],
      education:[...prev.education, education],
      experience:[...prev.experience, experience],

    }));
  
    setPersonalInfo(
      {
      id: crypto.randomUUID(),
      name:"",
      email: "",
      address: "",
      phone: "",
      title: "",
    })

     setEducation(
      {
        id: crypto.randomUUID(),
        schoolName:"",
        degreeField: "",
        graduationDate: "",
    })

    setExperience(
      {
        id: crypto.randomUUID(),
        companyName: "",
        position: "",
        positionDescription: "",
        startDate: "",
        endDate: "",
      }
    )
  }
    return (
    <>
      <div className='resume-container'>
        <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} handleSubmit={handleSubmit} /> 
        <Education education={education} setEducation={setEducation} handleSubmit={handleSubmit} /> 
        <Experience experience={experience} setExperience={setExperience} handleSubmit={handleSubmit} />
      </div>
    </>
  )
}

export default ResumeBuilder