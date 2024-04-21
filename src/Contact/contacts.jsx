import Style from "./index.module.css"
import Heading from '../Heading';
import line from "./assets/line.svg"
import MapPoint from "./assets/MapPoint.svg"
import clock from "./assets/Clock.svg"
import phone from './assets/Phone.svg'
import mail from './assets/Mail.svg'


import telegram from "../AllAssets/TelegramIcon.svg"
import instagram from "../AllAssets/InstagramIcon.svg"
import facebook from "../AllAssets/FacebookIcon.svg"



import map from "./assets/map.png"
import React, { useState, useEffect } from 'react';
import Contact1 from "../Contacts/Contact";
function Contact(){
    return(
        <div className={Style.contact1}>
            <Heading massage="Контакти"/>
            

            <div className={Style.info}>

                <div className={Style.sections}>
                    <h2>Як нас знайти?</h2>
                    <img src={line}></img>
                    <div className={Style.topic}><img src={MapPoint}></img> <h3>Адреса</h3></div>
                    <p>м. Львів, вул. Чукаріна, 3</p>
                    <div className={Style.topic}><img src={mail}></img> <h3>Електронна пошта</h3></div>
                    <p>oriyana@mail.lviv.ua</p>
                    <div className={Style.social}>

                        <h3>Ми у соцмережах</h3>
                            <div className={Style.socials}>
                                <img src={facebook}></img>
                                <img src={instagram}></img>
                                <img src={telegram}></img>
                            </div>
                    </div>
                </div>

                <div className={Style.sections}>
                    <h2>Адміністрація</h2>
                    <img  src={line}></img>

                    <div className={Style.topic}><img src={clock}></img> <h3>Години роботи</h3></div>
                    <p>Пн - Пт 09:00 – 18:00</p>
                    <p>Сб - Нд вихідні</p>
                    <div className={Style.topic}><img src={phone}></img> <h3>Телефони</h3></div>
                    <p>(032) 222 04 62</p>
                    <p>222 41 05</p>
                </div>

                <div className={Style.sections}>
                    <h2>Приймальня</h2>
                    <img src={line}></img>



                    <div className={Style.topic}><img src={clock}></img> <h3>Години роботи</h3></div>
                    <p>Пн - Пт 09:00 – 18:00</p>
                    <p>Сб - Нд вихідні</p>
                    <div className={Style.topic}><img src={phone}></img> <h3>Телефони</h3></div>
                    <p>(032) 222 04 62</p>
                    <p>222 41 05</p>


                </div>


                
            </div>


            <div className={Style.Maps}>
                <div className={Style.leftSide}>
                    <h3>Реквізити ГО “ОріянаХаб”</h3>
                    <p>Наші проєкти спрямовані на розвиток громади та втілення важливих соціальних ініціатив. Підтримайте активну молодь своїм внеском:</p>
                    <h2>ЄДРПОУ 44719940р/р<br></br>
                        UA313052990000026003041017740<br></br>
                        в АТ КБ «ПРИВАТБАНК» МФО 305299</h2>



                </div>
                <div className={Style.rightSide}> <a href="https://maps.app.goo.gl/u6txAmtV8YrLzHe66" target="_blank"><img src={map}/></a></div>

                
            </div>
  
  

            <Contact1/>
            






        </div>

    );
}




export default Contact