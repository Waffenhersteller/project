import React, { useEffect, useState } from 'react';
import Style from './index.module.css'

import download from './assets/download.svg'
import docs from './assets/docs.svg'
import plus from '../../src/AllAssets/plus.svg'
import minus from '../../src/AllAssets/minus.svg'
import Heading from '../Heading';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';





    
    function publikInfo(){

        const [plus1, setPlus1] = useState(true);
        const [plus2, setPlus2] = useState(true);
        const [plus3, setPlus3] = useState(true);
          
        const back = (section) => {
          let titElement;
        
          if (section === 'item1') {
            titElement = document.getElementById('tit');
            setPlus1((prev) => !prev);
          } else if (section === 'item2') {
            titElement = document.getElementById('tit2');
            setPlus2((prev) => !prev);
          } else if (section === 'item3') {
            titElement = document.getElementById('tit3');
            setPlus3((prev) => !prev);
          }
        
          if (titElement) {
            const isActive = (section === 'item1' && !plus1) || (section === 'item2' && !plus2) || (section === 'item3' && !plus3);
            titElement.style.backgroundColor = isActive ? 'white' : '#D9E9EB';
            titElement.style.border = isActive ? '1px solid #9E9E9E' : '1px solid #1D7A85';
            titElement.style.borderBottom = isActive ? '1px solid #9E9E9E' : 'none';
            
            titElement.style.borderRadius = isActive ? '8px 8px 8px 8px' : '8px 8px 0px 0px';
          }
        };
        
        
          
          
        
          const title111 = (
            <div id="tit" className={`${Style.title} ${plus1 ? Style.active : ''}`} onClick={() => back('item1')}>
              <img src={plus1 ? plus : minus} alt="Toggle" />
              <p className={Style.topic}>Фінансово-господарська діяльність</p>
            </div>
          );
        
          const title222 = (
            <div id="tit2" className={`${Style.title} ${plus2 ? Style.active : ''}`} onClick={() => back('item2')}>
              <img src={plus2 ? plus : minus} alt="Toggle" />
              <p className={Style.topic}>Щорічні звіти</p>
            </div>
          );
        
          const title333 = (
            <div id="tit3" className={`${Style.title} ${plus3 ? Style.active : ''}`} onClick={() => back('item3')}>
              <img src={plus3 ? plus : minus} alt="Toggle" />
              <p className={Style.topic}>Правові документи</p>
            </div>
          );
        
    
    return(
        
        <div className={Style.publikInfo}>
            <Heading massage="Публічна інформація"/>


    <Accordion allowMultiple>
      <AccordionItem   header={title111} onClick={back}  style={{ marginTop: '16px' }}>
      <div className={Style.item} >
     <p className={Style.topic1}>Кошториси</p>
                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Кошторис 0611031 на 2023 рік</p>

                        </div>
                        <img src={download}/>
                    </div>

                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Кошторис 0611021 на 2023 рік</p>

                        </div>
                        <img src={download}/>

                    </div>
                    <p className={Style.topic1}>Фінансові звіти</p>

                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Звіт про фінансові результати за І квартал 2023 року</p>

                        </div>
                        <img src={download}/>

                    </div>
                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Баланс на 1 квітня 2023 рік</p>

                        </div>
                        <img src={download}/>

                    </div>

                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Баланс на 1 січня 2023 рік</p>

                        </div>
                        <img src={download}/>

                    </div>
                    <p className={Style.topic1}>Публічні закупівлі</p>

                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Теплопостачання на 2023 рік</p>

                        </div>
                        <img src={download}/>

                    </div>

                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Послуги з організації шкільного харчування на 2023 рік</p>

                        </div>
                        <img src={download}/>

                    </div>

                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Електрична енергія з постачанням та передачею</p>

                        </div>
                        <img src={download}/>

                    </div>

                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Послуги з організації шкільного харчування</p>

                        </div>
                        <img src={download}/>

                    </div>
                    </div>
      </AccordionItem>

      <AccordionItem   header={title222} onClick={back} style={{ marginTop: '16px' }} >
      <div className={Style.item}>
        
                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Звіт директорки І. Коропецької за 2022 рік</p>

                        </div>
                        <img src={download}/>

                    </div>

                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Звіт директора про роботу закладу у 2019-2020 н.р.</p>

                        </div>
                        <img src={download}/>

                    </div>

                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Звіт учнівського самоврядування за 2019-2020 н.р.</p>

                        </div>
                        <img src={download}/>

                    

                    </div>
                    </div>
      </AccordionItem>

      <AccordionItem  header={title333} onClick={back}  style={{ marginTop: '16px' }}>
      <div className={Style.item} >
                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Статут ліцею “Оріяна”</p>

                        </div>
                        <img src={download}/>

                    </div>

                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>Колективний договір між адміністрацією та профспілковими комітетами ліцею <br></br>“Оріяна” на 2018 – 2020 роки</p>

                        </div>
                        <img src={download}/>

                    </div>

                    <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={docs}/>
                            <p>План роботи ліцею “Оріяна” на 2019-2020 роки</p>

                        </div>
                        <img src={download}/>

                    </div>
                </div>
      </AccordionItem>
    </Accordion>

        </div>
    );
}
export default publikInfo