import React, { useEffect, useState } from 'react';
import Style from './index.module.css'



import plus from '../../src/AllAssets/plus.svg'
import minus from '../../src/AllAssets/minus.svg'
import Heading from '../Heading';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';


       

function Vacancy(){
    const [plus1, setPlus1] = useState(true);
    const [plus2, setPlus2] = useState(true);
    const [plus3, setPlus3] = useState(true);
    const [plus4, setPlus4] = useState(true);

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
      }else if(section ==='item4'){
        titElement = document.getElementById('tit4');
        setPlus4((prev) => !prev);
      }
    
      if (titElement) {
        const isActive = (section === 'item1' && !plus1) || (section === 'item2' && !plus2) || (section === 'item3' && !plus3) || (section === 'item4' && !plus4);
        titElement.style.backgroundColor = isActive ? 'white' : '#D9E9EB';
        titElement.style.border = isActive ? '1px solid #9E9E9E' : '1px solid #1D7A85';
        titElement.style.borderBottom = isActive ? '1px solid #9E9E9E' : 'none';
        
        titElement.style.borderRadius = isActive ? '8px 8px 8px 8px' : '8px 8px 0px 0px';
      }
    };
    
    
      
      
    
      const title111 = (
        <div id="tit" className={`${Style.title} ${plus1 ? Style.active : ''}`} onClick={() => back('item1')}>
          <img src={plus1 ? plus : minus} alt="Toggle" />
          <p className={Style.topic}>Вчитель молодших класів</p>
        </div>
      );
    
      const title222 = (
        <div id="tit2" className={`${Style.title} ${plus2 ? Style.active : ''}`} onClick={() => back('item2')}>
          <img src={plus2 ? plus : minus} alt="Toggle" />
          <p className={Style.topic}>Вчитель англійської мови</p>
        </div>
      );
    
      const title333 = (
        <div id="tit3" className={`${Style.title} ${plus3 ? Style.active : ''}`} onClick={() => back('item3')}>
          <img src={plus3 ? plus : minus} alt="Toggle" />
          <p className={Style.topic}>Вчитель математики</p>
        </div>
      );

      const title444 = (
        <div id="tit4" className={`${Style.title} ${plus4 ? Style.active : ''}`} onClick={() => back('item4')}>
          <img src={plus4 ? plus : minus} alt="Toggle" />
          <p className={Style.topic}>Вчитель історії</p>
        </div>
      );
        
      const vacancyInavite = "Запрошуємо долучитися до нашої команди активних, кваліфікованих фахівців, які готові забезпечувати якісну освіту та створювати навчальне середовище, де кожен учень може розкрити свій потенціал."

      const vacancy = <div>
      <p className={Style.vacancyInvite}>{vacancyInavite}</p>


      
  <Accordion allowMultiple>
  <AccordionItem   header={title111} onClick={back} style={{ marginTop: '16px' }} >
<div className={Style.item}>
<p className={Style.requirement}>Зайнятість: 18 годин</p>
          <p>Вимоги: </p>



          <p>Надішліть, будь ласка, ваше резюме на пошту: <span style={{ color: "#165C64" }}> oriyana@mail.lviv.ua</span> </p>
              </div>
</AccordionItem>

<AccordionItem   header={title222} onClick={back} style={{ marginTop: '16px' }} >
<div className={Style.item}>
      <p className={Style.requirement}>Зайнятість: 18 годин</p>
          
     <p>Вимоги: </p>
          <ul>
          <li>Вища освіта в галузі англійської мови або суміжних спеціальностей.</li>
          <li>Досвід викладання англійської мови, особливо в корпоративному середовищі, буде перевагою.</li>
          <li>Відмінні мовні навички та знання сучасних методик навчання.</li>
          <li>Здатність адаптувати програму під індивідуальні потреби учнів.</li>
          <li>Відповідальність, організованість та комунікабельність.</li>
          <li>Вміння відкрито і ефективно спілкуватися з колегами.</li>
          <li>Свідома громадянська позиція, досконале володіння українською мовою. Рівень володіння англійською мовою — С1 або вище.Вимоги:</li>
          
              
          </ul>
              <p>Надішліть, будь ласка, ваше резюме на пошту: <span style={{ color: "#165C64" }}> oriyana@mail.lviv.ua</span> </p>

              </div>
              
</AccordionItem>

<AccordionItem  header={title333} onClick={back} style={{ marginTop: '16px' }} >
<div className={Style.item} >
<p className={Style.requirement}>Зайнятість: 18 годин</p>
          <p>Вимоги: </p>



          <p>Надішліть, будь ласка, ваше резюме на пошту: <span style={{ color: "#165C64" }}> oriyana@mail.lviv.ua</span> </p>
          </div>
</AccordionItem>

<AccordionItem  header={title444} onClick={back} style={{ marginTop: '16px' }} >
<div className={Style.item} >
<p className={Style.requirement}>Зайнятість: 18 годин</p>
          <p>Вимоги: </p>



          <p>Надішліть, будь ласка, ваше резюме на пошту: <span style={{ color: "#165C64" }}> oriyana@mail.lviv.ua</span> </p>
          </div>
</AccordionItem>
</Accordion>
</div>
      const vacansyNoInvite= <p className={Style.vacancyInvite}>На жаль, зараз у нас немає відкритих вакансій. Якщо ви хочете приєднатися до нашої команди, будь ласка, слідкуйте за оновленнями на цій сторінці.</p>

    let offers = true;
    return(
        <div className={Style.vacancy}>
            <Heading massage="Вакансії"/>
                
            {/* <p>{vacansyNoInvite}</p> */}
            <div>{vacancy}</div>
        </div>
    );
}

export default Vacancy