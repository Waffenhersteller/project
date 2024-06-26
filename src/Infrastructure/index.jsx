import Style from "./index.module.css"
import Heading from '../Heading'
import line from '../../src/AllAssets/line.svg'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
function Infrastructure(){
    return(
        <div className={Style.infrastructure}>
            <Heading massage="Інфраструктура ліцею"/>

            <div className="">
                <h2>Спортивний зал</h2>
                <img src={line} className={Style.line}/>
            </div>
            <div className={Style.conteiner1}>
            <p>Просторий мультифункціональний спортивний зал площею 649 м² з професійним спортивним обладнанням, стінкою для скелелазіння та комфортною трибуною для вболівальників дозволяє займатися усіма командними видами спорту, легкою атлетикою, аеробікою, шейпінгом, йогою, гімнастикою та скелелазінням. А професійне покриття та правильна амортизація підлоги дозволяють уникнути зайвого навантаження на дитячі суглоби під час тренувань та зберігає їх здоровими.</p>
            <img src={img1}/>
            </div>


            <div className={Style.conteiner2}>
            <div className="">
                <h2>Бібліотека</h2>
                <img src={line} className={Style.line}/>
            </div>

            <p>У нашій шкільній бібліотеці учні із задоволенням читають, адже тут є:</p>
            <ul>
                <li>підручники;</li>
                <li>навчальна література;</li>
                <li>класична художня література;</li>
                <li>новинки сучасної дитячої літератури;</li>
                <li>наукова та науково-популярна література;</li>
                <li>англомовні книжки;</li>
                <li>сучасна українська та іноземна художня література;</li>
                <li>зустрічі з письменниками;</li>
                <li>неповторна атмосфера любові до знань.</li></ul>


                <img src={img2}  className={Style.img2}/>
            </div>

            <div className={Style.conteiner3}>
            <div className="">
                <h2>Їдальня</h2>
                <img src={line} className={Style.line}/>
            </div>
            <p>Харчування — за правом одне з основних побутових питань, які цікавлять батьків, адже від його якості залежить здоров’я та розвиток дитини. Ми підійшли до нього з особливою ретельністю і, як результат, можемо гарантувати наступне:</p>
<ul> <li>професійного шеф-кухаря, яка має багаторічний досвід роботи в найкращих ресторанах країни та спеціалізується саме на дитячому харчуванні;</li>
<li>кухню, обладнану за останнім словом техніки та відповідно до всіх санітарних норм;</li>
<li>винятково екологічно чисті продукти;</li>
<li>корисні та смачні страви, збалансовані з урахуванням вікових особливостей;</li>
<li>опції для дітей із особливими потребами щодо харчування;</li>
<li>у вартість навчання закладено повноцінний обід;</li>
<li>у разі потреби можна також замовити сніданки та підвечірки;</li>
<li>за харчуванням кожного учня, особливо у молодшій школі, слідкуватимуть учителі.</li>
</ul>
<img src={img3} className={Style.img3} />
<img src={img4} className={Style.img3} />
<img src={img5} className={Style.img4} />
            </div>

            <div className={Style.conteiner2}>
            <div className="">
                <h2>Матеріально-технічна база</h2>
                <img src={line} className={Style.line}/>
            </div>
                <p>Навчальні приміщення:</p>
                <ul>
                <li>класні кімнати початкових класів – 13;</li>
                <li>приміщення для ГПД – 2;</li>
                <li>великі спортивні зали – 2;</li>
                <li>малий спортивний зал – 1.</li>
                </ul>

                <p>40 навчальних кабінетів для 5-11 класів:</p>
                <ul>
                    <li>української мови та зарубіжної літератури – 8;</li>
                    <li>математики, інформатики – 7;</li>
                    <li>історії, правознавства – 3;</li>
                    <li>фізики – 2;</li>
                    <li>хімії, біології – 3;</li>
                    <li>географії та економіки-2;</li>
                    <li>іноземної мови – 7;</li>
                    <li>хореографії, образотворчого мистецтва , музики, християнської етики – по 1;</li>
                    <li>навчальні майстерні з праці – 4.української мови та зарубіжної літератури – 8;</li>
                    
                </ul>
                <p>Технічні засоби навчання:</p>

                <ul><li>комп’ютер – 34;</li>
                <li>ноутбук – 3;</li>
                <li>проектор мультимедійний – 4;</li>
                <li>принтер “Epson”- 1;</li>
                <li>принтер “Canon”- 4;</li>
                <li>принтер-копір-сканер – 7;</li>
                <li>копіювальний апарат – 4;</li>
                <li>телевізор – 12;</li>
                <li>діапроектор – 3;</li>
                <li>графопроектор – 4;</li>
                <li>кінопроектор – 1.</li>


                </ul>
            </div>




        </div>


    );
}


export default Infrastructure