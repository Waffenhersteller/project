import Style from "./Main.module.css"
import BackGround from "./assets/BackgroundPhoto1.webp"
import filter from "./assets/Darkeninglayer.png"
import Contact from "../Contacts/Contact"
import line from './assets/line.svg'
import darklayer from '../../src/Main/assets/Darkeninglayer.png'
import whiteLine from './assets/DividingWhiteLine.svg'
import conteiner from './assets/container.png'
import conteiner1 from './assets/container1.png'
import conteiner2 from './assets/container2.png'
import conteiner3 from './assets/container3.png'
import conteiner4 from './assets/container4.png'

import ArrowRight from '../../src/AllAssets/ArrowDown.svg'
import vector from './assets/Vector.svg'
import vector1 from './assets/Vector1.svg'
import vector2 from './assets/Vector2.svg'
import vector3 from './assets/Vector3.svg'
import fingerPrint from './assets/fingerPrint.svg'

import respect from './assets/respect.svg'
import responsability from './assets/responsibility.svg'
import flag from './assets/flag.svg'
import equality from './assets/equality.svg'
import justice from './assets/justice.svg'

import { Link, json } from 'react-router-dom';
import React,{useState, useEffect } from "react"

import Card from './../News/card/index.jsx'
import jsonData from './../News/news.json';



function Main(){
   
    let counter = 0
    
    const [pageIndex, setPageIndex] = useState(0)
    const [selectedChip, setSelectedChip] = useState(null)
    const screenWidth = window.innerWidth
    let itemsPerPage = 3

    if (screenWidth <= 430) {
        itemsPerPage = 1
    }

    const startIndex = pageIndex * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, jsonData.length)

    // Function to handle next page navigation
    const nextPage = () => {
        setPageIndex(pageIndex + 1)
    }

    // Function to handle previous page navigation
    const prevPage = () => {
        setPageIndex(pageIndex - 1)
    }
    
    return(
        <main>
            
            <div className={Style.banner}>
                <img className={Style.BannerMainImg} src={BackGround} alt="" />
                <div className={Style.bannerContent}>
                    <h1>Ліцей Оріяна</h1>
                <img src={whiteLine} alt="" />
                    <p>Навчаємося для життя</p>
                </div>

                </div>



            <div className={Style.news}>

                <div className={Style.newsTitle}>
                    <div className={Style.title}>
                        
                        <h2>Останні новини</h2>
                        <div className={Style.buttons}>
                            <div id='leftButton' className={Style.arrowleft} onClick={prevPage}><img src={ArrowRight} alt="ArrowRight" /></div>
                            <div id='rightButton' className={Style.arrowRight} onClick={nextPage}><img src={ArrowRight} alt="ArrowRight" /></div>
                        </div>
                    </div>
                    <img className={Style.line} src={line} alt="" />
                </div>

                <div className={Style.newsContent}>
                
                    {jsonData.slice(startIndex, endIndex).map((item, index) => (
                        
                         <Card 
                            key={index}
                            img={item.img}
                            topic={item.topic}
                            about={item.about}
                            data={item.data}
                            class={item.class}
                            counter={++counter}
                            selectedChip={selectedChip}
                        />
                        
                    ))}
                   
                    
                </div>
                <div className={Style.newsButton}><Link to="/News"><button >Всі новини</button></Link></div>
            </div>
















            <div className={Style.value}>
                <div className={Style.topValue}>


                <div className={Style.leftSideValue}>
                    <h2>Ліцей Оріяна — це:</h2>

                   
                        <div className={Style.vectors}><img src={vector} alt="" />
                        <p>простір можливостей для розвитку, в якому чути голос кожного;</p>
                        </div>

                        <div className={Style.vectors}><img src={vector1} alt="" />
                        <p>платформа для навчання, креативу, дослідження, експериментів;</p>
                        </div>
                        <div className={Style.vectors}><img src={vector2} alt="" />
                        <p>територія довіри та партнерства учнів, вчителів і батьків;</p>
                        </div>

                        <div className={Style.vectors}><img src={vector3} alt="" />
                        <p>майданчик творчості для вчителів, які формують індивідуальну освітню траєкторію учнів і втілюють свої ідеї; розвитку для учнів; впевненості для батьків.</p>
                        </div>


                </div>


                    <div className={Style.rightSideValue1}>
                        
                        <h2>Наша місія</h2>
                        <p>Створити якісне, безпечне середовище, що є простором для розвитку вільної, цілісної особистості з активною громадянською позицією, здатною досягати мети, вирішувати проблеми, сформованою на засадах партнерства.</p>
                        
                        <img src={fingerPrint} alt="" />
                    </div>
                </div>
                <div className={Style.bottomValue}>
                <div className={Style.bottomValue2}>

                    <h2>Наші цінності</h2>

                    <div className={Style.bottomValueRightSide}>
                        <div className={Style.bottomValueConteiner}>
                            <img src={respect} alt="" />
                            <p>Повага до себе та інших, гідність</p>
                        </div>


                        <div className={Style.bottomValueConteiner}>
                            <img src={responsability} alt="" />
                            <p>Відповідальність </p>
                        </div>

                        <div className={Style.bottomValueConteiner}>
                            <img src={flag} alt="" />
                            <p>Громадянська активність</p>
                        </div>
                        <div className={Style.bottomValueConteiner}>
                            <img src={equality} alt="" />
                            <p>Рівність</p>
                        </div>

                        <div className={Style.bottomValueConteiner}>
                            <img src={justice} alt="" />
                            <p>Справедливість</p>
                        </div>


                    </div>
                </div>
                </div>
                </div>



            <div className={Style.infrostructure}>
                <div>
                    <h2>Інфраструктура ліцею</h2>
                    <img className={Style.infrostructureHeader} src={line} />
                </div>


                <div className={Style.infrostructureContent}>


                    <div className={Style.conteiner}>
    <div className={Style.darklayer}>
        <img src={darklayer} alt="" />
        <div className={Style.content}>
            <h3>Спортивний зал</h3>
            <p>Спеціально обладнане приміщення площею 649 м² для занять фізкультурою</p>
        </div>
    </div>
    <img className={Style.conteinerImg} src={conteiner} alt="" />   
</div>

                    <div className={Style.conteiner1}><img src={conteiner4} alt="" /></div>
                    <div className={Style.conteiner2}><img src={conteiner2} alt="" /></div>
                    <div className={Style.conteiner3}><img src={conteiner3} alt="" /></div>
                    <div className={Style.conteiner4}><img src={conteiner1} alt="" /></div>
                </div>
                

<div className={Style.infrastructureButton}>
               <button to="/infrastructure"> <Link to="/infrastructure" >Дізнатися більше</Link></button>

               </div>

               </div>

            <Contact/>


        </main> 
    )
}








export default Main 