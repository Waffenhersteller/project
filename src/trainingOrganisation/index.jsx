import React, { useEffect, useState } from 'react';
import Style from './index.module.css'

import download from '../AllAssets/Download.svg'
import word from '../AllAssets/Word.svg'

import plus from '../AllAssets/plus.svg'

import minus from './assets/minus.svg'
import Heading from '../Heading';
import link from '../AllAssets/Link.svg'
import newTab from '../AllAssets/newtab.svg'
import pdf from '../AllAssets/PDF.svg'

import { Accordion, AccordionItem } from '@szhsin/react-accordion';





    
    function PublikInfo(){

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
              <p className={Style.topic}>Структура навчального року</p>
            </div>
          );
        
          const title222 = (
            <div id="tit2" className={`${Style.title} ${plus2 ? Style.active : ''}`} onClick={() => back('item2')}>
              <img src={plus2 ? plus : minus} alt="Toggle" />
              <p className={Style.topic}>Критерії оцінювання</p>
            </div>
          );
        
          const title333 = (
            <div id="tit3" className={`${Style.title} ${plus3 ? Style.active : ''}`} onClick={() => back('item3')}>
              <img src={plus3 ? plus : minus} alt="Toggle" />
              <p className={Style.topic}>Вибір підручників</p>
            </div>
          );

          const title444 = (
            <div id="tit4" className={`${Style.title} ${plus4 ? Style.active : ''}`} onClick={() => back('item4')}>
              <img src={plus4 ? plus : minus} alt="Toggle" />
              <p className={Style.topic}>Освітні програми</p>
            </div>
          );
        const title555 = (
            <div id="tit5" className={`${Style.title} ${plus5 ? Style.active : ''}`} onClick={() => back('item5')}>
              <img src={plus5 ? plus : minus} alt="Toggle" />
              <p className={Style.topic}>Правила ліцею</p>
            </div>
          );
    
    return(
        
        <div className={Style.publikInfo}>
            <Heading massage="Організація навчання"/>

            
    <Accordion allowMultiple >

    <div className={Style.accordion}>
      <AccordionItem   header={title111} onClick={back}  >
      <div className={Style.item}>
    <p className={Style.typography}>Прийнято на засіданні педагогічної ради 31.08.2021 р., пр. №1.</p>
<p className={Style.main}>
Відповідно до статті 16 Закону України “Про загальну середню освіту” 2021/2022 навчальний рік розпочинається 01 вересня святом – «День знань».

Навчальні заняття організовуються за семестровою системою:
I семестр – з 01 вересня 2021 р. по 30 грудня 2021 р,
II семестр –з 17 січня по 08 червня 2022 р.

Канікули впродовж навчального року:<ul>
<li>осінні з 25 жовтня по 31 жовтня 2021 року</li>
<li>зимові з 31 грудня 2021 року по 16 січня 2022 року</li>
<li>весняні з 28 березня по 03 квітня 2022 року.</li>
</ul>
Навчальні заняття завершуються 08 червня 2022 року святом «Останній дзвоник». Закінчується навчальний рік проведенням державної підсумкової атестації.

Орієнтовні дати вручення документів про освіту для випускників:<ul>
<li>9-х класів 20 червня,</li>
<li>11-х класів – 25 червня.</li>
</ul>
</p>
<p className={Style.topic2}>Режим роботи ліцею «Оріяна» на 2020-2021 навчальний рік</p>
<p className={Style.main}>
Заклад працює в одну зміну. Режим роботи ліцею – 5-ти денний.

Початок навчання:<ul>
<li>1-7 кл. прихід 8.15 год – 8.30 год. Початок уроків 8.30. Вхід №1, №2,№3</li>
<li>8-11 кл. прихід 9.00год. – 9.25 год. Початок уроків 9.25. Вхід № №1, №2.</li>
</ul>
Встановлена тривалість уроків:<ul>
<li>у 1 класах – 35 хвилин;</li>
<li>у 2-3 класах – 40 хвилин;</li>
<li>у 5-11 класах – 45 хвилин.</li>
</ul>
Позакласна робота з предметів, факультативні заняття, клуби, секції проводяться в позаурочний час з 16.00 до 20.00 та в суботні дні з 10.00 до 14.00 згідно графіків.
</p>
                    </div>
      </AccordionItem >

      <AccordionItem   header={title222} onClick={back} style={{ marginTop: '16px' }} >
      <div className={Style.item}>
      <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Критерії оцінювання навчальних досягнень учнів початкової школи</p>

                        </div>
                        <img src={newTab}/>
                </div>


                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Критерії оцінювання навчальних досягнень учнів основної і старшої школи</p>

                        </div>
                        <img src={newTab}/>
                </div>

                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Орієнтовні вимоги до контролю та оцінювання навчальних досягнень учнів</p>

                        </div>
                        <img src={newTab}/>
                </div>
                    </div>
      </AccordionItem>

      <AccordionItem  header={title333} onClick={back}  style={{ marginTop: '16px' }}>
      <div className={Style.item} >
            <p className={Style.text1}>Результати вибору електронних версій оригінал-макетів підручників для 1 класу закладів загальної середньої освіти, поданих на конкурсний відбір підручників для здобувачів повної загальної середньої освіти і педагогічних працівників. 22.02.2023.</p>
            <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={word}/>
                            <p>Протокол вибору підручників для 1 класів</p>

                        </div>
                        <img src={download}/>
                </div>
            <p className={Style.text1}>Результати вибору електронних версій оригінал-макетів підручників для 5 класу закладів загальної середньої освіти, поданих на конкурсний відбір підручників для здобувачів повної загальної середньої освіти і педагогічних працівників. 27.05.2022.</p>


            <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={pdf}/>
                            <p>Вибір підручників для 5 класу НУШ</p>

                        </div>
                        <img src={download}/>
                </div>
      </div>
      </AccordionItem>
    


    <AccordionItem  header={title444} onClick={back}  style={{ marginTop: '16px' }}>
      <div className={Style.item} >
      <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Освітня програма школи ІІ-ІІІ ступеня ліцею «Оріяна» ЛМР на 2023-2024 навчальний<br></br> рік</p>

                        </div>
                        <img src={newTab}/>
                </div>
                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Програма “Інтелект України”</p>

                        </div>
                        <img src={newTab}/>
                </div>
      </div>
      </AccordionItem>
    
    <AccordionItem  header={title555} onClick={back} style={{ marginTop: '16px' }} >
      <div className={Style.item} >
      <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={pdf}/>
                            <p>Правила поведінки здобувачів освіти в ліцеї “Оріяна”</p>

                        </div>
                        <img src={download}/>
                </div>


                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={pdf}/>
                            <p>Правила поведінки в кафе-їдальні “Vydelka”</p>

                        </div>
                        <img src={download}/>
                </div> 

                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={pdf}/>
                            <p>Статут учнівського самоврядування ліцею “Оріяна”</p>

                        </div>
                        <img src={download}/>
                </div>
      </div>
      </AccordionItem>

      </div>
    </Accordion>



        </div>
    );
}
export default PublikInfo