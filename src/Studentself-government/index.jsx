import Style from "./index.module.css"
import Heading from "../Heading";

import Telegram from "../AllAssets/TelegramIcon.svg"
import Instagram from "../AllAssets/InstagramIcon.svg"
import Facebook from "../AllAssets/FacebookIcon.svg"


import line from "./assets/line.svg"
import bottomImg from './assets/image6.png'
import fingerPrtinStroke from './assets/fingerprint1.svg'
import fingerPrint from "./assets/fingerPrint.svg"
import first from './assets/first.svg'
import middle from './assets/image7.png'
import topimg from './assets/image5.png'
import second from './assets/second.svg'
import third from './assets/third.svg'
import fourth from './assets/fourth.svg'

import arrowline from './assets/arrowline.svg'

import president from './assets/president.png'

import primeMinister from './assets/primeMinister.png'
import line2 from './assets/line2.svg'
import informationMinister from './assets/informationMinister.png'
import cultureMinister from './assets/cultureMinister.png'
import ecologyMinister from './assets/ecologyMinister.png'
import educationMinister from './assets/educationMinister.png'
import sportMinister from './assets/sportMinister.png'
import rays from './assets/Rays.svg'
import judiceMinister from './assets/judiceMinister.png'
function StudentSelfGoverment(){
    return(
        <div>
            <Heading massage="Учнівське самоврядування"/>
        
        
            <div className={Style.purpose}>
            <div className={Style.leftSide}>
            <div className={Style.purposeLeftSide}>
                <h2>Мета роботи учнівського <br></br>самоврядування</h2>
                <p>Школа - це місце, де ми вперше починаємо соціалізуватися, переживаємо перші злети і падіння, відчуваємо найрізноманітніші почуття та емоції. Тож мета УС - допомагати учням розкриватися та шукати себе.</p>
            </div>
            <div className={Style.leftSideImg}> <img src={rays} alt="" /></div>
            </div>
               
                <div className={Style.purposeRightSide}>
                    <img src={topimg} alt="" />

                </div>
            </div>
        








            <div className={Style.structure}>
                <div >
                    <h2>Структура учнівського самоврядування</h2>
                    <img  className={Style.line2} src={line} />
                </div>

                <div>
                    <div className={Style.profiles}>
                        <img src={president} alt="" />
                        <div>
                            <p className={Style.mainText}>Президент</p>
                            <p  className={Style.name}>Ліля Осадко</p>
                        </div>
                    </div>
                </div>
                <div className=""><img src={arrowline}/></div>
                <div>
                    <div className={Style.profiles}>
                        <img src={primeMinister} alt="" />
                        <div>
                            <p className={Style.mainText}>Премʼєр-міністр</p>
                            <p  className={Style.name}>Боднар Софія</p>
                        </div>
                    </div>
                </div>
                <div className=""><img src={arrowline}/></div>

                <div className={Style.ministry}> 


                    <div className={Style.row}>
                    <div className={Style.profiles}>
                        <img src={educationMinister} alt="" />
                        <div>
                            <p className={Style.mainText}>Міністерство освіти</p>
                            <p  className={Style.name}>Козій Тарас</p>
                        </div>
                    </div>
                

                    <div className={Style.profiles}>
                        <img src={judiceMinister} alt="" />
                        <div>
                            <p className={Style.mainText}>Міністерство юстиції</p>
                            <p  className={Style.name}>Дриль Віра</p>
                        </div>
                    </div>

                    <div className={Style.profiles}>
                        <img src={sportMinister} alt="" />
                        <div>
                            <p className={Style.mainText}>Міністерство спорту</p>
                            <p  className={Style.name}>Клебан Артур</p>
                        </div>
                    </div>

                    </div>

                    <div  className={Style.row}>
                    <div className={Style.profiles}>
                        <img src={ecologyMinister} alt="" />
                        <div>
                            <p className={Style.mainText}>Міністерство екології</p>
                            <p  className={Style.name}>Лотоцька Анна</p>
                        </div>
                    </div>

                    
                    <div className={Style.profiles}>
                        <img src={cultureMinister} alt="" />
                        <div>
                            <p className={Style.mainText}>Міністерство культури</p>
                            <p  className={Style.name}>Гуга Анна</p>
                        </div>
                    </div>

                    
                    <div className={Style.profiles}>
                        <img src={informationMinister} alt="" />
                        <div>
                            <p className={Style.mainText}>Міністерство інформації</p>
                            <p  className={Style.name}>Комислива Юлія</p>
                        </div>
                    </div>
                    </div>
                </div>




            </div>




            <div className={Style.appointement}>
                <div className={Style.appointementContent}>
                    <div className={Style.appointementHeading}>
                    <h2>Завдання учнівського самоврядування</h2>
                    <img src={line2}/>
                    </div>
                    <ul>
                        <li>Залучення учнів до прийняття рішень на рівні школи</li>
                        <li>Створення умов та можливостей для самореалізації учнів</li>
                        <li>Створення та реалізація проектів учнів</li>
                        <li>Реалізація інтересів учнів</li>
                    </ul>
                </div>
                <img src={middle}/>




            </div>

            <div className={Style.teamDuty}>
                <div>
                <h2>Обовʼязки команди</h2>
                <img src={line} className={Style.line3} />
                </div>
                <div className={Style.boxes}>
                <div className={Style.box}>
                    <div className={Style.fingerPrintCSS}>
                    <img src={fingerPrtinStroke}/>
                    </div>

                    <div className={Style.boxContent}>
                        <img src={first} alt="" />
                        <h3>Відвідування засідань УПСР</h3>

                    </div>

                </div>


                <div className={Style.box}>
                    <div className={Style.fingerPrintCSS}>
                    <img src={fingerPrtinStroke}/>
                    </div>

                    <div className={Style.boxContent}>
                        <img src={second} alt="" />
                        <h3>Комунікація та співпраця зі школами району</h3>

                    </div>

                </div>


                <div className={Style.box}>
                    <div className={Style.fingerPrintCSS}>
                    <img src={fingerPrtinStroke}/>
                    </div>

                    <div className={Style.boxContent}>
                        <img src={third} alt="" />
                        <h3>Проведення заходів від парламенту району та міста</h3>

                    </div>

                </div>


                <div className={Style.box}>
                    <div className={Style.fingerPrintCSS}>
                    <img src={fingerPrtinStroke}/>
                    </div>

                    <div className={Style.boxContent}>
                        <img src={fourth} alt="" />
                        <h3>Участь у засіданнях педради закладу</h3>

                    </div>

                </div>

                </div>
               

                




            </div>

            <div className={Style.bottomSide}>

                <div className={Style.bottomSideLeftPicture}><img src={fingerPrint}/></div>

                
                <div className={Style.bottomContent}>

                <img className={Style.picture}src={bottomImg}/>

                <div className={Style.bottomContentTEXT}>
                    <h2>Долучайся до нас</h2>
                    <img src={line2} />
                    <p>Хочеш брати участь у реалізації проєктів на благо школи і суспільства? Стань частиною нашої команди учнівського самоврядування! Дізнавайся більше у соцмережах:</p>
                    <div className={Style.Icons}>
                        <img src={Facebook}/>
                        <img src={Instagram}/>
                        <img src={Telegram}/>
                    </div>
                    </div>
                </div>
                
                

            
                



            </div>

        </div>
    );
}




export default StudentSelfGoverment