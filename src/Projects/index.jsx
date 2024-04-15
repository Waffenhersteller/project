import React, { useEffect, useState } from 'react';
import Style from './index.module.css'
import Heading from '../Heading';
import { Link } from 'react-router-dom'; 

function Projects(){
    const anouns = <div className={Style.uppreButton}><button>Анонси</button></div>;
  const allProjects = <div className={Style.uppreButton} id='2'><button>Всі проєкти</button></div>;
  const done = <div className={Style.uppreButton}><button>Завершені</button></div>;
  const lasting = <div className={Style.uppreButton}><button>Тривають</button></div>;

  const anouns2 = <div className={Style.anouns2}>Анонс</div>;
  const done2 = <div className={Style.done2}>Завершено</div>;
  const lasting2 = <div className={Style.lasting2}>Триває</div>;

  const Data = [
    { type: anouns2, time: '23.11.2023', topic: "Табір з вивчення англійської мови у Фінляндії", content: `Відкривається набір до освітнього табору для школярів у Фінляндії, з вивчення англійської мови, на базі Західно-Фінляндського Коледжу. Проект реалізується за підтримки мерії м. Гуйттінен та україно-польської фундації «IIASC». Запрошуємо учнів зареєструватися і взяти участь в одному з таборів Відкривається набір до освітнього табору для школярів у Фінляндії, з вивчення англійської мови, на базі Західно-Фінляндського Коледжу. Проект реалізується за підтримки мерії м. Гуйттінен та україно-польської фундації «IIASC». Запрошуємо учнів зареєструватися і взяти участь в одному з таборів `, link: "/finlandCaps" },
    { type: lasting2, time: '14.11.2023', topic: "Освітня поїздка до Швеції", content: `Поїздка, організована з метою поглиблення знань та культурного обміну, стала невід'ємною частиною навчального процесу учнів. Під час цього заходу вони отримують унікальну можливість вивчення шведської культури, традицій та історії, а також знайомляться з освітніми системами та підходами Швеції.Поїздка, організована з метою поглиблення знань та культурного обміну, стала невід'ємною частиною навчального процесу учнів. Під час цього заходу вони отримують унікальну можливість вивчення шведської культури, традицій та історії, а також знайомляться з освітніми системами та підходами Швеції.`, link: "" },
    { type: lasting2, time: '28.10.2023', topic: "Зустріч із німецькими партнерами", content: `Зустріч з німецькими партнерами стала не лише можливістю обміну знанням, але і сприяла формуванню тісної дружби та взаєморозуміння між студентськими групами. Організатори прагнуть досягти максимального ефекту від цієї ініціативи, створюючи освітній простір, де молодь може навчатися та зростати разом, об'єднуючи різні культури та перспективи.`, link: "" },
    { type: done2, time: '06.10.2023', topic: `Проєкт “Демократичні цінності суспільства”`, content: `Серед найуспішніших міжнародних проєктів ліцею став проєкт обміну із школою Кунгсгардсгімназієт з м. Норшепінга (Швеція), де основною темою було вивчення внеску молоді у розвиток демократії своєї країни та порівняння цих аспектів життя в Україні. Нове сторіччя, нові світові умови, глобалізація та прозорість кордонів інспірували новий рівень міжнародної співпраці та поширення тематики і змісту проєктів.`, link: "" },
  ];


        const [activeButton, setActiveButton] = useState(null);

    // Function to handle button click and set active button
     const handleButtonClick = (buttonId) => {
        useEffect(()=>{
            let currentButton = document.getElementById('buttonId')
            currentButton.style.order = '1';
        })
        
     };

        
    return(

        
        <div className={Style.projects}>
            
            <Heading massage='Проєкти'/>

            <div className={Style.buttons}>
           
                {allProjects }
                {anouns}
                {done}
                {lasting}
            </div>
            
            <div className={Style.content}>
        {Data.map((item, key) => (
          <div className={Style.container} key={key}>
            <div className={Style.upperContainerInf}>
              {item.type}
              {item.time}
            </div>
            <h3>{item.topic}</h3>
            <p>{item.content}</p>
            <button Type="Secondary" State="Default" Specification="Long"><Link to={item.link} >Переглянути детальніше</Link></button>
          </div>
        ))}
      </div>




        </div>
    );
}


export default Projects

