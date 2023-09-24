import PersonalModificationStyle from "./PersonalModification.module.css"

function PersonalModification({infoEdition, infoName, infoEmail, infoPhone, infoAddress}) {
    return <div className={PersonalModificationStyle.container}>
    <h2 className={PersonalModificationStyle.title}>Personal Details</h2>
    <form className={PersonalModificationStyle.modifForm}>
        <label className={PersonalModificationStyle.modiLabel} htmlFor="name">Full Name</label>
        <input className={PersonalModificationStyle.modiInp} type="text" id="name" defaultValue={infoEdition.fullName} onChange={infoName}/>
        <label className={PersonalModificationStyle.modiLabel} htmlFor="mail">Email</label>
        <input className={PersonalModificationStyle.modiInp} type="text" id="mail" defaultValue={infoEdition.email} onChange={infoEmail}/>
        <label className={PersonalModificationStyle.modiLabel} htmlFor="phone">Phone Number</label>
        <input className={PersonalModificationStyle.modiInp} type="text" id="phone" defaultValue={infoEdition.phoneNumber} onChange={infoPhone}/>
        <label className={PersonalModificationStyle.modiLabel} htmlFor="adress">Adress</label>
        <input className={PersonalModificationStyle.modiInp} type="text" id="adress" defaultValue={infoEdition.address} onChange={infoAddress}/>
    </form>
    </div>
}

export default PersonalModification
