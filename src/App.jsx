import { Route, Routes} from "react-router-dom";

import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import React,{ useState, lazy, Suspense} from "react";




const Footer = lazy(()=> import("./Footer1/Footer.jsx"))
import Header from "./Header/header.jsx"

import Main from "./Main/Main.jsx"


const Contact1 = lazy(()=> import("./Contact/contacts.jsx"))

const Privacy = lazy(()=> import("./privacy/privacy.jsx"))

const Errore = lazy(()=> import("./error404/index.jsx"))

const PublikInfo = lazy(()=> import("./PublikInfo/index.jsx"))


const Organization = lazy(()=> import("./trainingOrganisation/index.jsx"))



const QualityEducation = lazy(()=> import("./QualityEducation/index.jsx"))


const Bulling = lazy(()=>import("./bulling/index.jsx"))

const Shedule = lazy(()=> import("./Shedule/index.jsx"))

const FullTimeSchool = lazy(()=> import("./FullDaySchool/index.jsx"))


const Meal = lazy(()=> import("./Meal/index.jsx"))


const StudentSelfGoverment =lazy(()=> import("./Studentself-government/index.jsx"))

const Camps = lazy(()=> import("./Camps/index.jsx"))

const News = lazy(()=> import("./News/index.jsx"))

const FreeTime = lazy(()=> import("./FreeTime/index.jsx"))


const Enrollment1 = lazy(()=> import("./Enrollment/Enrollment1/index.jsx"))


const Enrollment5 = lazy(()=> import("./Enrollment/Enrolment5/index.jsx"))


const Enrollment10 = lazy(()=> import("./Enrollment/Enrolment10/index.jsx"))


const Infrastructure = lazy(()=> import("./Infrastructure/index.jsx"))


const Graduated = lazy(()=> import("./Graduated/index.jsx"))


const HistoryOfliceo = lazy(()=> import("./HistoryOfLiceo/index.jsx"))


const Vacancy = lazy(()=> import("./Vacancy/index.jsx"))


const TeachingStaff = lazy(()=> import("./TeachingStaff/index.jsx"))

const Projects = lazy(()=> import("./Projects/index.jsx"))


const OneProject = lazy(()=> import("./OneProject/index.jsx"))

function App() {
 
  return (
    <>
    <Header />
    
    <Routes>
      
          
    <Route path='/OneProject' element={<Suspense><OneProject/></Suspense>}></Route>
            <Route path="/" element={<Main/>}/>

            <Route path="/Privacy" element={<Suspense><Privacy/></Suspense>}/>
            
            <Route path="/PublikInfo" element={<Suspense><PublikInfo/></Suspense>}/>
            <Route path="/Contact" element={<Suspense><Contact1/></Suspense>}/>

            <Route path="/News" element= {<Suspense><News/></Suspense>} />
          
            <Route path="/Shedule" element={<Suspense><Shedule/></Suspense>}/>

            <Route path="/FullTimeSchool" element={<Suspense><FullTimeSchool/></Suspense>}/>
            <Route path="/Meal" element={<Suspense><Meal/></Suspense>}/>
            
            <Route path="/QualityEducation" element={<Suspense fallback={<p>Loading...</p>}><QualityEducation/></Suspense>}/>
            <Route path="/StudyOrganization" element={<Suspense><Organization/></Suspense>}/>
            <Route path="/anti-bullying" element={<Suspense><Bulling/></Suspense>}/>

            <Route path="*" element={<Suspense><Errore /></Suspense>} />
            

            <Route path="/freeTime" element={<Suspense><FreeTime/></Suspense>}/>
            <Route path="/StudentSelfGoverment" element={<Suspense fallback={<p>Loading...</p>}><StudentSelfGoverment/></Suspense>}/>
            <Route path="/Camps" element={<Suspense fallback={<p>Loading...</p>}><Camps/></Suspense>}>

            </Route>
            <Route path="/Projects" element={<Suspense><Projects/></Suspense>}></Route>

            

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
