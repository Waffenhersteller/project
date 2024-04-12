
 import React, { useEffect, useState, useCallback  } from 'react';
import Style from './index.module.css'
import line from '../../src/AllAssets/line.svg'
import arrow from './assets/Ar.svg'
import fingerprint from './assets/fingerprint.svg';
/* import { Link } from 'react-router-dom';  */

import img1 from './assets/img1.png'
import ArrowRight from './assets/ArrowRight.svg'
import jsonData from './../News/news.json';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';



const announcement = <div className={Style.announcement}>Оголошення</div>
const SchoolLife = <div className={Style.SchoolLife}>Шкільне життя</div>
const achievements = <div className={Style.achievements}>Досягення</div>
const events = <div className={Style.events}>Події</div>
const projects = <div className={Style.projects}>Проєкти</div>

const classes = [announcement,SchoolLife,achievements,events, projects]


   


function OneProject() {

  const dot1 = document.getElementById('dott1')
    const dot2 = document.getElementById('dott2')
    const dot3 = document.getElementById('dott3')
    const leftButton = document.getElementById('leftButton')
    const rightButton = document.getElementById('rightButton')
    const dotts = [dot1, dot2, dot3]



    const [photo, setPhoto] = useState(0);
    const [dotStyles, setDotStyles] = useState([
      { width: '32px', backgroundColor: '#1D7A85' },
      { width: '8px', backgroundColor: '#D6D6D6' },
      { width: '8px', backgroundColor: '#D6D6D6' }
    ]);



  const location = useLocation();
  const numberFromState = location.state?.number - 1;
  const photos = [jsonData[numberFromState].img, jsonData[numberFromState].img2, jsonData[numberFromState].img3]
    
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1) };



    


/* function changePicture(state) {
  if (state === 'next') {
    if (photo === 2) {
      setPhoto(0);
      dotts[0].style.width = '32px';
      dotts[0].style.backgroundColor = '#1D7A85';

      dotts[1].style.width = '8px';
      dotts[1].style.backgroundColor = '#D6D6D6';

      dotts[2].style.width = '8px';
      dotts[2].style.backgroundColor = '#D6D6D6';
    } else {
      setPhoto(photo + 1);
      dotts[photo].style.width = '8px';
      dotts[photo].style.backgroundColor = '#D6D6D6';
      
      dotts[photo + 1].style.width = '32px';
      dotts[photo + 1].style.backgroundColor = '#1D7A85';
    }
  } 
  else if (state === 'prev') {
    if (photo === 0) {
      setPhoto(2);
      dotts[0].style.width = '8px';
      dotts[0].style.backgroundColor = '#D6D6D6';

      dotts[1].style.width = '8px';
      dotts[1].style.backgroundColor = '#D6D6D6';

      dotts[2].style.width = '32px';
      dotts[2].style.backgroundColor = '#1D7A85'; // Uncomment this line
    } else {
      setPhoto(photo - 1);
      dotts[photo].style.width = '8px';
      dotts[photo].style.backgroundColor = '#D6D6D6';

      dotts[photo - 1].style.width = '32px';
      dotts[photo - 1].style.backgroundColor = '#1D7A85';
    }
  }
} */
function changePicture(state) {
  if (state === 'next') {
    if (photo === 2) {
      setPhoto(0);
      setDotStyles([
        { width: '32px', backgroundColor: '#1D7A85' },
        { width: '8px', backgroundColor: '#D6D6D6' },
        { width: '8px', backgroundColor: '#D6D6D6' }
      ]);
    } else {
      setPhoto(photo + 1);
      setDotStyles(prevDotStyles => {
        return prevDotStyles.map((dotStyle, index) => {
          if (index === photo) {
            return { ...dotStyle, width: '8px', backgroundColor: '#D6D6D6' };
          } else if (index === photo + 1) {
            return { ...dotStyle, width: '32px', backgroundColor: '#1D7A85' };
          } else {
            return dotStyle;
          }
        });
      });
    }
  } else if (state === 'prev') {
    if (photo === 0) {
      setPhoto(2);
      setDotStyles([
        { width: '8px', backgroundColor: '#D6D6D6' },
        { width: '8px', backgroundColor: '#D6D6D6' },
        { width: '32px', backgroundColor: '#1D7A85' }
      ]);
    } else {
      setPhoto(photo - 1);
      setDotStyles(prevDotStyles => {
        return prevDotStyles.map((dotStyle, index) => {
          if (index === photo) {
            return { ...dotStyle, width: '8px', backgroundColor: '#D6D6D6' };
          } else if (index === photo - 1) {
            return { ...dotStyle, width: '32px', backgroundColor: '#1D7A85' };
          } else {
            return dotStyle;
          }
        });
      });
    }
  }
}

  return (
    <div className={Style.heading}>
      <header className={Style.header}>
                <div className={Style.headerMain}>
                    <div className={Style.leftSideHeader} onClick={goBack}><img src={arrow} alt="arrow" /> <p>Назад</p></div>
                    <img className={Style.fingerPrint} src={fingerprint} alt="" />
                </div>
            </header>
            <div className={Style.topic}>
                <h2>{jsonData[numberFromState].topic}</h2>
                <div className={Style.time}>
                    <p>{jsonData[numberFromState].data}</p>
                    {classes[jsonData[numberFromState].class]}
                </div>
                <img src={line} alt="line" />
            </div>
            <div className={Style.text}>
              <p>{jsonData[numberFromState].about}</p> 
            </div>



            
           


           <div className={Style.content}>
    <div className={Style.title}>
        <h3>Фотозвіт</h3>
        

<div className={Style.buttons}>
            <div
                id='leftButton'
                className={Style.arrowleft}
                style={{ backgroundColor: photo === 0 ?  '#EEEEEE' :'#1D7A85'  }}
                onClick={() => changePicture('prev')}
            >
                <img src={ArrowRight} alt="ArrowRight" />
            </div>
            <div
                id='rightButton'
                className={Style.arrowRight}
                style={{ backgroundColor: photo === 2 ? '#EEEEEE':'#1D7A85'   }}
                onClick={() => changePicture('next')}
            >
                <img src={ArrowRight} alt="ArrowRight" />
            </div>
        </div>
    </div>
    <div className={Style.photo}>
        <img src={photos[photo]} alt="" />
    </div>
    <div className={Style.dotts}>
    <div
        id='dott1'
        className={Style.dott1}
        style={dotStyles[0]}
    ></div>
    <div
        id='dott2'
        className={Style.dott}
        style={dotStyles[1]}
    ></div>
    <div
        id='dott3'
        className={Style.dott}
        style={dotStyles[2]}
    ></div>
</div>
</div>

















           
    </div>

  );
}

export default OneProject;