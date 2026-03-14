import { useState } from "react";
import Fields from "./Fields";
import Buttons from "./Buttons";

export default function Section({ title, fields, placeholders, info, setInfo }) {
    const [editMode, setEditMode] = useState(false);
    const [draftInfo, setDraftInfo] = useState(info);

    function handleChange(field, value) {
        setDraftInfo(prev => ({
            ...prev, [field]: value
        }))
    }

    function handleSubmit() {
        setInfo(draftInfo);
        setEditMode(true);
    }

    function handleEdit() {
        setEditMode(false);
    }

    return (
        <div className="section">
            <h2>{title} &#8658;</h2>
            <hr />
            <Fields
                fields={fields}
                placeholders={placeholders}
                editMode={editMode}
                handleChange={handleChange}
                draftInfo={draftInfo}
            />
            <Buttons
                editMode={editMode}
                handleSubmit={handleSubmit}
                handleEdit={handleEdit}
            />
            {title !== 'General Information' &&
                <button className="add-more" type="button" onClick={() => handleAddMore(setInfo)}>Add more {title.toLowerCase()}</button>
            }
        </div>
    )
}