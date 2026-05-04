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
      
    }
  )

  /*
  Handles form submission.
  Combines personalInfo and education into one object
  and passes it to setResume to update the parent state.
  After submission, it resets both form inputs.
  */
    const handlePersonalSubmit = (e) => {
    e.preventDefault();
    setResume((prev) => ({
      ...prev,
      personalInfo
    }));

    setPersonalInfo({
      id: crypto.randomUUID(),
      name:"",
      email: "",
      address: "",
      phone: "",
      title: "",
    })
  }

  // EDUCATION
  const handleEducationSubmit = (e) => {
    e.preventDefault();

    setResume((prev) => ({
      ...prev,
      education: [...prev.education, education]
    }));

    setEducation({
      id: crypto.randomUUID(),
      schoolName: "",
      degreeField: "",
      graduationDate: "",
    });
  }

  // EXPERIENCE
  const handleExperienceSubmit = (e) => {
    e.preventDefault();

    setResume((prev) => ({
      ...prev,
      experience: [...prev.experience, experience]
    }));

    setExperience({
      id: crypto.randomUUID(),
      companyName: "",
      position: "",
      positionDescription: "",
      startDate: "",
      endDate: "",
    });
  }
    return (
    <>
      <div className='resume-container'>
        <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} handlePersonalSubmit={handlePersonalSubmit} /> 
        <Education education={education} setEducation={setEducation} handleEducationSubmit={handleEducationSubmit} /> 
        <Experience experience={experience} setExperience={setExperience} handleExperienceSubmit={handleExperienceSubmit} />
      </div>
    </>
  )
}

export default ResumeBuilder