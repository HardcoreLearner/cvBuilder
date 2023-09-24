import InfoStyle from "./Info.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEnvelope, faPhone, faLocationDot} from "@fortawesome/free-solid-svg-icons"


function Info(info) {
    return <div className={InfoStyle.infoHolder}>
        <h1 className={InfoStyle.name} id="infoTitle">{info.fullName}</h1>
        <div className={InfoStyle.contactInfo}>
            <div className={InfoStyle.contactDivs}><FontAwesomeIcon icon={faEnvelope} /><p id="infoEmail" className="email">{info.email}</p></div>
            <div className={InfoStyle.contactDivs}><FontAwesomeIcon icon={faPhone} /><p id="infoPhone" className="phoneNumber">{info.phoneNumber}</p></div>
            <div className={InfoStyle.contactDivs}><FontAwesomeIcon icon={faLocationDot} /> <p id="infoAdress" className="address">{info.address}</p></div>
        </div>
    </div>
}

export default Info