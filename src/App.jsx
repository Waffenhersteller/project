import { Route, Routes} from "react-router-dom";

import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import React,{ useState, lazy, Suspense} from "react";




import Footer from "./Footer1/Footer.jsx"
import Header from "./Header/header.jsx"

import Main from "./Main/Main.jsx"


import Contact from "./Contacts/Contact.jsx"
import Contact1 from "./Contact/contacts.jsx"

/* import Privacy from "./privacy/privacy.jsx" */
const Privacy = lazy(()=> import("./privacy/privacy.jsx"))


import Errore from "./error404/index.jsx"
/* import PublikInfo from "./PublikInfo/index.jsx" */
const PublikInfo = lazy(()=> import("./PublikInfo/index.jsx"))

/* import Organization from "./trainingOrganisation/index.jsx" */
const Organization = lazy(()=> import("./trainingOrganisation/index.jsx"))


/* import QualityEducation from "./QualityEducation/index.jsx" */
const QualityEducation = lazy(()=> import("./QualityEducation/index.jsx"))

/* import Bulling from "./bulling/index.jsx"; */
const Bulling = lazy(()=>import("./bulling/index.jsx"))

import Shedule from "./Shedule/index.jsx"

/* import FullTimeSchool from "./FullDaySchool/index.jsx" */
const FullTimeSchool = lazy(()=> import("./FullDaySchool/index.jsx"))

/* import Meal from "./Meal/index.jsx" */
const Meal = lazy(()=> import("./Meal/index.jsx"))

/* import StudentSelfGoverment from "./Studentself-government/index.jsx"; */
const StudentSelfGoverment =lazy(()=> import("./Studentself-government/index.jsx"))

/* import Camps from "./Camps/index.jsx"; */
const Camps = lazy(()=> import("./Camps/index.jsx"))

import News from "./News/index.jsx"

/* import FreeTime from "./FreeTime/index.jsx"; */
const FreeTime = lazy(()=> import("./FreeTime/index.jsx"))

/* import Enrollment1 from "./Enrollment/Enrollment1/index.jsx"; */
const Enrollment1 =lazy(()=> import("./Enrollment/Enrollment1/index.jsx"))

/* import Enrollment5 from "./Enrollment/Enrolment5/index.jsx"; */
const Enrollment5 =lazy(()=> import("./Enrollment/Enrolment5/index.jsx"))

/* import Enrollment10 from "./Enrollment/Enrolment10/index.jsx"; */
const Enrollment10 =lazy(()=> import("./Enrollment/Enrolment10/index.jsx"))

/* import Infrastructure from "./Infrastructure/index.jsx"; */
const Infrastructure = lazy(()=> import("./Infrastructure/index.jsx"))

/* import Graduated from "./Graduated/index.jsx"; */
const Graduated = lazy(()=> import("./Graduated/index.jsx"))

/* import HistoryOfliceo from "./HistoryOfLiceo/index.jsx"; */
const HistoryOfliceo = lazy(()=> import("./HistoryOfLiceo/index.jsx"))

/* import Vacancy from "./Vacancy/index.jsx"; */
const Vacancy = lazy(()=> import("./Vacancy/index.jsx"))

/* import TeachingStaff from "./TeachingStaff/index.jsx"; */
const TeachingStaff = lazy(()=> import("./TeachingStaff/index.jsx"))
import Projects from "./Projects/index.jsx";

import OneProject from "./OneProject/index.jsx";
function App() {
 
  return (
    <>
    <Header />
    
    <Routes>
      
          
    <Route path='/OneProject' element={<OneProject/>}></Route>
            <Route path="/" element={<Main/>}/>
            <Route path="/Privacy" element={<Suspense><Privacy/></Suspense>}/>
            
            <Route path="/PublikInfo" element={<Suspense><PublikInfo/></Suspense>}/>
            <Route path="/Contact" element={<Contact1/>}/>

            <Route path="/News" element= {<News/>} />
            <Route path="/Shedule" element={<Shedule/>}/>
            <Route path="/FullTimeSchool" element={<Suspense><FullTimeSchool/></Suspense>}/>
            <Route path="/Meal" element={<Suspense><Meal/></Suspense>}/>
            
            <Route path="/QualityEducation" element={<Suspense fallback={<p>Loading...</p>}><QualityEducation/></Suspense>}/>
            <Route path="/StudyOrganization" element={<Organization/>}/>
            <Route path="/anti-bullying" element={<Suspense><Bulling/></Suspense>}/>

            <Route path="*" element={<Errore />} />
            

            <Route path="/freeTime" element={<FreeTime/>}/>
            <Route path="/StudentSelfGoverment" element={<Suspense fallback={<p>Loading...</p>}><StudentSelfGoverment/></Suspense>}/>
            <Route path="/Camps" element={<Suspense fallback={<p>Loading...</p>}><Camps/></Suspense>}>

            </Route>
            <Route path="/Projects" element={<Projects/>}></Route>

            

            <Route path="/Ennrolment1" element={ <Suspense fallback={<p>Loading...</p>}><Enrollment1/></Suspense>}/>
            <Route path="/Ennrolment5" element={ <Suspense fallback={<p>Loading...</p>}><Enrollment5/></Suspense>}/>
            <Route path="/Ennrolment10" element={ <Suspense fallback={<p>Loading...</p>}><Enrollment10/></Suspense>}/>

            <Route path="/infrastructure" element={<Suspense><Infrastructure/></Suspense>}/>
            <Route path="/Graduated" element={<Suspense><Graduated/></Suspense>}/>
            <Route path="/HistoryOfliceo" element={<Suspense><HistoryOfliceo/></Suspense>}/>
            <Route path="/Vacancy" element={<Suspense><Vacancy/></Suspense>}/>
            <Route path="/TeachingStaff" element={<Suspense><TeachingStaff/></Suspense>}/>
            
    </Routes>
    <Footer />
    </>
    
  );
}

export default App
