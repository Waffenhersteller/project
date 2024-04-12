import React, { useEffect, useState } from 'react';
import Style from './index.module.css'
import line from '../../src/AllAssets/line.svg'
import plus from '../../src/AllAssets/plus.svg'
import minus from '../../src/AllAssets/minus.svg'
import Heading from '../Heading';
import Arrow from '../../src/AllAssets/ArrowDown.svg'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

function graduated() {



 
  const graduated2018A =  ["11-A", 
  "Дідик З. О.",
    "Бабачук Софія",
    "Березяк Тетяна",
    "Бучковська Софія",
    "Вдович Ростислав",
    "Вовкун Артем",
    "Волошин Юліана",
    "Добош Соломія",
    "Дубас Олена",
    "Когутайло Ірина",
    'Кокот Роман',
    "Логінов Микита",
    "Лозова Діана-Романа",
    'Малай Ігор',
    "Малюх Андрій",
    "Мельник Соломія",
    "Миронюк Андрій",
    "Огороднік Богуслава",
    "Парфенюк Роман",
    "Петришин Софія",
    "Порожній Данило",
    "Прокопів Олена",
    "Стефунька Вікторія",
    "Стисло Христина",
    "Тоган Юлія",
    "Федів Святослав",
    "Чех Юрій"]

    const graduated2018 =  ["11-Б", 
  "Новохатко Н. В.",
    "Бабачук Софія",
    "Березяк Тетяна",
    "Бучковська Софія",
    "Вдович Ростислав",
    "Вовкун Артем",
    "Волошин Юліана",
    "Добош Соломія",
    "Дубас Олена",
    "Когутайло Ірина",
    'Кокот Роман',
    "Логінов Микита",
    "Лозова Діана-Романа",
    'Малай Ігор',
    "Малюх Андрій",
    "Мельник Соломія",
    "Миронюк Андрій",
    "Огороднік Богуслава",
    "Парфенюк Роман",
    "Петришин Софія",
    "Порожній Данило",
    "Прокопів Олена",
    "Стефунька Вікторія",
    "Стисло Христина",
    "Тоган Юлія",
    "Федів Святослав",
    "Чех Юрій"]
  const imgGraduated2018 = [{id:"/src/Graduated/assets/111.png"},{id:"src/Graduated/assets/img2.png"}]

  /* let currentClass1 = graduated2018A
  let currentImgClass1 = imgGraduated2018[0]

  let currentClass2 = graduated2018
  let currentImgClass2 = imgGraduated2018[1] */

  const graduated2022 =  ["11-Б", 
  "Новохатко Н. В.","11-Б", 
  "Новохатко Н. В.","11-Б", 
  "Новохатко Н. В.","11-Б", 
  "Новохатко Н. В.","11-Б", 
  "Новохатко Н. В.",]
  const graduated2022A =  ["11-Б", 
  "Новохатко Н. В.","11-Б", 
  "Новохатко Н. В.","11-Б", 
  "Новохатко Н. В.","11-Б", 
  "Новохатко Н. В.","11-Б", 
  "Новохатко Н. В.",]
  
    

    
  
 

  const [plus1, setPlus1] = useState(true);
  const [plus2, setPlus2] = useState(true);
  
  const [state, setState ] = useState(false);
  const [currentClass1, setCurrentClass1] = useState(graduated2018A);
  const [currentClass2, setCurrentClass2] = useState(graduated2018);
  const [currentImgClass1, setCurrentImgClass1] = useState(imgGraduated2018[0]);
  const [currentImgClass2, setCurrentImgClass2] = useState(imgGraduated2018[1]);
  const [year, setYear] = useState(2018);

  let name = currentClass1.slice(2).map((item)=>{
    return <li>{item}</li>})
  const back = (section) => {
    let titElement;

    if (section === 'item1') {
      titElement = document.getElementById('tit');
      setPlus1((prev) => !prev);
    } else if (section === 'item2') {
      titElement = document.getElementById('tit2');
      setPlus2((prev) => !prev);
    }

    if (titElement) {
      const isActive = (section === 'item1' && !plus1) || (section === 'item2' && !plus2)
      titElement.style.backgroundColor = isActive ? 'white' : '#D9E9EB';
      titElement.style.border = isActive ? '1px solid #9E9E9E' : '1px solid #1D7A85';
      titElement.style.borderBottom = isActive ? '1px solid #9E9E9E' : 'none';

      titElement.style.borderRadius = isActive ? '8px 8px 8px 8px' : '8px 8px 0px 0px';
    }
  };
  const title111 = (
    <div id="tit" className={`${Style.title} ${plus1 ? Style.active : ''}`} onClick={() => back('item1')}>
      <img src={plus1 ? plus : minus} alt="Toggle" />
      <p className={Style.topic}>Список випускників</p>
    </div>
  );

  const title222 = (
    <div id="tit2" className={`${Style.title} ${plus2 ? Style.active : ''}`} onClick={() => back('item2')}>
      <img src={plus2 ? plus : minus} alt="Toggle" />
      <p className={Style.topic}>Список випускників</p>
    </div>
  );

  const drope = () => {
    const dropdownItems = document.getElementById('dropdownItems');
    setState(!state); // Toggle state
    dropdownItems.style.display = state ? 'none' : 'block'; // Toggle display
    
    const arrow = document.getElementById('arrow');
  arrow.style.transform = state ? 'rotate(0deg)' : 'rotate(180deg)';

  const box = document.getElementById('dropdownValue')
      box.style.border = state ? "1px solid #1E1E1E" : '1px solid #1D7A85';
  };

  const yearChanger = (selectedYear) => { 
    setYear(selectedYear);
    switch (selectedYear) {
      case '2022':
        setCurrentClass1(graduated2022A);
        setCurrentClass2(graduated2022);
        break;
      case '2018':
        setCurrentClass1(graduated2018A);
        setCurrentClass2(graduated2018);
        break;
      // Add cases for other years if needed
      default:
        break;
    }
  }

 

  return (
    <graduated>
      <Heading massage="Випускники" />

      
      <Accordion allowMultiple>



        <div className={Style.heading}>

        
        <div className={Style.topConteiner}><h3>Рік випуску</h3>
        
        <div className={Style.dropdown}  onClick={drope}>
          <div className={Style.dropdownValue} id='dropdownValue'>
          <p>{year}</p>
          <div className=""><img src={Arrow} id='arrow'/></div>
          </div>
          <div class={Style.dropdownItemsWrapper} id='dropdownItems'>
            <div className={Style.dropdownItems} >
              <p onClick={ () =>yearChanger('2023')} >2023</p>
              <p onClick={ () => yearChanger('2022')} >2022</p>
              <p onClick={ () =>yearChanger('2021')}>2021</p>
              <p onClick={() =>yearChanger('2020')}>2020</p>
              <p onClick={() =>yearChanger('2019')}>2019</p>
              <p onClick={ () => yearChanger('2018')}>2018</p>
              <p onClick={() =>yearChanger('2017')}>2017</p>
              <p onClick={() =>yearChanger('2016')}>2016</p>
              <p onClick={() =>yearChanger('2015')}>2015</p>
              <p onClick={() =>yearChanger('2014')}>2014</p>
              <p onClick={() =>yearChanger('2013')}>2013</p>
          </div>
          </div>
        </div>
        </div>

          <div className="">
            <div className={Style.classInfo}>
          <h3>{currentClass1[0]}</h3>
          <p>Класний керівник: {currentClass1[1]} </p>
          </div>
          <div ><img src={line}  className={Style.line}/></div>
          </div>
          <img src={currentImgClass1.id} className={Style.mainImg} />
        </div>

        <AccordionItem header={title111} onClick={back}  >
          <div className={Style.item}>
            <ol>{name}</ol>
          </div>
        </AccordionItem>
        <div className="">


<div className={Style.classInfo}>
<h3>{currentClass2[0]}</h3>
<p>Класний керівник: {currentClass2[1]} </p>
</div>
<div ><img src={line} alt="" className={Style.line} /></div>
</div>
<img src={currentImgClass2.id} className={Style.mainImg} />
        <AccordionItem header={title222} onClick={back}>
          <div className={Style.item}>
          <ol>{name}</ol>
          </div>
        </AccordionItem>
      </Accordion>
    </graduated>
  );
}


export default graduated