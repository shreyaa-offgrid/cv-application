import { useState } from "react";
import Fields from "./Fields";
import Buttons from "./Buttons";

export default function Entry({ fields, placeholders, onSave }) {
    const [editMode, setEditMode] = useState(false);
    const [draftInfo, setDraftInfo] = useState({});

    function handleChange(field, value) {
        setDraftInfo(prev => ({ ...prev, [field]: value }));
    }

    function handleSubmit() {
        onSave(draftInfo);   
        setEditMode(true);
    }

    function handleEdit() {
        setEditMode(false);
    }

    return (
        <>
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
        </>
    );
}