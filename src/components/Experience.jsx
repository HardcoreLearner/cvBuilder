import ExperienceStyle from "./Experience.module.css"

function Experience(experiences) {
    return <div className={ExperienceStyle.container}>
        <div className={ExperienceStyle.sectionTitle}>Professional Experience</div>
            {Object.values(experiences).map((exp) => 
            <div className={ExperienceStyle.expContainer} key={exp.id}>
                <div className={ExperienceStyle.info}>
                    <div className="expPeriod">{exp.startDate+" - "+exp.endDate}</div>
                    <div className="expLoc">{exp.location}</div>
                </div>
                <div className="expDetails">
                    <div className={ExperienceStyle.job}>{exp.positionTitle}</div>
                    <div className="expComp">{exp.companyName}</div>
                    <div className="expDesc">{exp.description}</div>
                </div>
        </div>)}
    </div>
}

export default Experience
