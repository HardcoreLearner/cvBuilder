import CVstyle from "./CVHolder.module.css"
import Info from "./Info";
import Education from "./Education";
import Experience from "./Experience";

function CVHolder ({personal, education, experience}) {
    return <div className={CVstyle.cvHolder} id="cvToPrint">
        <Info {...personal} />
        <div className={CVstyle.contentSection}>
            <Education {...education} />
            <Experience {...experience} />
        </div>
    </div>;
}

export default CVHolder;
