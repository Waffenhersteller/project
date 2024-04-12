import Style from "./header.module.css"
import Logo from "./assets/logo-colored.svg"
import Phone from "./assets/Phone.svg"
import Mail from "./assets/mail.svg"
import Arrow from '../AllAssets/ArrowDown.svg'
import Hamburger from "./assets/Hamburger.svg"
import close from '../AllAssets/plus.svg'

import { Link } from 'react-router-dom';
import { useState } from "react"



function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdown, setDropdown] = useState(false)
    function toggleMenu() {
        const screenWidth = window.innerWidth;
        if(screenWidth <= 430) {


            setIsMenuOpen(prevState => !prevState);
        const rightSideHeader = document.getElementById('rightSideHeader')
        rightSideHeader.style.display = isMenuOpen ? 'none': 'block'} 



    }

    function toggleDropdown() {
        const dropdown = document.getElementById('dropdowMenu')
        setDropdown(isDropdown => !isDropdown)
        dropdown.style.display = isDropdown ? 'none' : 'block'
    }


    const top = <div className={Style.top}> 
    <div className={Style.contacts}><img src={Phone}/> <p>(032) 222 04 62</p> </div>
    <div className={Style.contacts}><img src={Mail}/>  <p>oriyana@mail.lviv.ua</p>  </div>
</div>

   const top2 = <div className={Style.top2}> 
   <div className={Style.contacts}><img src={Phone}/> <p>(032) 222 04 62</p> </div>
   <div className={Style.contacts}><img src={Mail}/>  <p>oriyana@mail.lviv.ua</p>  </div>
</div>
return(
    <header>
        <div className="div">{top}</div>
        
        <div className={Style.bottom}>
            <div className={Style.logo}><Link to="/"><img src={Logo}></img></Link></div>

            <div className={Style.hamburger} onClick={toggleMenu}>
                {isMenuOpen ? (
                     <img src={close} style={{ transform: 'rotate(45deg)' }} alt="Close Icon" />
                ) : (
                    <img src={Hamburger}/>
                )}
            </div>
            



            <div id='rightSideHeader' className={Style.rightSideHeader}>


                    <div className={Style.hiddenTop}>{top2}</div>

                <div className={Style.dropdown} >
                    <div id='dropdowMenu' className={Style.dropdowMenu}>
                <button className={Style.topic}>Про ліцей</button>
                <img src={Arrow}></img>
                </div>
                <div className={Style.content}>
                    <Link   onClick={toggleMenu} to="/News">Новини</Link>
                    <Link onClick={toggleMenu} to="/HistoryOfliceo">Історія</Link>
                    <Link onClick={toggleMenu} to="/TeachingStaff">Педагогічний колектив</Link>
                    <Link onClick={toggleMenu} to="/Vacancy">Вакансії</Link>
                    <Link onClick={toggleMenu} to="/Graduated">Випускники</Link>
                    <Link onClick={toggleMenu} to="/infrastructure">Інфраструктура ліцею</Link>
                </div>
                </div>



                <div className={Style.dropdown}>
                <div className={Style.dropdowMenu}>
                <button className={Style.topic}>Вступ</button>
                <img src={Arrow}></img>
                </div>
                <div className={Style.content}>
                    <Link onClick={toggleMenu} to="/Ennrolment1">Набір у 1 клас</Link>
                    <Link onClick={toggleMenu} to="/Ennrolment5">Набір у 5 клас</Link>
                    <Link onClick={toggleMenu} to="/Ennrolment10">Набір у 10 клас</Link>
                    
                </div>

                </div>

                <div className={Style.dropdown}>
                <div className={Style.dropdowMenu}>
                <button className={Style.topic}>Освітній процес</button>
                <img src={Arrow}></img>
                </div>
                <div className={Style.content}>
                    <Link onClick={toggleMenu} to="/StudyOrganization">Організація навчання </Link>
                    <Link onClick={toggleMenu} to="/anti-bullying">Протидія булінгу</Link>
                    <Link onClick={toggleMenu} to="/QualityEducation">Забезпечення якості освіти</Link>
                    
                </div>
                </div>



                <div className={Style.dropdown}>
                <div className={Style.dropdowMenu}>
                <button className={Style.topic}>Для батьків</button>
                <img src={Arrow}></img>
                </div>
                <div className={Style.content}>
                    <Link onClick={toggleMenu} to="/Shedule">Розклад занять</Link>
                    <Link onClick={toggleMenu} to="/FullTimeSchool">Школа повного дня</Link>
                    <Link onClick={toggleMenu} to="/Meal">Харчування</Link>
                   
                </div>
                </div>




                <div className={Style.dropdown}>
                <div className={Style.dropdowMenu}>
                <button className={Style.topic}>Для дітей</button>
                <img src={Arrow}></img>
                </div>
                <div className={Style.content}>
                    <Link onClick={toggleMenu} to="/StudentSelfGoverment">Учнівське самоврядування</Link>
                    <Link onClick={toggleMenu} to="/freeTime">Дозвілля</Link>
                    <Link onClick={toggleMenu} to="/Projects">Проєкти</Link>
                    <Link onClick={toggleMenu} to="/Camps">Табори</Link>
                    
                </div>
                </div>


                <div className={Style.topic}><Link onClick={toggleMenu} to="/PublikInfo">Публічна інформація</Link></div>
                <div className={Style.topic}><Link onClick={toggleMenu} to="/Contact">Контакти</Link></div>

                
            </div>

            
            
        </div>

        
    </header>
    );
}




export default Header 