import EducationModificationStyle from "./EducationModification.module.css"

function EducationModification({educEdition, educOnChange}) {
    let educations = Object.values(educEdition);
    return <div className={EducationModificationStyle.container}>
    <h2 className={EducationModificationStyle.title}>Education Details</h2>
    {educations.map((education, index) => {if (education.isCollapsed) {
        return <div key={education.id} className={EducationModificationStyle.eduTitleHolder}>
        <h3 className={EducationModificationStyle.eduTitle}>Education {new String(index + 1)}</h3>
        <button key={education.id} className={EducationModificationStyle.editButton} onClick={e => educOnChange.editBtn(e, education.id)}>Edit</button>
        </div> ;
    } else {
        return <>
        <h3 className={EducationModificationStyle.eduTitle}>Education {new String(index + 1)}</h3>
        <form key={education.id} className={EducationModificationStyle.modifForm}>
        <label className={EducationModificationStyle.modiLabel} htmlFor="school">School</label>
        <input className={EducationModificationStyle.modiInp} type="text" id="school" defaultValue={education.schoolName} onChange={e => educOnChange.school(e, education.id)}/>
        <label className={EducationModificationStyle.modiLabel} htmlFor="degree">Degree</label>
        <input className={EducationModificationStyle.modiInp} type="text" id="degree" defaultValue={education.degree} onChange={e => educOnChange.degree(e, education.id)}/>
        <div className={EducationModificationStyle.date}>
            <div className={EducationModificationStyle.dateItem}>
            <label className={EducationModificationStyle.modiLabel} htmlFor="sDate">Start Date</label>
            <input className={EducationModificationStyle.modiInp} type="text" id="sDate" defaultValue={education.startDate} onChange={e => educOnChange.start(e, education.id)}/>
            </div>
            <div className={EducationModificationStyle.dateItem}>
            <label className={EducationModificationStyle.modiLabel} htmlFor="eDate">End Date</label>
            <input className={EducationModificationStyle.modiInp} type="text" id="eDate" defaultValue={education.endDate} onChange={e => educOnChange.end(e, education.id)}/>
            </div>
        </div>
        <label className={EducationModificationStyle.modiLabel} htmlFor="location">Location</label>
        <input className={EducationModificationStyle.modiInp} type="text" id="location" defaultValue={education.location} onChange={e => educOnChange.location(e, education.id)}/>
        <div className={EducationModificationStyle.modiBtns}>
            <button className={EducationModificationStyle.bt1} onClick={e => educOnChange.del(e, education.id)}>Delete</button>
            <button className={EducationModificationStyle.bt2} onClick={e => educOnChange.fin(e, education.id)}>Finish</button>
        </div>
    </form></>
    }
    })}
    <button className={EducationModificationStyle.addEduBtn} onClick={e => educOnChange.add(e)}>+ Add Education</button>
    </div>
}

export default EducationModification
