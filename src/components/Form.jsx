import "../styles/Form.css"
import { useState } from "react";
import { genInfoFields, eduFields, expFields } from "../fields";
import {genInfoPlaceholders, eduPlaceholders, expPlaceholders} from "../placeholders";
import Section from "./Section";

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