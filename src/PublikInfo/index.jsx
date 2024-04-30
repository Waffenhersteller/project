import React, { useEffect, useState } from 'react';
import Style from './index.module.css'


import plus from '../../src/AllAssets/plus.svg'
import minus from '../../src/AllAssets/minus.svg'
import Heading from '../Heading';

import Externalink from '../UI/Externalink';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';





    
    function PublikInfo(){

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

                    <Externalink type={2} content={"Кошторис 0611031 на 2023 рік"}/>
                    
                    <Externalink type={2} content={"Кошторис 0611021 на 2023 рік"}/>
                    
                    <p className={Style.topic1}>Фінансові звіти</p>
                    <Externalink type={2} content={"Звіт про фінансові результати за І квартал 2023 року"}/>
                    

                    <Externalink type={2} content={"Баланс на 1 квітня 2023 рік"}/>
                    
                    <Externalink type={2} content={"Баланс на 1 січня 2023 рік"}/>
                    
                    <p className={Style.topic1}>Публічні закупівлі</p>

                    <Externalink type={2} content={"Теплопостачання на 2023 рік"}/>
                    
                    <Externalink type={2} content={"Послуги з організації шкільного харчування на 2023 рік"}/>
                    
                    <Externalink type={2} content={"Електрична енергія з постачанням та передачею"}/>
                    
                    <Externalink type={2} content={"Послуги з організації шкільного харчування"}/>
                
                    </div>
      </AccordionItem>

      <AccordionItem   header={title222} onClick={back} style={{ marginTop: '16px' }} >
      <div className={Style.item}>
                    <Externalink type={2} content={"Звіт директорки І. Коропецької за 2022 рік"}/>
                
                    <Externalink type={2} content={"Звіт директора про роботу закладу у 2019-2020 н.р."}/>
                    
                    <Externalink type={2} content={"Звіт учнівського самоврядування за 2019-2020 н.р."}/>
                   
                    </div>
      </AccordionItem>

      <AccordionItem  header={title333} onClick={back}  style={{ marginTop: '16px' }}>
      <div className={Style.item} >
      <Externalink type={2} content={"Статут ліцею “Оріяна”"}/>
                
                    <Externalink type={2} content={"Колективний договір між адміністрацією та профспілковими комітетами ліцею “Оріяна” на 2018 – 2020 роки"}/>
                    
                    <Externalink type={2} content={"План роботи ліцею “Оріяна” на 2019-2020 роки"}/>
                    
                </div>
      </AccordionItem>
    </Accordion>

        </div>
    );
}
export default PublikInfo