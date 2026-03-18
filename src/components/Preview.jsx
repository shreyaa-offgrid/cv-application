import "../styles/Preview.css"

function GeneralInfo({ generalInfo }) {
    return (
        <div className='generalInfo'>
            <h2>{generalInfo.Name}</h2>
            <p>{generalInfo.City} | {generalInfo.Phone} | {generalInfo.Email} |
                <a href={generalInfo.LinkedIn} target="_blank"> LinkedIn</a>
            </p>
            <hr />
        </div>
    )
}

function EducationEntry({ eduEntry }) {
    return (
        <>
            <div className="eduTitle">
                <p className='name'>{eduEntry['School Name']}</p>
                <p>{eduEntry['Start Date']} - {eduEntry['End Date']}</p>
            </div>
            <p className="title">{eduEntry['Title of Study']}</p>
        </>
    )
}

function ExperienceEntry({ expEntry }) {
    return (
        <>
            <div className="expTitle">
                <p className='name'>{expEntry['Company Name']}</p>
                <p>{expEntry['Start Date']} - {expEntry['End Date']}</p>
            </div>
            <p className="title">{expEntry['Position Title']}</p>
            <p>{expEntry.Responsibilities}</p>
        </>
    )
}

function Education({ education }) {
    return (
        <div className="education">
            <h3>Education</h3>
            <hr />
            {education.map(entry => (
                <EducationEntry key={entry.id} eduEntry={entry} />
            ))}
        </div>
    )
}

function Experience({ experience }) {
    return (
        <div className="experience">
            <h3>Experience</h3>
            <hr />
            {experience.map(entry => (
                <ExperienceEntry key={entry.id} expEntry={entry} />
            ))}
        </div>
    )
}

export default function Preview({ generalInfo, education, experience }) {
    const hasGeneral = Object.keys(generalInfo).length > 0;
const hasEducation = education.some(e => Object.keys(e).length > 1);
const hasExperience = experience.some(e => Object.keys(e).length > 1);
    return (
        <div className="preview-box">
            <div className="preview-pane">
                {!hasGeneral && !hasEducation && !hasExperience &&
                    <p>Submit some details to start previewing...</p>
                }
                {hasGeneral && <GeneralInfo generalInfo={generalInfo} />}
                {hasEducation && <Education education={education} />}
                {hasExperience && <Experience experience={experience} />}
            </div>
            <button className="download-btn" onClick={() => window.print()}>Download</button>
        </div>
    )
}