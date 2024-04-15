import Style from './index.module.css'
import line from '../../src/AllAssets/line.svg'
import link from '../../src/AllAssets/link.svg'
import newTab from '../../src/AllAssets/newTab.svg'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import Heading from '../Heading'
function Camps(){
    return(
        <div className={Style.camps}>
            <Heading massage='Табори'/>
            
        <div className={Style.firstBlock}>
        <div className={Style.text}>
            <h2>Табір з вивчення англійської мови у Фінляндії</h2>
            <img src={line} className={Style.line}/>
            


            <p>Триває набір на 29.07 - 12.08.2023 р. до Освітнього табору для школярів у Фінляндії, з вивчення англійської мови, на базі Західно-Фінляндського Коледжу. Проект реалізується за підтримки мерії м. Гуйттінен та україно-польської фундації «IIASC».</p>
<ul><li>Для дітей від 7 до 17 років</li>
<li>Тривалість: 9 днів</li>
<li>Виїзд: з м. Львів- Вартість: 475 євро</li>

 <p>Програма покриває:</p>

<li>проживання 6 ночей у двомісних та трьохмісних номерах в кампусі коледжу;</li>
<li>навчальну програму з англійської мови - 20 ак. год із носіями мови (сертифікат від Коледжу у разі успішного проходження курсу);</li>
<li>трьохразове харчування з понеділка до пятниці (харчування відбувається у їдальні коледжу);</li>
<li>освітньо-розважальні та інтеграційні заходи для пізнання культури Скандинавії;</li>
<li>ознайомчі прогулянки містами: Хельсінкі, Турку та Талліні (Естонія);</li>
<li>вартість квитків на паром Таллін-Гельсінкі та Гельсінкі-Таллін;</li>
<li>проїзд автобусом євро-класу за маршрутом Львів – Гуйттінен – Львів;</li>
<li>супровід координаторів, вчителів та тренерів.</li></ul>
</div>
<div className={Style.blocks}>
<div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Реєстрація на табір у Фінляндії</p>

                        </div>
                        <img src={newTab}/>
                </div>
                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Програма табору у Фінляндії</p>

                        </div>
                        <img src={newTab}/>
                </div>
                </div>
            <img src={img1} className={Style.mainImg}/>
            </div>




            <div className={Style.secondblock}>
            <div className={Style.text}>
            <h2>Літній табір у Карпатах</h2>
            <img src={line}  className={Style.line}/>
            
           <ul>
            <li>I зміна 29 червня – 9 липня</li>
            <li>II зміна 11 липня – 21 липня</li>
            <p>Сучасна локація в Яблуниці, Івано- Франківської області – готельний комплекс МАНХЕТТЕН, який зачаровує своїм видом на гори Петрос і Говерлу (6 км від Буковелі)
Вартість десятиденної гри: 22 000 грн (все включено)
У вартість Літнього кемпу входять:</p>
<li>Трансфер комфортабельним автобусом Київ – с.Яблуниця, Івано-Франківська область</li>
<li>Супровід джедаїв в поїздці</li>
<li>Проживання в комфортабельному тримісному номері</li>
<li>Триразове харчування + чаювання від ҐЕҐа</li>
<li>Екскурсії</li>
<li>Подарунки кожному кемперу</li>
<li>Супровід досвідченого медичного працівника</li>
</ul>
</div>
<div className={Style.blocks}>
<div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Реєстрація на літній табір</p>
                            <img src={newTab}/>
                        </div>
                        
                </div>
                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Програма літнього табору</p>
                            <img src={newTab}/>
                        </div>
                        
                </div>
            
                <img src={img2} className={Style.mainImg} />
            </div>
            </div>
        </div>
    );
}


export default Camps