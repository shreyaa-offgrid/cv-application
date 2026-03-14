import "../styles/Preview.css"

function GeneralInfo({generalInfo}){
    return (
        <div className='generalInfo'>
            <h2>{generalInfo.Name}</h2>
            <p>{generalInfo.City} | {generalInfo.Phone} | {generalInfo.Email} | 
                <a href={generalInfo.LinkedIn}> LinkedIn</a>
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

export default function Preview({generalInfo, education, experience}){
    return (
        <div className="preview-box">
            <div className="preview-pane">
                {Object.keys(generalInfo).length > 0 ? 
                    (<GeneralInfo generalInfo={generalInfo}/>) : 
                    (<p>Submit some details to start previewing...</p>)
                }

                {Object.keys(education).length > 0 ? 
                    (<Education education={education}/>) : null
                }

                {Object.keys(experience).length > 0 ? 
                    (<div>Work Experience</div>) : null
                }
            </div>
            <button>Download</button>
        </div>
    )
}