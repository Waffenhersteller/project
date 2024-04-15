import Style from './index.module.css'
import Heading from '../Heading'
import line from '../../src/AllAssets/line.svg'
import link from '../../src/AllAssets/link.svg'
import Newtab from '../../src/AllAssets/newTab.svg'

function Shedule(){
    const table1 = [{ lesson: "1 урок", time: "08:30 -  9:15", break1: "10 хв"},
                    {lesson: "2 урок", time: "09:25 - 10:10", break1: "10 хв"}, 
                    {lesson: "3 урок", time: "10:20 - 11:05", break1: "20 хв"}, 
                    {lesson: "4 урок", time: "11:25 - 12:10", break1: "20 хв"},
                    {lesson: "5 урок", time: "12:30 - 13:15", break1: "10 хв"},
                    {lesson: "6 урок", time: "13:25 - 14:10", break1: "10 хв"},
                    {lesson: "7 урок", time: "14:20 - 15:05", break1: "10 хв"},
                    {lesson: "8 урок", time: "15:15 - 16:00", break1: ""},
]
const table2 = [
    { lesson: "1-2", time: "15:30-18:30"},
    {lesson: "3-4", time: "13:00-18:00"},  
]


    return(
        <div className={Style.shedule}>
        <Heading massage="Розклад занять"/>

        <div className={Style.first}>

        <h2>Початкова школа</h2>
        <img className={Style.firstImg} src={line}/>
        <h4>Розклад занять</h4>
        <div className={Style.upperTr}>
                        <div className={Style.table}><p>Урок</p></div>
                        <div className={Style.table1}><p>Години</p></div>
                        <div className={Style.table2}><p>Перерва </p></div>
                    </div>
        {table1.map((val, key) => {
            return( 
                <div className={Style.tables}>
                   
                <div className={Style.table}><p>{val.lesson}</p></div>
                <div className={Style.table1}><p>{val.time}</p></div>
                <div className={Style.table2}><p>{val.break1}</p></div>
                
                </div>
                    
                
            )
        })}
        
        <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Розклад уроків для початкової школи</p>

                        </div>
                        <img src={Newtab}/>
        </div>
        </div>

        <div className={Style.first}>

        <h2>Старша школа</h2>
        <img className={Style.firstImg} src={line}/>
        <h4>Розклад занять</h4>
        <div className={Style.upperTr}>
                        <div className={Style.table}><p>Урок</p></div>
                        <div className={Style.table1}><p>Години</p></div>
                        <div className={Style.table2}><p>Перерва </p></div>
                    </div>
        {table1.map((val, key) => {
            return( 
                <div className={Style.tables}>
                   
                <div className={Style.table}><p>{val.lesson}</p></div>
                <div className={Style.table1}><p>{val.time}</p></div>
                <div className={Style.table2}><p>{val.break1}</p></div>
                
                </div>
                    
                
            )
        })}
        
        <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={link}/>
                            <p>Розклад уроків для старшої школи</p>

                        </div>
                        <img src={Newtab}/>
        </div>
        </div>


<div className={Style.first}>
        <h2>Група продовженого дня</h2>
        <img className={Style.firstImg} src={line}></img>
        <h4>Режим роботи</h4>


        <div className={Style.upperTr2}>
                        <div className={Style.table}><p>Класи</p></div>
                        <div className={Style.table1}><p>Години</p></div>
                        
                    </div>
        {table2.map((val, key) => {
            return( 
                <div className={Style.tables}>
                   
                <div className={Style.table}><p>{val.lesson}</p></div>
                <div className={Style.table1}><p>{val.time}</p></div>
                
                
                </div>
                    
                
            )
        })}
        </div>


        
        </div>

    );
}

export default Shedule