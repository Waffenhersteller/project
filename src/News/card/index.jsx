/* import Style from "./index.module.css"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';




const announcement = <div className={Style.announcement}>Оголошення</div>
const SchoolLife = <div className={Style.SchoolLife}>Шкільне життя</div>
const achievements = <div className={Style.achievements}>Досягення</div>
const events = <div className={Style.events}>Події</div>
const projects = <div className={Style.projects}>Проєкти</div>

const classes = [announcement,SchoolLife,achievements,events, projects]


   


function Card(props){
    function log(){
        console.log(props.counter)
    }    


    const numberToPass = 1;
    
    return (
    
<div className={`${Style.card} ${props.class === props.selectedChip ? Style.selected : ''}`}>
        <div className={Style.topSide}>
            <img src={props.img} alt="" />
        </div>

        <div className={Style.bottomSide}>
                <div className={Style.bottomSideTop}>
                    <div className={Style.bottomSideClass}>
                        <div className={Style.uppreSideClass}>
                            {classes[props.class]}
                        </div>
                    <p>{props.data}</p>
            </div>

            <div className={Style.info}>
                <h3>{props.topic}</h3>
                <p>{props.about}</p>
            </div>
            </div>
            
            <Link to="/OneProject" state={{ number: props.counter }}>
                    <button >Читати далі</button>
            </Link>
                 
                <div>

 </div>

        </div>    
        </div>
    )
}

Card.propTypes ={
    img: PropTypes.string,
    topic: PropTypes.string,
    about: PropTypes.string,
    data: PropTypes.number,
    class: PropTypes.number,
    counter: PropTypes.number,
     selectedChip: PropTypes.string
}
Card.defaultProps = {
    img:"./assets/Photo.png"
}



export default Card

 */

import Style from "./index.module.css";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const announcement = <div className={Style.announcement}>Оголошення</div>
const SchoolLife = <div className={Style.SchoolLife}>Шкільне життя</div>
const achievements = <div className={Style.achievements}>Досягення</div>
const events = <div className={Style.events}>Події</div>
const projects = <div className={Style.projects}>Проєкти</div>

const classes = [announcement, SchoolLife, achievements, events, projects]

function Card(props) {
    
     let displayStyle = props.selectedChip !== null && props.class !== props.selectedChip ?  'none': 'block' ;

    return (
        <div style={{ display: displayStyle }} className={`${Style.card}`}>
            <div className={Style.topSide}>
                <img src={props.img} alt="" />
            </div>

            <div className={Style.bottomSide}>
                <div className={Style.bottomSideTop}>
                    <div className={Style.bottomSideClass}>
                        <div className={Style.uppreSideClass}>
                            {classes[props.class]}
                        </div>
                        <p>{props.data}</p>
                    </div>

                    <div className={Style.info}>
                        <h3>{props.topic}</h3>
                        <p>{props.about}</p>
                    </div>
                </div>

                <Link to="/OneProject" state={{ number: props.counter }}>
                    <button >Читати далі</button>
                </Link>
            </div>
        </div>
    );
}

Card.propTypes = {
    img: PropTypes.string,
    topic: PropTypes.string,
    about: PropTypes.string,
    data: PropTypes.string,
    class: PropTypes.number,
    counter: PropTypes.number,
    selectedChip: PropTypes.number
}

Card.defaultProps = {
    img: "./assets/Photo.png"
}

export default Card;
