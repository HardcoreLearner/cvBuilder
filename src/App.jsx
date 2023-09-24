import { useState } from 'react'
import './App.css'
import exampleData from './example'
import CVHolder from './components/CVHolder'
import ModificationPanel from './components/ModificationPanel'
import uniqid from "uniqid";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'

function App() {
  function generatePDF() {
    var HTML_Width = document.querySelector("#cvToPrint").offsetWidth;
          var HTML_Height = document.querySelector("#cvToPrint").offsetHeight;
          var top_left_margin = 15;
          var PDF_Width = HTML_Width+(top_left_margin*2);
          var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
          var canvas_image_width = HTML_Width;
          var canvas_image_height = HTML_Height;
          var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
          html2canvas(document.querySelector("#cvToPrint"),{allowTaint:true, scale:3}).then(function(canvas) {
              canvas.getContext('2d');
              var imgData = canvas.toDataURL("image/jpeg", 1.0);
              var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
              pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
              for (var i = 1; i <= totalPDFPages; i++) { 
                  pdf.addPage(PDF_Width, PDF_Height);
                  pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
              }
              pdf.save("cv.pdf");
      });
    }
  const data = exampleData;
  const [info, setInfo] = useState(data.info);
  function infoEditName(e) {
    e.preventDefault();
    console.log("You are changing the name");
    setInfo({...info, fullName:e.target.value});
  }
  function infoEditEmail(e) {
    e.preventDefault();
    setInfo({...info, email:e.target.value});
  }
  function infoEditPhone(e) {
    e.preventDefault();
    setInfo({...info, phoneNumber:e.target.value});
  }
  function infoEditAddress(e) {
    e.preventDefault();
    setInfo({...info, address:e.target.value});
  }
  const [education, setEducation] = useState(data.educations);
  function eduEditSchool(e, id) {
    e.preventDefault();
    const newEducation = education.map((educ) => {
      if(educ.id == id) {
        return {...educ, schoolName: e.target.value, isCollapsed:false};
      } else {
        return educ;
      }
    })
    setEducation(newEducation);
    setEduModi(newEducation);
  }
  function eduEditDegree(e, id) {
    e.preventDefault();
    const newEducation = education.map((educ) => {
      if(educ.id == id) {
        return {...educ, degree: e.target.value, isCollapsed:false};
      } else {
        return educ;
      }
    })
    setEducation(newEducation);
    setEduModi(newEducation);
  }
  function eduEditLocation(e, id) {
    e.preventDefault();
    const newEducation = education.map((educ) => {
      if(educ.id == id) {
        return {...educ, location: e.target.value, isCollapsed:false};
      } else {
        return educ;
      }
    })
    setEducation(newEducation);
    setEduModi(newEducation);
  }
  function eduEditStart(e, id) {
    e.preventDefault();
    const newEducation = education.map((educ) => {
      if(educ.id == id) {
        return {...educ, startDate: e.target.value, isCollapsed:false};
      } else {
        return educ;
      }
    })
    setEducation(newEducation);
    setEduModi(newEducation);
  }
  function eduEditEnd(e, id) {
    e.preventDefault();
    const newEducation = education.map((educ) => {
      if(educ.id == id) {
        return {...educ, endDate: e.target.value, isCollapsed:false};
      } else {
        return educ;
      }
    })
    setEducation(newEducation);
    setEduModi(newEducation);
  }
  const [eduModi, setEduModi] = useState(data.educations);
  function handleEditButton(e, id) {
    e.preventDefault();
    const newEduModi = eduModi.map((educ) => {
      if(educ.id == id) {
        return {...educ, isCollapsed: false};
      } else {
        return educ;
      }
    })
    setEduModi(newEduModi);
  }
  function handleEdDel(e, id) {
    e.preventDefault();
    const newEducation = education.filter((educ) => educ.id != id);
    setEducation(newEducation);
    setEduModi(newEducation);
  }
  function handleEdFin(e, id) {
    e.preventDefault();
    const newEduModi = eduModi.map((educ) => {
      if(educ.id == id) {
        return {...educ, isCollapsed: true};
      } else {
        return educ;
      }
    })
    setEduModi(newEduModi);
  }
  function addEd(e) {
    e.preventDefault();
    const newEducation = [...education, {
      id: uniqid(),
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
  }];
    setEducation(newEducation);
    setEduModi(newEducation);
  }

  const [experience, setExperience] = useState(data.experiences);
  function expEditCompany(e, id) {
    e.preventDefault();
    const newExperience = experience.map((exp) => {
      if(exp.id == id) {
        return {...exp, companyName: e.target.value, isCollapsed:false};
      } else {
        return exp;
      }
    })
    setExperience(newExperience);
    setExpModi(newExperience);
  }
  function expEditPosition(e, id) {
    e.preventDefault();
    const newExperience = experience.map((exp) => {
      if(exp.id == id) {
        return {...exp, positionTitle: e.target.value, isCollapsed:false};
      } else {
        return exp;
      }
    })
    setExperience(newExperience);
    setExpModi(newExperience);
  }
  function expEditLocation(e, id) {
    e.preventDefault();
    const newExperience = experience.map((exp) => {
      if(exp.id == id) {
        return {...exp, location: e.target.value, isCollapsed:false};
      } else {
        return exp;
      }
    })
    setExperience(newExperience);
    setExpModi(newExperience);
  }
  function expEditStart(e, id) {
    e.preventDefault();
    const newExperience = experience.map((exp) => {
      if(exp.id == id) {
        return {...exp, startDate: e.target.value, isCollapsed:false};
      } else {
        return exp;
      }
    })
    setExperience(newExperience);
    setExpModi(newExperience);
  }
  function expEditEnd(e, id) {
    e.preventDefault();
    const newExperience = experience.map((exp) => {
      if(exp.id == id) {
        return {...exp, endDate: e.target.value, isCollapsed:false};
      } else {
        return exp;
      }
    })
    setExperience(newExperience);
    setExpModi(newExperience);
  }
  function expEditDescription(e, id) {
    e.preventDefault();
    const newExperience = experience.map((exp) => {
      if(exp.id == id) {
        return {...exp, description: e.target.value, isCollapsed:false};
      } else {
        return exp;
      }
    })
    setExperience(newExperience);
    setExpModi(newExperience);
  }
  const [expModi, setExpModi] = useState(data.experiences);
  function handleExpEditButton(e, id) {
    e.preventDefault();
    const newExpModi = expModi.map((exp) => {
      if(exp.id == id) {
        return {...exp, isCollapsed: false};
      } else {
        return exp;
      }
    })
    setExpModi(newExpModi);
  }
  function handleExpEdDel(e, id) {
    e.preventDefault();
    const newExpModi = experience.filter((exp) => exp.id != id);
    setExperience(newExpModi);
    setExpModi(newExpModi);
  }
  function handleExpEdFin(e, id) {
    e.preventDefault();
    const newExpModi = expModi.map((exp) => {
      if(exp.id == id) {
        return {...exp, isCollapsed: true};
      } else {
        return exp;
      }
    })
    setExpModi(newExpModi);
  }
  function addExpEd(e) {
    e.preventDefault();
    const newExpModi = [...experience, {
      id: uniqid(),
      companyName: "",
      positionTitle: "",
      location: "",
      description:"",
      startDate: "",
      endDate: "",
      isCollapsed: false,
  }];
    setExperience(newExpModi);
    setExpModi(newExpModi);
  }

  return (
    <>
    <ModificationPanel infoEdition={data.info} infoName={infoEditName} infoEmail={infoEditEmail} infoPhone={infoEditPhone} infoAddress={infoEditAddress} educEdition={eduModi} educOnChange={{school: eduEditSchool, degree: eduEditDegree, location: eduEditLocation, start: eduEditStart, end: eduEditEnd, editBtn:handleEditButton, del:handleEdDel, fin:handleEdFin, add:addEd}} expEdition={expModi} expOnChange={{company: expEditCompany, position: expEditPosition, location: expEditLocation, start: expEditStart, end: expEditEnd, description: expEditDescription, editBtn:handleExpEditButton, del:handleExpEdDel, fin:handleExpEdFin, add:addExpEd}} pdf={generatePDF}/>
    <CVHolder personal={info} education={education} experience={experience} />
    </>
  )
}

export default App
