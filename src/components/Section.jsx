import {useState } from "react";
import Fields from "./Fields";
import Buttons from "./Buttons";

export default function Section({title, fields, placeholders, info, setInfo}){
    const [editMode, setEditMode] = useState(false);
    const [draftInfo, setDraftInfo] = useState(info);
    const [degreesList, setDegreesList] = useState([]);
    const [experiencesList, setExperiencesList] = useState([]);

    function handleChange(field, value){
        setDraftInfo(prev=> ({
            ...prev, [field]:value
        }))
    }

    function handleSubmit(){
        setInfo(draftInfo);
        setEditMode(true);
    }

    return (
        <div className="section">
            <h2>{title} &#8658;</h2>
            <hr/>
            <Fields fields={fields} placeholders={placeholders} editMode={editMode} handleChange={handleChange} draftInfo={draftInfo}/>
            <Buttons editMode={editMode} handleSubmit={handleSubmit} title={title}/>
        </div>
    )
}