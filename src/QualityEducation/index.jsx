import React, { useEffect, useState } from 'react';
import Style from './index.module.css'



import plus from '../AllAssets/plus.svg'
import minus from '../AllAssets/minus.svg'
import Heading from '../Heading';
import link from '../AllAssets/link.svg'
import newTab from '../AllAssets/newtab.svg'

import { Accordion, AccordionItem } from '@szhsin/react-accordion';





    
    function QualityEducation(){

        const [plus1, setPlus1] = useState(true);
        const [plus2, setPlus2] = useState(true);
        const [plus3, setPlus3] = useState(true);
        const [plus4, setPlus4] = useState(true);
        const [plus5, setPlus5] = useState(true);


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
          else if(section === 'item4'){
            titElement = document.getElementById('tit4')
            setPlus4((prev) => !prev)
          }
          
          else if(section === 'item5')
          {
            titElement = document.getElementById('tit5')
            setPlus5((prev)=> !prev)
          }
          if (titElement) {
            const isActive = (section === 'item1' && !plus1) || (section === 'item2' && !plus2) || (section === 'item3' && !plus3) || (section === 'item4' && !plus4) || (section === 'item5' && !plus5);
            titElement.style.backgroundColor = isActive ? 'white' : '#D9E9EB';
            titElement.style.border = isActive ? '1px solid #9E9E9E' : '1px solid #1D7A85';
            titElement.style.borderBottom = isActive ? '1px solid #9E9E9E' : 'none';
            
            titElement.style.borderRadius = isActive ? '8px 8px 8px 8px' : '8px 8px 0px 0px';
          }
        };
        
        
          
          
        
          const title111 = (
            <div id="tit" className={`${Style.title} ${plus1 ? Style.active : ''}`} onClick={() => back('item1')}>
              <img src={plus1 ? plus : minus} alt="Toggle" />
              <p className={Style.topic}>Атестація</p>
            </div>
          );
        
          const title222 = (
            <div id="tit2" className={`${Style.title} ${plus2 ? Style.active : ''}`} onClick={() => back('item2')}>
              <img src={plus2 ? plus : minus} alt="Toggle" />
              <p className={Style.topic}>Сертифікація</p>
            </div>
          );
        
          const title333 = (
            <div id="tit3" className={`${Style.title} ${plus3 ? Style.active : ''}`} onClick={() => back('item3')}>
              <img src={plus3 ? plus : minus} alt="Toggle" />
              <p className={Style.topic}>Інституційний аудит</p>
            </div>
          );

          const title444 = (
            <div id="tit4" className={`${Style.title} ${plus4 ? Style.active : ''}`} onClick={() => back('item4')}>
              <img src={plus4 ? plus : minus} alt="Toggle" />
              <p className={Style.topic}>Внутрішня система забезпечення якості освіти</p>
            </div>
          );
       
    
    return(
        
        <div className={Style.qualityEducation }>
            <Heading massage="Забезпечення якості освіти"/>


    <Accordion allowMultiple>


      <AccordionItem   header={title111} onClick={back} style={{ marginTop: '16px' }} >
      <div className={Style.item}>
      <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Атестація - ДСЯОУ</p>

                        </div>
                        <img src={newTab}/>
                </div>

                    </div>
      </AccordionItem>



      <AccordionItem   header={title222} onClick={back} style={{ marginTop: '16px' }} >
      <div className={Style.item}>
      <p className={Style.main}>Сертифікація педагогічних працівників — це зовнішнє оцінювання професійних компетентностей педагогічного працівника, зокрема з педагогіки та психології, практичних вмінь застосування сучасних методів і технологій навчання.
<br></br><br></br>
Сертифікація педагогічного працівника відбувається на добровільних засадах виключно за його ініціативою.</p>
                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Орієнтовні вимоги до контролю та оцінювання навчальних досягнень учнів</p>

                        </div>
                        <img src={newTab}/>
                </div>
                    </div>
      </AccordionItem>

      <AccordionItem  header={title333} onClick={back} style={{ marginTop: '16px' }} >
      <div className={Style.item} >
            <p className={Style.main}>Інституційний аудит – це зовнішнє оцінювання роботи школи, під час якого незалежні експерти оцінюють освітні і управлінські процеси та дотримання закладом освіти вимог законодавства. Аудит є новою для України процедурою вивчення освітньої діяльності школи, яка прийшла на зміну державній атестації шкіл.</p>
            

            <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Звіт за результатами інституційних аудитів 2022 р. - ДСЯОУ</p>

                        </div>
                        <img src={newTab}/>
                </div>
      </div>
      </AccordionItem>
    


    <AccordionItem  header={title444} onClick={back} style={{ marginTop: '16px' }} >
      <div className={Style.item} >
                <p className={Style.main}>Згідно з документом, система забезпечення якісної освіти у школі повинна мати не лише зовнішні стимули (ЗНО, інституційний аудит, атестація та сертифікація педагогічних працівників тощо), а й внутрішні інструменти.
Процеси навчання та управління школою можуть якісно вдосконалюватися самою школою. Для цього необхідно мати:
<ul><li>стратегію забезпечення якості освіти;</li>
<li>необхідні ресурси для організації навчання, інклюзивне освітнє середовище;</li>
<li>прозору систему оцінювання учнів, педагогічних працівників і директора;</li>
<li>механізми забезпечення академічної доброчесності;</li>
<li>сучасну інформаційну систему управління школою.</li></ul>
Важливо також розвивати партнерство учнів і вчителів, забезпечувати рівність і протидіяти булінгу (цькуванню), допомагати учням реалізувати індивідуальну освітню траєкторію, створювати для вчителів умови для професійного зростання.</p>
                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Методичні рекомендації до побудови внутрішньої системи забезпечення якості освіти</p>

                        </div>
                        <img src={newTab}/>
                </div>
      </div>
      </AccordionItem>
    
    

    </Accordion>
        </div>
    );
}
export default QualityEducation