import React, { useEffect, useState } from 'react';
import Style from './index.module.css'
import Heading from '../Heading';
import Arrow from '../../src/AllAssets/ArrowDown.svg'
import DirectorImage from './assets/Director.png';
import placeholder from './assets/placeholder.png'
import img1 from './assets/DeputyDirectorEducationalWork.png'
import img2 from './assets/DeputyDirectorForEducationalWork.png'
import img3 from './assets/DeputyDirectorForEducationalWork2.png'
import img4 from './assets/DeputyDirectorForEducationalWork3.png'
import img5 from './assets/DeputyDirectorOfEducationalWork.png'
import img6 from './assets/DeputyDirectorOfEconomicWork.png'

let id = 0
function TeachingStaff(){


    const positions = [{img:DirectorImage, name: 'Коропецька Ірина Богданівна', curentPosition:'Директор'},
    {img:placeholder, name: 'Сакович Людмила Cергіївна', curentPosition:'Заступник директора з навчально-виховної роботи'},
    {img:img1, name: 'Михальська Оксана-Віра Михайлівна', curentPosition:'Заступник директора з навчально-виховної роботи'},
    {img:img2, name: 'Дідик Зоряна Орестівна', curentPosition:'Заступник директора з навчально-виховної роботи'},
    {img:img3, name: 'Ярославська Наталія Адамівна', curentPosition:'Заступник директора з навчально-виховної роботи'},
    {img:img4, name: 'Сахно Оксана Адамівна', curentPosition:'Заступник директора з навчально-виховної роботи'},
    {img:img5, name: 'Зарицька Оксана Василівна', curentPosition:'Заступник директора з виховної роботи'},
    {img:img6, name: 'Мацькович Лілія Петрівна', curentPosition:'Заступник директора з господарської роботи'},

    {img:placeholder, name: 'Кармаліта Наталія', curentPosition:'Головний бухгалтер'},
    {img:placeholder, name: 'Жовнер Надія', curentPosition:'Бухгалтер'},
    {img:placeholder, name: 'Зелінська Надія', curentPosition:'Юрисконсульт'},
    {img:placeholder, name: 'Чорна Галина', curentPosition:'Секретар'},
    {img:placeholder, name: 'Опришко Яна', curentPosition:'Психолог'},
    {img:placeholder, name: 'Шевченко Ольга', curentPosition:'Бібліотекар'},

  ]




    const [state, setState ] = useState(false);
    const [year, setYear] = useState("Всі вчителі");

    const yearChanger = (newYear) => {
      setYear(newYear); // Update the year state with the selected value
      // You can also add additional logic here if needed
  }
    const drope = () => {
        const dropdownItems = document.getElementById('dropdownItems');

        setState(!state); // Toggle state
        dropdownItems.style.display = state ? 'none' : 'block'; // Toggle display
        const arrow = document.getElementById('arrow');
      arrow.style.transform = state ? 'rotate(0deg)' : 'rotate(180deg)';
      const box = document.getElementById('dropdownValue')
      box.style.border = state ? "1px solid #1E1E1E" : '1px solid #1D7A85';
    }
    return(


        <div className={Style.teachingStaff}>
            <Heading massage="Педагогічний колектив"/>

            

        

            
            
            <div className={Style.TopConteiner}><div className={Style.dropdown} onClick={drope}>
            <div className={Style.dropdownValue} id='dropdownValue'>
             <p>{year}</p>
           <div className=""><img src={Arrow} id='arrow'/></div>
            </div>


  <div class={Style.dropdownItemsWrapper}id='dropdownItems'>
    <div className={Style.dropdownItems} >
    
    <p onClick={() => {yearChanger('Всі вчителі'); id = 1}}>Всі вчителі</p>
    <p onClick={() => yearChanger('Адміністрація')}>Адміністрація</p>
    <p onClick={() => yearChanger('Мовно-літературна кафедра')}>Мовно-літературна кафедра</p>
    <p onClick={() => yearChanger('Кафедра іноземних мов')}>Кафедра іноземних мов</p>
    <p onClick={() => yearChanger('Громадянська та історична кафедра')}>Громадянська та історична кафедра</p>
    <p onClick={() => yearChanger('Математична кафедра')}>Математична кафедра</p>
    <p onClick={() => yearChanger('Природнича кафедра')}>Природнича кафедра</p>
    <p onClick={() => yearChanger('Мистецька кафедра')}>Мистецька кафедра</p>
    <p onClick={() => yearChanger('Соціальна кафедра')}>Соціальна кафедра</p>
    <p onClick={() => yearChanger('Інформатична кафедра')}>Інформатична кафедра</p>
    <p onClick={() => yearChanger('Кафедра фізичної культури')}>Кафедра фізичної культури</p>
    <p onClick={() => yearChanger('Початкові класи')}>Початкові класи</p>
    <p onClick={() => yearChanger('Асистенти вчителів')}>Асистенти вчителів</p>
    </div>
  </div>
</div>
</div>
            
      

        {/* <div className={Style.conteiner}>

          {positions.map((item, index) =>(
                
              <div className={Style.profile} key={index}>
                  <div className="">
                    <img src={item.img} alt="" />
                  </div>

              <div>
                <p className={Style.Name}>{item.name}</p>
                <p  className={Style.Positions}>{item.curentPosition}</p>
              </div>
          </div>

          ))}
          </div> */}


          <div className={Style.conteiner}>
  {/* Filter positions based on the selected year */}
  {positions
    .filter((item) => {
      if (year === 'Адміністрація') {
        // Filter only items with positions matching "Адміністрація"
        return (
          item.curentPosition === 'Директор' ||
          item.curentPosition === 'Головний бухгалтер' ||
          item.curentPosition === 'Юрисконсульт' ||
          item.curentPosition === 'Секретар' ||
          item.curentPosition === 'Психолог' ||
          item.curentPosition === 'Бібліотекар'
        );
      } else if(year === 'Асистенти вчителів') {
        return(item.curentPosition === 'Заступник директора з навчально-виховної роботи');
      }
      else{
        return true
      }
    })
    .map((filteredItem, index) => (
      <div className={Style.profile} key={index}>
        <div className="">
          <img src={filteredItem.img} alt="" />
        </div>
        <div>
          <p className={Style.Name}>{filteredItem.name}</p>
          <p className={Style.Positions}>{filteredItem.curentPosition}</p>
        </div>
      </div>
    ))}
</div>

          
        </div>
    );
}

export default TeachingStaff