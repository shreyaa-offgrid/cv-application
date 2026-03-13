import "../styles/Form.css"
import { useState } from "react";

function Section({title, fields, placeholders, info, setInfo}){

    const [draftInfo, setDraftInfo] = useState(info);

    function handleChange(field, value){
        setDraftInfo(prev=> ({
            ...prev, [field]:value
        }))
    }
    function handleSubmit(){
        setInfo(draftInfo);
    }

    return (
        <div className="section">
            <h2>{title} &#8658;</h2>
            <hr/>
            {fields.map(field => 
                <div className="field" key={field}>
                    <p>{field}</p>
                    <input 
                        type="text" 
                        placeholder={placeholders[field]}
                        onChange={(e) => handleChange(field, e.target.value)}
                        value={draftInfo[field] || ""}
                    />
                </div>
            )}
            <div className="btns-flex">
                <button>Edit</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export const genInfoFields = ['Name', 'Email', 'Phone', 'LinkedIn', 'City'];
export const eduFields = ['School Name', 'Title of Study', 'Start Date', 'End Date'];
export const expFields = ['Company Name', 'Position Title','Start Date', 'End Date', 'Responsibilities'];

const genInfoPlaceholders = {
  'Name':'John Doe', 
  'Email':'johndoe@gmail.com', 
  'Phone':'+91 9999999999', 
  'LinkedIn':'https://www.linkedin.com/in/john-doe/', 
  'City':'New Delhi'
}
const eduPlaceholders = {
  'School Name': 'ABC University',
  'Title of Study': 'B.Sc in Computer Science',
  'Start Date': 'Aug 2019',
  'End Date': 'May 2021'
};
const expPlaceholders = {
  'Company Name': 'Ericsson',
  'Position Title': 'Frontend Developer',
  'Start Date': 'Jun 2022',
  'End Date': 'Present',
  'Responsibilities': 'Developed responsive UI using React, collaborated with designers, and optimized performance.'
};

export default function Form({ 
    generalInfo, education, experience, 
    setGeneralInfo, setEducation, setExperience })
{
    return (
        <div className="form-container">
            <Section 
                title="General Information" 
                fields={genInfoFields} 
                placeholders={genInfoPlaceholders}
                info = {generalInfo}
                setInfo={setGeneralInfo}
            />
            <Section 
                title="Education" 
                fields={eduFields}
                placeholders={eduPlaceholders}
                info = {education}
                setInfo = {setEducation}
            /> 
            <Section 
                title="Experience" 
                fields={expFields}
                placeholders={expPlaceholders}
                info = {experience}
                setInfo = {setExperience}
            />
        </div>
    )
}