import "../styles/Preview.css"

function GeneralInfo({generalInfo}){
    return (
        <div className='generalInfo'>
            <h2>{generalInfo.Name}</h2>
            <p>{generalInfo.City} | {generalInfo.Phone} | {generalInfo.Email} | 
                <a href={generalInfo.LinkedIn} target="_blank"> LinkedIn</a>
            </p>
            <hr/>
        </div>
    )
}

function Education({education}){
    return (
        <div className="education">
            <h3>Education</h3>
            <hr/>
            <div className="eduTitle">
                <p className='name'>{education['School Name']}</p>
                <p>{education['Start Date']} - {education['End Date']}</p>
            </div>
            <p className="title">{education['Title of Study']}</p>
            
        </div>
    )
}

function Experience({experience}){
    return (
        <div className="experience">
            <h3>Experience</h3>
            <hr/>
            <div className="expTitle">
                <p className='name'>{experience['Company Name']}</p>
                <p>{experience['Start Date']} - {experience['End Date']}</p>
            </div>
            <p className="title">{experience['Position Title']}</p>
            <p>{experience.Responsibilities}</p>
        </div>
    )
}

export default function Preview({generalInfo, education, experience}){
    return (
        <div className="preview-box">
            <div className="preview-pane">
                {(Object.keys(generalInfo).length<1 && 
                Object.keys(education).length<1 && 
                Object.keys(experience).length<1) && 
                <p>Submit some details to start previewing...</p>}
                {Object.keys(generalInfo).length > 0 ? 
                    (<GeneralInfo generalInfo={generalInfo}/>) : null
                }

                {Object.keys(education).length > 0 ? 
                    (<Education education={education}/>) : null
                }

                {Object.keys(experience).length > 0 ? 
                    (<Experience experience={experience}/>) : null
                }
            </div>
            <button>Download</button>
        </div>
    )
}