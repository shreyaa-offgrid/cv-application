import "../styles/Fields.css"

export default function Fields({ fields, editMode, placeholders, handleChange, draftInfo }) {
    return (
        <>{fields.map(field =>
            <div className="field" key={field}>
                <p>{field}:</p>
                {!editMode &&
                    <input
                        name={field}
                        placeholder={placeholders[field]}
                        onChange={(e) => handleChange(field, e.target.value)}
                        value={draftInfo[field] || ""}
                    />
                }
                {editMode && <p style={{ fontSize: '0.8em', color: "#3B4953" }}>{draftInfo[field] || ""}</p>}
            </div>
        )}
        </>
    )
}