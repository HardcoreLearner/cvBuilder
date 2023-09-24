import Education from "./Education";
import ExperienceModificationStyle from "./ExperienceModification.module.css"

function ExperienceModification({expEdition, expOnChange}) {
    let experiences= Object.values(expEdition);
    return <div className={ExperienceModificationStyle.container}>
    <h2 className={ExperienceModificationStyle.title}>Experience Details</h2>
    {experiences.map((experience, index) => {if (experience.isCollapsed) {
        return <div key={experience.id} className={ExperienceModificationStyle.expTitleHolder}>
        <h3 className={ExperienceModificationStyle.expTitle}>Experience {new String(index + 1)}</h3>
        <button key={experience.id} className={ExperienceModificationStyle.editButton} onClick={e => expOnChange.editBtn(e, experience.id)}>Edit</button>
        </div> ;
    } else {
        return <>
        <h3 className={ExperienceModificationStyle.expTitle}>Experience {new String(index + 1)}</h3>
        <form key={experience.id} className={ExperienceModificationStyle.modifForm}>
        <label className={ExperienceModificationStyle.modiLabel} htmlFor="company">Company Name</label>
        <input className={ExperienceModificationStyle.modiInp} type="text" id="company" defaultValue={experience.companyName} onChange={e => expOnChange.company(e, experience.id)}/>
        <label className={ExperienceModificationStyle.modiLabel} htmlFor="position">Position Title</label>
        <input className={ExperienceModificationStyle.modiInp} type="text" id="position" defaultValue={experience.positionTitle} onChange={e => expOnChange.position(e, experience.id)}/>
        <div className={ExperienceModificationStyle.date}>
            <div className={ExperienceModificationStyle.dateItem}>
            <label className={ExperienceModificationStyle.modiLabel} htmlFor="sDate">Start Date</label>
            <input className={ExperienceModificationStyle.modiInp} type="text" id="sDate" defaultValue={experience.startDate} onChange={e => expOnChange.start(e, experience.id)}/>
            </div>
            <div className={ExperienceModificationStyle.dateItem}>
            <label className={ExperienceModificationStyle.modiLabel} htmlFor="eDate">End Date</label>
            <input className={ExperienceModificationStyle.modiInp} type="text" id="eDate" defaultValue={experience.endDate} onChange={e => expOnChange.end(e, experience.id)}/>
            </div>
        </div>
        <label className={ExperienceModificationStyle.modiLabel} htmlFor="location">Location</label>
        <input className={ExperienceModificationStyle.modiInp} type="text" id="location" defaultValue={experience.location} onChange={e => expOnChange.location(e, experience.id)}/>
        <label className={ExperienceModificationStyle.modiLabel} htmlFor="description">Description</label>
        <textarea name="" id="" cols="30" rows="10" className={ExperienceModificationStyle.descArea} defaultValue={experience.description} onChange={e => expOnChange.description(e, experience.id)}></textarea>
        <div className={ExperienceModificationStyle.modiBtns}>
            <button className={ExperienceModificationStyle.bt1} onClick={e => expOnChange.del(e, experience.id)}>Delete</button>
            <button className={ExperienceModificationStyle.bt2} onClick={e => expOnChange.fin(e, experience.id)}>Finish</button>
        </div>
        </form>
    </>
    }})}
    <button className={ExperienceModificationStyle.addExpBtn} onClick={e => expOnChange.add(e)}>+ Add Experience</button>
    </div>
}

export default ExperienceModification
