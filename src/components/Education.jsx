import EducationStyle from "./Education.module.css"

function Education(educations) {
    return <div className={EducationStyle.container}>
        <div className={EducationStyle.sectionTitle}>Education</div>
        
            {Object.values(educations).map((degree) => <div className={EducationStyle.degContainer} key={degree.id}>
            <div className="degreeInfo">
                <div className="eduPeriod">{degree.startDate+" - "+degree.endDate}</div>
                <div className="eduLoc">{degree.location}</div>
            </div>
            <div className="degreeDetails">
                <div className={EducationStyle.degree}>{degree.degree}</div>
                <div className="eduUni">{degree.schoolName}</div>
            </div>
        </div>)}
        
    </div>
}

export default Education
