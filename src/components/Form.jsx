import "../styles/Form.css"

function Section({title, fields}){
    return (
        <div className="section">
            <h2>{title} &#8658;</h2>
            <hr/>
            {fields.map(field => 
                <div className="field">
                    <p>{field}</p>
                    <input type="text"></input>
                </div>
            )}
            <div className="btns-flex">
                <button>Edit</button>
                <button>Submit</button>
            </div>
        </div>
    )
}

const genInfoFields = ['Name', 'Email', 'Phone', 'LinkedIn', 'City'];
const eduFields = ['School Name', 'Title of Study', 'Start Date', 'End Date'];
const expFields = ['Company Name', 'Position Title','Start Date', 'End Date', 'Responsibilities'];
export default function Form(){
    return (
        <div className="form-container">
            <Section title="General Information" fields={genInfoFields}></Section>
            <Section title="Education" fields={eduFields}></Section>
            <Section title="Experience" fields={expFields}></Section>
        </div>
    )
}