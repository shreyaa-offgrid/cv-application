export default function Buttons({editMode, handleSubmit, title}){
    return (
        <div className="btns-flex">
            {editMode && <button>Edit</button>}
            {!editMode && <button onClick={handleSubmit}>Submit</button>}
            {(title!=='General Information') && <button>&#10010;</button>}
        </div>
    )
}