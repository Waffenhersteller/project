import Style from './index.module.css'
import finger from './assets/fingerPrint.svg'
import finger2 from './assets/fingerprint2.svg'
import React from 'react';

function Heading(props){
    return( 
        <div className={Style.heading}>
            <div className={Style.conteiner}>
            <h1>{props.massage}</h1>
            <img src={finger}/>
            </div>
        </div>
    )
}


export default Heading