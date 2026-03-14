import "../styles/Buttons.css"

export default function Buttons({editMode, handleSubmit, handleEdit}){
    return (
        <div className="btns-flex">
            {editMode && <button onClick={handleEdit}>Edit</button>}
            {!editMode && <button onClick={handleSubmit}>Submit</button>}
        </div>
    )
}