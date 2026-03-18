import { useState } from "react";
import Fields from "./Fields";
import Buttons from "./Buttons";
import Entry from "./Entry";

export default function Section({ title, fields, placeholders, info, setInfo, entries, onSaveEntry, onAddMore }) {
    const isGeneral = title === 'General Information';
    const [editMode, setEditMode] = useState(false);
    const [draftInfo, setDraftInfo] = useState(info);

    function handleChange(field, value) {
        setDraftInfo(prev => ({ ...prev, [field]: value }));
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
            {isGeneral ? (
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
            ) : (
                <>
                    {entries.map(entry => (
                        <Entry
                            key={entry.id}
                            fields={fields}
                            placeholders={placeholders}
                            entryData={entry}
                            onSave={(data) => onSaveEntry(entry.id, data)}
                        />
                    ))}
                    <button className="add-more" type="button" onClick={onAddMore}>
                        Add more {title.toLowerCase()}
                    </button>
                </>
            )}
        </div>
    );
}