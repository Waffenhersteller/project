import Style from './Footer.module.css'
import logo from './assets/Logo.svg'
import Mail from './assets/Mail.svg';
import MapPoint from './assets/MapPoint.svg'
import Phone from './assets/Phone.svg'
import Smartphone from './/assets/Smartphone.svg'
import Facebook from './assets/Facebook.svg'
import Instagram from './assets/Instagram.svg'
import Telegram from './assets/Telegram.svg'
import { Link } from 'react-router-dom';

function Footer(){
    
    return(
        <div className={Style.footer}>
            



            <div className={Style.topSidefooter}>           
            <div className={Style.leftSidefooter}><img className="logo-white" src={logo} alt="logo"></img></div>

            <div className={Style.rightSidefooter}>

                <div className={Style.socialMedia}> 
                    <p>Приєднуйтеся до нас:</p> 
                    <img src={Facebook}></img>
                    <img src={Instagram}></img>
                    <img src={Telegram}></img>                                      
                    </div>

                <div className={Style.contacts}>
                    <div className={Style.contact}> <img src={Mail}></img> <p>oriyana@mail.lviv.ua</p></div>
                    <div className={Style.contact}><img src={MapPoint}></img><p>м. Львів, вул. Чукаріна, 3</p></div>
                    <div className={Style.contact}><img src={Smartphone}></img><p>(032) 222 04 62</p></div>
                    <div className={Style.contact}><img src={Phone}></img><p>222 41 05</p></div>
                    </div>
            
                <div className={Style.creditCard}>
                    <p className={Style.crediCardInfo}>Реквізити ГО «ОріянаХаб» для внесення благодійних коштів на рахунок закладу:</p>
                    <p>ЄДРПОУ 44719940р/р <br></br>
                    UA313052990000026003041017740<br></br>
                    в АТ КБ «ПРИВАТБАНК»МФО 305299</p>
            
                </div>

            
            </div> 
            
            </div> 
            

            <div className={Style.bottomSidefooter}> 
            
            <hr></hr>
            <div className={Style.policy}>
            <p> &#169; 2023 Ліцей “Оріяна”</p> <svg width="2" height="24" viewBox="0 0 2 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1" y1="2.18557e-08" x2="0.999999" y2="24" stroke="#ACCFD3"/>
            </svg>
                <Link to="/Privacy">Політика конфіденційності</Link>
            
            </div>
            
            
            
            
            
            </div>
            
                
                
            

            
            




        </div>












    ); 
}


export default Footer