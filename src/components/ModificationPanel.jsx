import ModificationPanelStyle from "./ModificationPanel.module.css"
import PersonalModification from "./PersonalModification"
import EducationModification from "./EducationModification"
import ExperienceModification from "./ExperienceModification"

function ModificationPanel({infoEdition, infoName, infoEmail, infoPhone, infoAddress, educEdition, educOnChange, expEdition, expOnChange, pdf}) {
    return <div className={ModificationPanelStyle.container}>
        <PersonalModification infoEdition={infoEdition} infoName={infoName} infoEmail={infoEmail} infoPhone={infoPhone} infoAddress={infoAddress}/>
        <EducationModification educEdition={educEdition} educOnChange={educOnChange}/>
        <ExperienceModification expEdition={expEdition} expOnChange={expOnChange}/>
        <button className={ModificationPanelStyle.cv} onClick={pdf}>Download CV</button>
    </div>
}

export default ModificationPanel
